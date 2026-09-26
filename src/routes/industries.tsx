import { createFileRoute } from "@tanstack/react-router";
import { Factory, HeartPulse, ShoppingBasket, Store, Cpu } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { PageCta } from "@/components/PageCta";
import { industryGroups } from "@/content/industries";

const icons = [Factory, HeartPulse, ShoppingBasket, Store, Cpu];
export const Route = createFileRoute("/industries")({
  head: () => ({ meta: [
    { title: "Industries — SYB Associates" }, { name: "description", content: "Industry-focused management consulting across industrials, healthcare, consumer, retail and technology." },
    { property: "og:title", content: "Industries — SYB Associates" }, { property: "og:description", content: "Structured problem solving grounded in the realities of each industry." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/industries" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/industries" }] }), component: IndustriesPage,
});
function IndustriesPage() { return <div className="min-h-screen bg-background text-foreground"><SiteHeader /><main><section className="border-b border-border/60 py-20 md:py-28"><div className="container-editorial"><p className="eyebrow">Industries</p><h1 className="mt-5 max-w-4xl font-display text-5xl leading-tight md:text-7xl">Industry Context <em className="text-navy">Matters.</em></h1><p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">We bring structured thinking to the distinct customers, economics, competition and operational realities that shape each industry.</p></div></section><section className="py-20 md:py-28"><div className="container-editorial space-y-20">{industryGroups.map((group, index) => { const Icon = icons[index]; return <section key={group.name} className="grid gap-8 border-t border-border pt-10 md:grid-cols-12"><div className="md:col-span-4"><Icon className="h-7 w-7 text-navy" /><h2 className="mt-5 font-display text-3xl">{group.name}</h2><p className="mt-4 leading-relaxed text-muted-foreground">{group.description}</p></div><div className="grid content-start gap-px sm:grid-cols-2 md:col-span-7 md:col-start-6">{group.industries.map((industry, industryIndex) => <div key={industry.slug} className={`flex min-h-36 items-end border border-border bg-background p-6 ${group.industries.length % 2 === 1 && industryIndex === group.industries.length - 1 ? "sm:col-span-2" : ""}`}><span className="font-display text-2xl">{industry.name}</span></div>)}</div></section>})}</div></section><PageCta /></main><SiteFooter /></div> }