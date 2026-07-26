import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
export const Route = createFileRoute("/consultingMethodology")({
  head: () => ({
    meta: [
      { title: "Our Consulting Methodology — OITF | Meridian Advisory" },
      { name: "description", content: "The Operational Intelligence Transformation Framework (OITF): a seven-phase methodology for operational excellence in pharma and manufacturing." },
      { property: "og:title", content: "Our Consulting Methodology — OITF" },
      { property: "og:description", content: "A structured, data-driven approach: Discovery, Diagnostic, Assessment, Roadmap, Implementation, Measurement, Continuous Improvement." },
    ],
    links: [{ rel: "canonical", href: "/methodology" }],
  }),
  component: Methodology,
});
const flow = ["Discovery", "Diagnostic", "Assessment", "Roadmap", "Implementation", "Measurement", "Continuous Improvement"];
const phases = [
  {
    n: "Phase 1",
    title: "Discovery",
    subtitle: "Understanding Your Business",
    body: "Every engagement begins with understanding your organization's strategic objectives, operational priorities, and current challenges. Through executive discussions and preliminary research, we identify the areas with the greatest potential for improvement.",
    listTitle: "Activities",
    list: ["Executive stakeholder discussions", "Business objective alignment", "Operational challenge identification", "Preliminary process review"],
    deliverable: "Discovery Summary",
  },
  {
    n: "Phase 2",
    title: "Operational Diagnostic",
    subtitle: "Assessing Current Operations",
    body: "We perform a comprehensive diagnostic of your operational ecosystem to understand how planning, procurement, production, inventory, logistics, and reporting functions currently operate.",
    listTitle: "Activities",
    list: ["Operational Diagnostic Questionnaire", "Process walkthroughs", "Department interviews", "Data and KPI review", "Workflow assessment"],
    deliverable: "Current State Assessment Report",
  },
  {
    n: "Phase 3",
    title: "Operational Maturity Assessment",
    subtitle: "Measuring Operational Capability",
    body: "Using our Operational Maturity Framework, we evaluate key operational functions across standardized dimensions to benchmark organizational capability and identify performance gaps.",
    listTitle: "Assessment Areas",
    list: ["Planning & Scheduling", "Procurement", "Inventory Management", "Manufacturing Operations", "Supply Chain", "Reporting & Analytics", "Automation & Digital Readiness"],
    deliverable: "Operational Maturity Scorecard (0–100)",
  },
  {
    n: "Phase 4",
    title: "Root Cause Analysis",
    subtitle: "Identifying the Underlying Drivers",
    body: "Rather than addressing symptoms, we identify the root causes behind operational inefficiencies using structured analytical techniques.",
    listTitle: "Activities",
    list: ["Bottleneck analysis", "Process mapping", "KPI gap analysis", "Waste identification", "Root cause workshops"],
    deliverable: "Root Cause Analysis Report",
  },
  {
    n: "Phase 5",
    title: "Transformation Roadmap",
    subtitle: "Building a Practical Improvement Plan",
    body: "Based on diagnostic findings, we develop a phased roadmap that prioritizes high-impact initiatives aligned with business objectives and implementation feasibility.",
    listTitle: "Roadmap Includes",
    list: ["Quick wins", "Medium-term improvements", "Long-term transformation initiatives", "Investment priorities", "Expected business impact"],
    deliverable: "12-Month Operational Transformation Roadmap",
  },
  {
    n: "Phase 6",
    title: "Implementation",
    subtitle: "Executing Sustainable Improvements",
    body: "We support the implementation of recommended initiatives by combining operational expertise with modern digital technologies and governance practices.",
    listTitle: "Implementation Areas",
    list: ["Process redesign", "KPI governance", "Dashboard development", "Reporting automation", "Workflow automation", "AI-enabled operational intelligence", "Change management"],
    deliverable: "Operational Improvement Solution",
  },
  {
    n: "Phase 7",
    title: "Continuous Improvement",
    subtitle: "Driving Long-Term Performance",
    body: "Operational excellence is an ongoing journey. We continuously monitor performance, measure outcomes, and identify new opportunities to sustain operational improvements.",
    listTitle: "Activities",
    list: ["KPI performance reviews", "Operational health assessments", "Quarterly maturity reassessment", "Continuous improvement planning", "Executive performance reviews"],
    deliverable: "Operational Health & Performance Report",
  },
];
const outcomes = [
  "Improved operational visibility",
  "Standardized KPI governance",
  "Streamlined business processes",
  "Enhanced supply chain performance",
  "Reduced operational inefficiencies",
  "Better inventory utilization",
  "Faster, data-driven decision-making",
  "Increased automation across critical workflows",
  "Sustainable operational excellence",
];
const downloads = [
  { label: "Methodology Overview", file: "/downloads/OITF-Methodology-Overview.txt" },
  { label: "Diagnostic Questionnaire", file: "/downloads/OITF-Diagnostic-Questionnaire.txt" },
  { label: "Maturity Scorecard", file: "/downloads/OITF-Maturity-Scorecard.txt" },
];
function Methodology() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="border-b border-border/60">
        <div className="container-editorial py-20 md:py-28">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--navy)]">Our Consulting Methodology</div>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] md:text-7xl">
            Operational Intelligence <br /> Transformation Framework<sup className="text-2xl md:text-3xl">™</sup>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            A Structured Approach to Operational Excellence. We help manufacturing and pharmaceutical organizations transform their operations through a structured, data-driven methodology combining operational diagnostics, process excellence, analytics, and technology.
          </p>
          {/* Flow diagram */}
          <div className="mt-12 flex flex-wrap items-center gap-x-2 gap-y-3">
            {flow.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="border border-[var(--navy)]/30 bg-secondary/60 px-3 py-1.5 text-xs uppercase tracking-[0.15em] text-[var(--navy-deep)]">
                  {step}
                </span>
                {i < flow.length - 1 && <span className="text-[var(--navy)]">→</span>}
              </div>
            ))}
          </div>
          {/* Downloads */}
          <div className="mt-12">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Downloadable Resources</div>
            <div className="flex flex-wrap gap-3">
              {downloads.map((d) => (
                <a
                  key={d.file}
                  href={d.file}
                  download
                  className="inline-flex items-center gap-2 border border-[var(--navy)]/40 bg-background px-5 py-3 text-sm hover:bg-[var(--navy-deep)] hover:text-white hover:border-[var(--navy-deep)] transition-colors"
                >
                  ↓ {d.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Phases */}
      <section className="py-20 md:py-28">
        <div className="container-editorial space-y-20">
          {phases.map((p) => (
            <div key={p.n} className="grid gap-10 md:grid-cols-12 border-t border-border/60 pt-12">
              <div className="md:col-span-4">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--navy)]">{p.n}</div>
                <h2 className="mt-3 font-display text-3xl md:text-4xl leading-tight">{p.title}</h2>
                <div className="mt-2 italic text-muted-foreground">{p.subtitle}</div>
              </div>
              <div className="md:col-span-8 space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">{p.body}</p>
                <div>
                  <div className="text-xs uppercase tracking-[0.15em] text-[var(--navy)] mb-3">{p.listTitle}</div>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {p.list.map((item) => (
                      <li key={item} className="flex gap-2 text-sm">
                        <span className="text-[var(--navy)]">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-l-2 border-[var(--navy)] pl-4">
                  <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Deliverable</div>
                  <div className="mt-1 font-display text-xl">{p.deliverable}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Outcomes */}
      <section className="border-t border-border/60 bg-[var(--navy-deep)] text-white py-20 md:py-28">
        <div className="container-editorial">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--ice)]">Expected Outcomes</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight max-w-2xl">
            At the end of an engagement, our clients can expect:
          </h2>
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {outcomes.map((o) => (
              <li key={o} className="border-t border-white/20 pt-4 text-lg leading-snug">{o}</li>
            ))}
          </ul>
          <div className="mt-16">
            <a href="/contact" className="inline-flex items-center gap-2 bg-white px-6 py-3.5 text-sm text-[var(--navy-deep)] hover:bg-[var(--ice)] transition-colors">
              Start your OITF engagement →
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}