import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-supply-chain.jpg";
import networkImg from "@/assets/digital-network.jpg";
import logo from "@/assets/Mini Light BG.png";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SYB Associates — Supply Chain & Digital Consulting for Pharma and Manufacturing" },
      {logo: {
        "@type": "ImageObject",
        logo: logo
      }},
      { name: "description", content: "Management consulting specialized in supply chain, digital supply chain, and advanced analytics for pharmaceutical and manufacturing leaders." },
      { name: "keywords", content: "supply chain consulting, digital supply chain, supply chain analytics, pharma consulting, manufacturing consulting, S&OP, control tower" },
      { property: "og:title", content: "SYB Associates — Supply Chain & Digital Consulting" },
      { property: "og:description", content: "Supply chain, digital, and analytics consulting for pharma and manufacturing." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SYB Associates — Supply Chain & Digital Consulting" },
      { name: "twitter:description", content: "Supply chain, digital, and analytics consulting for pharma and manufacturing." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "SYB Associates",
          description: "Management consulting specialized in supply chain, digital supply chain, and advanced analytics for pharmaceutical and manufacturing companies.",
          areaServed: ["Global"],
          knowsAbout: ["Supply Chain Management", "Digital Supply Chain", "Advanced Analytics", "Pharmaceutical Manufacturing", "Industrial Manufacturing"],
        }),
      },
    ],
  }),
  component: Index,
});

const capabilities = [
  { n: "01", title: "Supply Chain Strategy", body: "Network design, S&OP redesign, cost-to-serve, and resilience frameworks that hold up to real-world volatility." },
  { n: "02", title: "Digital Supply Chain", body: "Control towers, integrated planning platforms, and digital twins — implemented with the operating model to run them." },
  { n: "03", title: "Advanced Analytics", body: "Demand sensing, inventory optimization, and AI-driven decision support tuned to your data reality." },
  { n: "04", title: "Operations Excellence", body: "Lean manufacturing, throughput optimization, and continuous improvement anchored in measurable P&L impact." },
];

