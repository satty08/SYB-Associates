import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { createServerFn } from "@tanstack/react-start";
import { sql } from "@/lib/db.server";
import { trackEvent } from "@/lib/analytics";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SYB Associates" },
      { name: "description", content: "Talk to SYB Associates about a supply chain, digital, or analytics engagement in pharmaceutical or manufacturing. 30-minute diagnostics available." },
      { property: "og:title", content: "Contact — SYB Associates" },
      { property: "og:description", content: "Book a 30-minute diagnostic with a SYB Associates partner." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact — SYB Associates" },
      { name: "twitter:description", content: "Book a 30-minute diagnostic with a SYB Associates partner." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact SYB Associates",
          url: "/contact",
        }),
      },
    ],
  }),
  component: ContactPage,
});

const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid work email").max(255),
  company: z.string().trim().min(2, "Company is required").max(120),
  role: z.string().trim().max(120).optional().or(z.literal("")),
  industry: z.enum(["pharma", "manufacturing", "consumer-health", "other"], {
    message: "Choose an industry",
  }),
  interest: z.enum(["supply-chain", "digital", "analytics", "operations", "not-sure"], {
    message: "Choose an area",
  }),
  message: z.string().trim().min(10, "Give us a sentence or two of context").max(1500),
});

type LeadForm = z.infer<typeof leadSchema>;
type Errors = Partial<Record<keyof LeadForm, string>>;

type LeadInput = LeadForm & { sourcePath: string | null; userAgent: string | null };

// Server-only — stripped from the client bundle at build time.
const submitLead = createServerFn({ method: "POST" })
  .validator((data: LeadInput) => data)
  .handler(async ({ data }) => {
    await sql`
      INSERT INTO leads (name, email, company, role, industry, interest, message, source_path, user_agent)
      VALUES (${data.name}, ${data.email}, ${data.company}, ${data.role || null},
              ${data.industry}, ${data.interest}, ${data.message}, ${data.sourcePath}, ${data.userAgent})
    `;
  });

function ContactPage() {
  const [values, setValues] = useState<Record<string, string>>({
    name: "", email: "", company: "", role: "", industry: "", interest: "", message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  function update(k: string, v: string) {
    setValues((s) => ({ ...s, [k]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = leadSchema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof LeadForm;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setServerError(null);
    setPending(true);
    try {
      await submitLead({
        data: {
          ...parsed.data,
          sourcePath: typeof window !== "undefined" ? window.location.pathname.slice(0, 512) : null,
          userAgent: typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 512) : null,
        },
      });
      trackEvent("lead_submitted");
      setSubmitted(true);
    } catch (err) {
      console.error("[lead]", err);
      setServerError("We couldn't send your message. Please email partners@sybassociates.com.");
    } finally {
      setPending(false);
    }
  }

  const inputCls = "w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[var(--navy)] transition-colors";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="py-16 md:py-24">
        <div className="container-editorial grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="mb-6 text-xs uppercase tracking-[0.2em] text-[var(--navy)]">Contact</div>
            <h1 className="font-display text-4xl leading-[1.05] md:text-6xl">
              Book a 30-minute <em className="italic text-[var(--navy)]">diagnostic</em>.
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Tell us where you are and where you're trying to get. A partner in the relevant practice will reply within one business day.
            </p>
            <div className="mt-12 space-y-8 border-l border-[var(--navy)] pl-8">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Direct email</div>
                <a href="mailto:partners@sybassociates.com" className="mt-2 block font-display text-xl hover:text-[var(--navy)]">
                  partners@sybassociates.com
                </a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Offices</div>
                <div className="mt-2 font-display text-lg">India </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="border border-border bg-secondary/40 p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="font-display text-3xl md:text-4xl">Thank you, {values.name.split(" ")[0]}.</div>
                  <p className="mt-4 text-muted-foreground max-w-md mx-auto">
                    Your note is with the {values.interest.replace("-", " ")} practice. A partner will reply within one business day.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setValues({ name: "", email: "", company: "", role: "", industry: "", interest: "", message: "" }); }}
                    className="mt-8 text-sm underline decoration-[var(--navy)] underline-offset-4 hover:text-[var(--navy)]"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-5">
                  <div className="font-display text-2xl">Tell us about your situation</div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Full name" error={errors.name}>
                      <input className={inputCls} value={values.name} onChange={(e) => update("name", e.target.value)} maxLength={100} autoComplete="name" />
                    </Field>
                    <Field label="Work email" error={errors.email}>
                      <input type="email" className={inputCls} value={values.email} onChange={(e) => update("email", e.target.value)} maxLength={255} autoComplete="email" />
                    </Field>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Company" error={errors.company}>
                      <input className={inputCls} value={values.company} onChange={(e) => update("company", e.target.value)} maxLength={120} autoComplete="organization" />
                    </Field>
                    <Field label="Role (optional)" error={errors.role}>
                      <input className={inputCls} value={values.role} onChange={(e) => update("role", e.target.value)} maxLength={120} autoComplete="organization-title" />
                    </Field>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Industry" error={errors.industry}>
                      <select className={inputCls} value={values.industry} onChange={(e) => update("industry", e.target.value)}>
                        <option value="">Select…</option>
                        <option value="pharma">Pharmaceutical / Life Sciences</option>
                        <option value="manufacturing">Industrial Manufacturing</option>
                        <option value="consumer-health">Consumer Health</option>
                        <option value="other">Other</option>
                      </select>
                    </Field>
                    <Field label="Area of interest" error={errors.interest}>
                      <select className={inputCls} value={values.interest} onChange={(e) => update("interest", e.target.value)}>
                        <option value="">Select…</option>
                        <option value="supply-chain">Supply Chain Strategy</option>
                        <option value="digital">Digital Supply Chain</option>
                        <option value="analytics">Advanced Analytics</option>
                        <option value="operations">Operations Excellence</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </Field>
                  </div>

                  <Field label="What are you trying to solve?" error={errors.message}>
                    <textarea rows={5} className={inputCls} value={values.message} onChange={(e) => update("message", e.target.value)} maxLength={1500} />
                  </Field>

                  <button type="submit" disabled={pending} className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[var(--navy-deep)] px-8 py-3.5 text-sm text-white hover:bg-[var(--navy)] transition-colors disabled:opacity-60">
                    {pending ? "Sending…" : "Request diagnostic →"}
                  </button>
                  {serverError ? <div className="text-xs text-red-500">{serverError}</div> : null}
                  <p className="text-xs text-muted-foreground">
                    We treat every inquiry as confidential. No mailing lists, no third-party sharing.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-muted-foreground">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-red-600">{error}</span> : null}
    </label>
  );
}