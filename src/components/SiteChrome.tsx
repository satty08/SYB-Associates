import { Link } from "@tanstack/react-router";
import { NewsletterOptIn } from "@/components/NewsletterOptin";
import logo from "@/assets/Light BG Main Trans.png"
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/consulting-services", "Consulting Services"],
  ["/industries", "Industries"],
  ["/insights", "Insights"],
  ["/contact", "Contact"],
] as const;


export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="container-editorial flex min-h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3" aria-label="SYB Associates home">
          {/* <span className="grid h-9 w-9 place-items-center bg-navy-deep font-display text-sm text-primary-foreground">SYB</span>
          <span className="font-display text-xl">SYB Associates</span> */}
          <img
            src={logo}
            alt="SYB Associates - Growing Together"
            className="h-20 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-6 text-sm lg:flex" aria-label="Primary navigation">
          {nav.map(([to, label]) => (
            <Link key={to} to={to} activeOptions={{ exact: to === "/" }} activeProps={{ className: "text-navy" }} className="transition-colors hover:text-navy">{label}</Link>
          ))}
        </nav>
        <Button asChild className="hidden rounded-none lg:inline-flex">
          <Link to="/contact">Talk to Us <ArrowUpRight /></Link>
        </Button>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open ? (
        <nav className="border-t border-border bg-background px-6 py-6 lg:hidden" aria-label="Mobile navigation">
          <div className="container-editorial grid gap-1 px-0">
            {nav.map(([to, label]) => (
              <Link key={to} to={to} onClick={() => setOpen(false)} className="border-b border-border/60 py-3 font-display text-xl">{label}</Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="container-editorial grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            {/* <span className="grid h-9 w-9 place-items-center bg-navy-deep font-display text-sm text-primary-foreground">SYB</span>
            <span className="font-display text-xl">SYB Associates </span>*/}
            <img
              src={logo}
              alt="SYB Associates - Growing Together"
              className="h-30 w-auto"
            />
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">Management consulting for complex questions across growth, profitability, commercial strategy and operations.</p>
          <div className="mt-6 text-xs uppercase tracking-[0.15em] text-muted-foreground">Structured thinking · Practical execution</div>
        </div>
        <div className="md:col-span-3">
          <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Explore</div>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:grid-cols-1">
            {nav.slice(1).map(([to, label]) => <li key={to}><Link to={to} className="hover:text-navy">{label}</Link></li>)}
          </ul>
        </div>
        <div className="md:col-span-4"><NewsletterOptIn variant="light" /></div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-editorial flex flex-wrap items-center justify-between gap-4 py-6 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} SYB Associates. Independent management consulting.</div>
          <div>Supply Chain · Profitability · Go-to-Market · Revenue</div>
        </div>
      </div>
    </footer>
  );
}