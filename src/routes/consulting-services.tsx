import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { PageCta } from "../components/PageCta";
import { services } from "../content/consulting";

export const Route = createFileRoute("/consulting-services")({
  head: () => ({ meta: [
    { title: "Consulting Services — SYB Associates" },
    { name: "description", content: "Consulting across supply chain, profitability, go-to-market and revenue management." },
    { property: "og:title", content: "Consulting Services — SYB Associates" },
    { property: "og:description", content: "Strategy grounded in analysis. Solutions designed for execution." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/consulting-services" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/consulting-services" }] }),
  component: ConsultingServicesPage,
});

function ConsultingServicesPage() {
  return <div className="min-h-screen bg-background text-foreground"><SiteHeader /><main>
    <section className="border-b border-border/60 bg-navy-deep py-20 text-primary-foreground md:py-28"><div className="container-editorial"><p className="text-xs uppercase tracking-[0.2em] text-ice">Consulting Services</p><h1 className="mt-5 max-w-5xl font-display text-5xl leading-tight md:text-7xl">Strategy grounded in analysis.<br /><em className="text-ice">Solutions designed for execution.</em></h1><p className="mt-7 max-w-3xl text-lg leading-relaxed text-primary-foreground/70">We help businesses address critical questions across their commercial and operational agenda—from where to grow and how to improve revenue to where profitability is being lost and how operations can perform better.</p></div></section>
    {services.map((service, index) => <section key={service.id} id={service.id} className={index % 2 ? "border-b border-border/60 bg-secondary py-20 md:py-28" : "border-b border-border/60 py-20 md:py-28"}><div className="container-editorial"><div className="grid gap-10 md:grid-cols-12"><div className="md:col-span-4"><p className="eyebrow">0{index + 1} · {service.title}</p><h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">{service.headline}</h2></div><div className="md:col-span-7 md:col-start-6"><p className="text-lg leading-relaxed text-muted-foreground">{service.short}</p><div className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">{service.capabilities.map((capability) => <div key={capability} className="border-t border-border py-3 text-sm">{capability}</div>)}</div></div></div></div></section>)}
    <PageCta />
  </main><SiteFooter /></div>;
}