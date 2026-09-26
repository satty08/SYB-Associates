import heroImg from "@/assets/hero-supply-chain.jpg";
import logo from "@/assets/Mini Light BG.png";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { PageCta } from "@/components/PageCta";
import { Button } from "@/components/ui/button";
import { industryGroups } from "@/content/industries";
import { services, thinkingStages, values } from "@/content/consulting";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SYB Associates — Management Consulting" },
      {logo: {
        "@type": "ImageObject",
        logo: logo
      }},
      { name: "description", content: "SYB Associates helps businesses solve growth, profitability, commercial strategy and operational challenges through structured problem solving and analytics." },
      { name: "keywords", content: "Management consulting, Growth, Optimization, GMT, Supply chain, Analytics, Digital Transformation, Digital Supply Chain, Profitability, Revenue Management" },
      { property: "og:title", content: "SYB Associates — Management Consulting" },
      { property: "og:description", content: "SSolving business problems and creating lasting value through structured thinking, analytics and practical execution." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SYB Associates — Management Consulting" },
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
          description: "Management consulting across growth, profitability, commercial strategy and operations.",
          areaServed: ["Global"],
          knowsAbout: ["Supply Chain Consulting", "Profitability", "Go-to-Market", "Revenue Management", "Supply Chain Management", "Digital Supply Chain", "Advanced Analytics"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-border/60">
          <img src={heroImg} alt="Modern business operations" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-navy-deep/85" />
          <div className="container-editorial relative flex min-h-[calc(100vh-5rem)] items-end py-16 text-primary-foreground md:min-h-[680px] md:py-24">
            <div className="max-w-5xl">
              <div className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-ice"><span className="h-px w-10 bg-ice" />Management Consulting</div>
              <h1 className="max-w-5xl font-display text-5xl leading-[1.02] sm:text-6xl md:text-8xl">Solving Business Problems.<br /><em className="text-ice">Creating Lasting Value.</em></h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">SYB Associates is a management consulting firm helping businesses address challenges across growth, profitability, commercial strategy and operations.</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="secondary" className="rounded-none"><Link to="/consulting-services">Explore Our Services <ArrowRight /></Link></Button>
                <Button asChild size="lg" variant="outline" className="rounded-none border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-navy-deep"><Link to="/contact">Talk to Us <ArrowUpRight /></Link></Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-editorial">
            <div className="grid gap-10 md:grid-cols-12"><div className="md:col-span-5"><p className="eyebrow">What We Do</p><h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">From Business Challenge to <em className="text-navy">Measurable Impact</em></h2></div><p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">We work with businesses to understand their most important challenges, identify the underlying drivers and develop practical solutions that translate strategy into action.</p></div>
            <div className="mt-14 grid gap-px bg-border md:grid-cols-2">
              {services.map((service, index) => <Link key={service.id} to="/consulting-services" hash={service.id} className="group bg-background p-7 transition-colors hover:bg-secondary md:p-10"><div className="flex items-start justify-between"><span className="font-display text-3xl text-navy">0{index + 1}</span><ArrowUpRight className="text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div><h3 className="mt-8 font-display text-3xl">{service.title}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{service.short}</p></Link>)}
            </div>
          </div>
        </section>

        <section className="border-y border-border/60 bg-secondary py-20 md:py-28">
          <div className="container-editorial"><p className="eyebrow">How We Think</p><h2 className="mt-4 font-display text-4xl md:text-6xl">Structured Thinking. <em className="text-navy">Practical Solutions.</em></h2><div className="mt-14 grid gap-8 md:grid-cols-5">{thinkingStages.map(([title, body], index) => <div key={title} className="border-t-2 border-navy pt-5"><span className="text-xs text-muted-foreground">0{index + 1}</span><h3 className="mt-4 font-display text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p></div>)}</div></div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-editorial grid gap-12 md:grid-cols-12"><div className="md:col-span-4"><p className="eyebrow">Industries</p><h2 className="mt-4 font-display text-4xl md:text-5xl">Industry Context <em className="text-navy">Matters</em></h2><p className="mt-5 leading-relaxed text-muted-foreground">Every industry operates with different customers, economics, competitive dynamics and operational realities. We combine structured problem solving with industry context to address the challenges that matter most.</p><Button asChild variant="link" className="mt-5 h-auto p-0"><Link to="/industries">Explore Industries <ArrowRight /></Link></Button></div><div className="grid content-start gap-px sm:grid-cols-2 md:col-span-8">{industryGroups.map((group, index) => <div key={group.name} className={`border border-border bg-background p-6 ${industryGroups.length % 2 === 1 && index === industryGroups.length - 1 ? "sm:col-span-2" : ""}`}><h3 className="font-display text-2xl">{group.name}</h3><p className="mt-3 text-sm text-muted-foreground">{group.industries.map((item) => item.name).join(" · ")}</p></div>)}</div></div>
        </section>

        <section className="border-y border-border/60 bg-navy-deep py-20 text-primary-foreground md:py-28">
          <div className="container-editorial"><div className="grid gap-10 md:grid-cols-2"><div><p className="text-xs uppercase tracking-[0.2em] text-ice">Our Vision</p><p className="mt-4 max-w-xl font-display text-3xl leading-snug md:text-4xl">To help businesses add value to customers' lives, ensuring everyone's continued growth.</p></div><div><p className="text-xs uppercase tracking-[0.2em] text-ice">Our Mission</p><p className="mt-4 font-display text-3xl leading-snug md:text-4xl">To solve every business problem.</p></div></div><div className="mt-16 grid gap-px bg-primary-foreground/20 md:grid-cols-4">{values.map(([title, line, body]) => <div key={title} className="bg-navy-deep p-6"><h3 className="font-display text-2xl">{title}</h3><p className="mt-3 text-sm text-ice">{line}</p><p className="mt-4 text-sm leading-relaxed text-primary-foreground/65">{body}</p></div>)}</div></div>
        </section>
        <PageCta />
      </main>
      <SiteFooter />
    </div>
  );
}