const industries = [
  {
    tag: "Pharmaceutical & Life Sciences",
    body: "Cold-chain integrity, serialization, contract manufacturing orchestration, and launch readiness across regulated markets.",
    // stats: [["18%", "avg. inventory reduction"], ["99.6%", "OTIF post-transformation"]],
  },
  {
    tag: "Industrial Manufacturing",
    body: "Multi-plant footprint strategy, supplier risk, and connected factory programs that translate MES/ERP data into decisions.",
    // stats: [["22%", "planning cycle time cut"], ["3.4×", "forecast accuracy uplift"]],
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section id="top" className="relative overflow-hidden">
        <div className="container-editorial grid gap-16 py-20 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            {/* <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-10 bg-[var(--navy)]" />
              Management Consulting · Est. 2011
            </div> */}
            <h1 className="font-display text-5xl leading-[1.02] md:text-7xl lg:text-8xl">
              Supply chains that <em className="italic text-[var(--navy)]">think</em>,
              <br className="hidden md:block" /> factories that <em className="italic text-[var(--navy)]">respond</em>.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We advise pharmaceutical and manufacturing leaders on the intersection of supply chain, digital, and analytics — where strategy meets the shop floor.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/contact" className="inline-flex items-center gap-2 bg-[var(--navy-deep)] px-6 py-3.5 text-sm text-white hover:bg-[var(--navy)] transition-colors">
                Book a diagnostic →
              </a>
              <a href="#capabilities" className="inline-flex items-center gap-2 px-6 py-3.5 text-sm underline decoration-[var(--navy)] decoration-2 underline-offset-8 hover:text-[var(--navy)]">
                Explore capabilities
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={heroImg} alt="Pharmaceutical manufacturing line" width={1600} height={1104} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/60 via-[var(--navy-deep)]/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs uppercase tracking-[0.2em] opacity-80">Field Note</div>
                <div className="mt-2 font-display text-xl leading-tight">
                  "The best control tower is the one your planners actually trust."
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rule-accent" />
      </section>

      <section className="border-b border-border/60 bg-secondary/60">
        {/* <div className="container-editorial grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {[["120+", "Engagements delivered"], ["14", "Countries served"], ["$1.8B", "Client value unlocked"], ["92%", "Return-client rate"]].map(([k, v]) => (
            <div key={v}>
              <div className="font-display text-4xl md:text-5xl">{k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">{v}</div>
            </div>
          ))}
        </div> */}
      </section>
      <section id="vision-mission" className="border-b border-border/60 py-24 md:py-32">
        <div className="container-editorial grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="mb-6 text-xs uppercase tracking-[0.2em] text-[var(--navy)]">Who We Are</div>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              A firm built around <em className="italic">outcomes</em>, not decks.
            </h2>
          </div>
          <div className="md:col-span-4 border-t-2 border-[var(--navy)] pt-6">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Our Vision</div>
            <p className="mt-4 font-display text-2xl leading-snug">
              A world where every pharmaceutical and manufacturing supply chain is intelligent, resilient, and self-improving.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We see a future where operational data drives every decision, and where digital intelligence turns complex global networks into a source of competitive advantage.
            </p>
          </div>
          <div className="md:col-span-4 border-t-2 border-[var(--navy)] pt-6">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Our Mission</div>
            <p className="mt-4 font-display text-2xl leading-snug">
              To help operations leaders translate strategy into measurable, sustained performance.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We combine deep supply chain expertise, advanced analytics, and pragmatic digital delivery — and we stay embedded until the KPIs move and hold.
            </p>
          </div>
        </div>
      </section>

      <section id="capabilities" className="py-24 md:py-32">
        <div className="container-editorial">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="mb-6 text-xs uppercase tracking-[0.2em] text-[var(--navy)]">Capabilities</div>
              <h2 className="font-display text-4xl leading-tight md:text-5xl">
                Four practices. <br />One <em className="italic">operating</em> point of view.
              </h2>
              <p className="mt-6 text-muted-foreground">
                We don't hand off decks. We embed with your teams until the KPI moves and stays moved.
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="grid gap-px bg-border sm:grid-cols-2">
                {capabilities.map((c) => (
                  <div key={c.n} className="group bg-background p-8 transition-colors hover:bg-secondary/60">
                    <div className="flex items-baseline justify-between">
                      <span className="font-display text-2xl text-[var(--navy)]">{c.n}</span>
                      <span className="h-px w-12 bg-border transition-all group-hover:w-20 group-hover:bg-[var(--navy)]" />
                    </div>
                    <h3 className="mt-6 font-display text-2xl">{c.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="border-y border-border/60 bg-[var(--navy-deep)] text-white">
        <div className="container-editorial py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="mb-6 text-xs uppercase tracking-[0.2em] text-[var(--ice)]">Industries</div>
              <h2 className="font-display text-4xl leading-tight md:text-5xl">
                Deep in the <em className="italic text-[var(--ice)]">two</em> sectors where operations are the strategy.
              </h2>
              <div className="mt-10 aspect-[4/3] overflow-hidden">
                <img src={networkImg} alt="Global logistics network" width={1200} height={912} loading="lazy" className="h-full w-full object-cover opacity-85" />
              </div>
            </div>
            <div className="md:col-span-7 space-y-12">
              {industries.map((i) => (
                <div key={i.tag} className="border-t border-white/20 pt-8">
                  <div className="text-xs uppercase tracking-[0.2em] text-[var(--ice)]">{i.tag}</div>
                  <p className="mt-4 max-w-xl text-lg leading-relaxed">{i.body}</p>
                  <div className="mt-6 grid grid-cols-2 gap-6">
                    {/* {i.stats.map(([k, v]) => (
                      <div key={v}>
                        <div className="font-display text-3xl text-[var(--ice)]">{k}</div>
                        <div className="mt-1 text-xs uppercase tracking-[0.15em] opacity-70">{v}</div>
                      </div>
                    ))} */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/40 py-24 md:py-32">
        <div className="container-editorial grid gap-16 md:grid-cols-2">
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            How we <em className="italic text-[var(--navy)]">work</em>.
          </h2>
          <div className="space-y-10">
            {[
              ["Diagnose", "Two weeks. Data-driven baseline, not workshops. You get a numbered list of what's broken and what it costs."],
              ["Design", "Co-created target operating model — process, data, and org — with signed-off business cases before build."],
              ["Deliver", "We stay through go-live and the first two planning cycles. If the KPI doesn't move, we don't move on."],
            ].map(([k, v], idx) => (
              <div key={k} className="flex gap-6">
                <div className="font-display text-3xl text-[var(--navy)] w-12 shrink-0">0{idx + 1}</div>
                <div>
                  <h3 className="font-display text-2xl">{k}</h3>
                  <p className="mt-2 text-muted-foreground">{v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-editorial grid gap-12 md:grid-cols-12 items-center">
          <div className="md:col-span-7">
            <div className="mb-6 text-xs uppercase tracking-[0.2em] text-[var(--navy)]">Selected Work</div>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Programs that shipped, <br /> numbers that <em className="italic">held</em>.
            </h2>
            <p className="mt-6 max-w-lg text-muted-foreground">
              Four representative engagements across pharma, industrial, and consumer health — with the metrics that stayed post-handover.
            </p>
          </div>
          {/* <div className="md:col-span-5 flex md:justify-end gap-4">
            <a href="/case-studies" className="inline-flex items-center gap-2 bg-[var(--navy-deep)] px-6 py-3.5 text-sm text-white hover:bg-[var(--navy)] transition-colors">
              Read case studies →
            </a>
          </div> */}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
