import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PageCta({ title = "What Business Problem Can We Help You Solve?", copy = "Whether the challenge is growth, profitability, revenue or operations, every engagement starts with understanding the problem." }: { title?: string; copy?: string }) {
  return (
    <section className="bg-navy-deep py-20 text-primary-foreground md:py-28">
      <div className="container-editorial grid items-end gap-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="text-xs uppercase tracking-[0.2em] text-ice">Start a conversation</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-6xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-primary-foreground/70">{copy}</p>
        </div>
        <div className="md:col-span-4 md:text-right">
          <Button asChild variant="secondary" size="lg" className="rounded-none">
            <Link to="/contact">Start a Conversation <ArrowUpRight /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}