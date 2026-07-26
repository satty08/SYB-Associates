import { Link } from "@tanstack/react-router";
import { NewsletterOptIn } from "@/components/NewsletterOptin";
import logo from "@/assets/Light BG Main Trans.png"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-editorial flex items-center justify-between py-5">
        <Link to="/" className="flex items-center gap-2">
          {/* <span className="h-2 w-2 rounded-full bg-[var(--navy)]" />
          <span className="font-display text-xl tracking-tight">SYB Associates</span> */}
          <img
            src={logo}
            alt="SYB Associates - Growing Together"
            className="h-20 w-auto"
          />
        </Link>
        <nav className="hidden gap-8 text-sm md:flex">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-[var(--navy)]" }} className="hover:text-[var(--navy)] transition-colors">Home</Link>
          <Link to="/consultingMethodology" activeProps={{ className: "text-[var(--navy)]" }} className="hover:text-[var(--navy)] transition-colors">Methodology</Link>
          {/* <Link to="/case-studies" activeProps={{ className: "text-[var(--navy)]" }} className="hover:text-[var(--navy)] transition-colors">Case Studies</Link> */}
          <Link to="/contact" activeProps={{ className: "text-[var(--navy)]" }} className="hover:text-[var(--navy)] transition-colors">Contact</Link>
        </nav>
        <Link to="/contact" className="hidden md:inline-flex items-center gap-2 bg-[var(--navy-deep)] px-4 py-2 text-sm text-white hover:bg-[var(--navy)] transition-colors">
          Start a conversation
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="container-editorial grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2">
            {/* <span className="h-2 w-2 rounded-full bg-[var(--navy)]" />
            <span className="font-display text-xl">SYB Associates</span> */}
            <img
              src={logo}
              alt="SYB Associates - Growing Together"
              className="h-30 w-auto"
            />
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Management consulting for pharmaceutical and manufacturing leaders — supply chain, digital, analytics.
          </p>
          <div className="mt-6 text-xs uppercase tracking-[0.15em] text-muted-foreground">India </div> {/* Zürich · Boston · Singapore</div> */}
        </div>
        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[var(--navy)]">Home</Link></li>
            <li><Link to="/consultingMethodology" className="hover:text-[var(--navy)]">Methodology</Link></li>
            {/* <li><Link to="/case-studies" className="hover:text-[var(--navy)]">Case Studies</Link></li> */}
            <li><Link to="/contact" className="hover:text-[var(--navy)]">Contact</Link></li>
          </ul>
        </div>
        <div className="md:col-span-5">
          <NewsletterOptIn variant="light" />
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-editorial flex flex-wrap items-center justify-between gap-4 py-6 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} SYB Associates. Independent management consulting.</div>
          <div>Supply Chain · Digital · Analytics</div>
        </div>
      </div>
    </footer>
  );
}