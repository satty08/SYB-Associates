import { useState } from "react";
import { z } from "zod";
import { supabase } from "../integrations/superbase/client";
import { trackEvent } from "@/lib/analytics";

const emailSchema = z.string().trim().email("Enter a valid email").max(255);

export function NewsletterOptIn({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid email");
      return;
    }
    setError(null);
    setState("loading");
    const { error: dbError } = await supabase
      .from("newsletter_subscribers")
      .insert({
        email: parsed.data,
        source_path: typeof window !== "undefined" ? window.location.pathname.slice(0, 512) : null,
        user_agent: typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 512) : null,
      });
    if (dbError) {
      // Unique-violation → already subscribed; treat as success.
      if (dbError.code === "23505") {
        setState("done");
        return;
      }
      console.error("[newsletter]", dbError);
      setError("Something went wrong. Please try again.");
      setState("error");
      return;
    }
    trackEvent("newsletter_signup");
    setState("done");
  }

  const dark = variant === "dark";
  const inputCls = dark
    ? "w-full bg-transparent border border-white/25 text-white placeholder:text-white/50 px-4 py-3 text-sm outline-none focus:border-[var(--ice)] transition-colors"
    : "w-full bg-background border border-border px-4 py-3 text-sm outline-none focus:border-[var(--navy)] transition-colors";
  const btnCls = dark
    ? "bg-white text-[var(--navy-deep)] px-5 py-3 text-sm hover:bg-[var(--ice)] transition-colors whitespace-nowrap"
    : "bg-[var(--navy-deep)] text-white px-5 py-3 text-sm hover:bg-[var(--navy)] transition-colors whitespace-nowrap";
  const labelCls = dark ? "text-white/70" : "text-muted-foreground";

  if (state === "done") {
    return (
      <div className={`text-sm ${dark ? "text-white" : "text-foreground"}`}>
        <span className="font-display text-lg">Thanks — you're on the list.</span>
        <div className={`mt-1 text-xs ${labelCls}`}>The next SCM Deep Dive briefing is out on the first Tuesday of the month.</div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-3">
      <div className={`text-xs uppercase tracking-[0.2em] ${labelCls}`}>Monthly briefing</div>
      <div className={`font-display text-2xl ${dark ? "text-white" : "text-foreground"}`}>
        The SCM Deep Dive, in your inbox.
      </div>
      <p className={`text-sm ${labelCls}`}>
        One short letter each month: what we're seeing in pharma and manufacturing supply chains, what we're reading, and what we'd do about it.
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          maxLength={255}
          autoComplete="email"
          aria-label="Email address"
          className={inputCls}
        />
        <button type="submit" disabled={state === "loading"} className={btnCls}>
          {state === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      {error ? <div className="text-xs text-red-500">{error}</div> : null}
      <div className={`text-xs ${labelCls}`}>No spam. Unsubscribe with one click.</div>
    </form>
  );
}