import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — SYB Associates" },
      { name: "description", content: "Selected supply chain, digital, and analytics engagements across pharmaceutical and manufacturing clients — with the KPIs that held post-handover." },
      { property: "og:title", content: "Case Studies — SYB Associates" },
      { property: "og:description", content: "Supply chain and digital transformations delivered for pharma and manufacturing leaders." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/case-studies" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Case Studies — SYB Associates" },
      { name: "twitter:description", content: "Supply chain and digital transformations delivered for pharma and manufacturing leaders." },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

const studies = [
  {
    year: "2024",
    sector: "Pharmaceutical",
    client: "Top-10 Global Pharma",
    title: "Global S&OP redesign across 14 sites",
    challenge: "Fragmented planning across regions produced 45-day forecast cycles and $340M of excess inventory tied up in slow-moving SKUs.",
    approach: "Consolidated regional planning into a single integrated business planning cadence, deployed a unified demand-sensing model, and rewrote the S&OP operating rhythm end-to-end.",
    result: [
      ["21%", "inventory release"],
      ["9 mo", "to steady state"],
      ["+18 pts", "OTIF"],
    ],
  },
  {
    year: "2024",
    sector: "Industrial Manufacturing",
    client: "European Industrial OEM",
    title: "AI-driven demand sensing rollout",
    challenge: "Forecast MAPE of 34% caused chronic stock-outs on high-margin SKUs and repeated line changeovers at three flagship plants.",
    approach: "Layered a machine-learning demand-sensing model over the existing APS, integrated point-of-sale and channel-partner signals, and retrained planners on exception-based workflows.",
    result: [
      ["-22 pts", "MAPE reduction"],
      ["31%", "fewer changeovers"],
      ["4 wks", "planning cycle time"],
    ],
  },
  {
    year: "2023",
    sector: "Pharmaceutical",
    client: "Specialty CDMO",
    title: "End-to-end control tower and supplier collaboration",
    challenge: "Serialization deadlines and multi-tier supplier fragility exposed the CDMO to launch-delay penalties across four biologics contracts.",
    approach: "Designed and deployed a control tower with real-time shipment visibility, supplier collaboration portal, and automated deviation alerts wired into the QMS.",
    result: [
      ["100%", "on-time launches"],
      ["6.2×", "issue detection speed"],
      ["11%", "logistics cost cut"],
    ],
  },
  {
    year: "2023",
    sector: "Consumer Health",
    client: "Global Consumer Health Brand",
    title: "Network optimization across EMEA distribution",
    challenge: "Legacy 22-node distribution footprint carried $180M of landed cost with duplicate coverage in Central Europe and thin service in Southern markets.",
    approach: "Ran a full network optimization with service-level scenarios, negotiated a phased 3PL consolidation, and re-baselined the SKU rationalization program.",
    result: [
      ["8%", "landed cost freed"],
      ["-6 nodes", "footprint"],
      ["+3.1 pts", "service level"],
    ],
  },
];

function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border/60 py-20 md:py-28">
        <div className="container-editorial">
          <div className="mb-6 text-xs uppercase tracking-[0.2em] text-[var(--navy)]">Case Studies</div>
          <h1 className="font-display text-5xl leading-[1.02] md:text-7xl max-w-4xl">
            Work we can talk about — <em className="italic text-[var(--navy)]">with permission</em>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            A representative slice of recent engagements. Client identities are anonymized;
            full narratives, methodology, and reference calls are available under NDA.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-editorial space-y-16 md:space-y-24">
          {studies.map((s, idx) => (
            <article key={s.title} className="grid gap-10 md:grid-cols-12 border-t border-border pt-16">
              <div className="md:col-span-4">
                <div className="font-display text-6xl text-[var(--navy)]">0{idx + 1}</div>
                <div className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {s.year} · {s.sector}
                </div>
                <div className="mt-2 font-display text-xl">{s.client}</div>
              </div>
              <div className="md:col-span-8">
                <h2 className="font-display text-3xl md:text-4xl leading-tight">{s.title}</h2>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div>
                    <div className="text-xs uppercase tracking-[0.15em] text-[var(--navy)] font-medium">Challenge</div>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{s.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.15em] text-[var(--navy)] font-medium">Approach</div>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{s.approach}</p>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-6">
                  {s.result.map(([k, v]) => (
                    <div key={v}>
                      <div className="font-display text-3xl text-[var(--navy)]">{k}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-[var(--navy-deep)] text-white py-20 md:py-28">
        <div className="container-editorial flex flex-wrap items-end justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl md:text-5xl max-w-2xl leading-tight">
              Want the <em className="italic text-[var(--ice)]">full</em> methodology and reference calls?
            </h2>
            <p className="mt-4 max-w-xl text-white/70">Share a bit about your situation and we'll route you to the partner closest to it.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white px-6 py-3.5 text-sm text-[var(--navy-deep)] hover:bg-[var(--ice)] transition-colors">
            Request a briefing →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
