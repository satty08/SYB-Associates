export function Framework({ items, dark = false }: { items: readonly string[]; dark?: boolean }) {
  return (
    <ol className="grid gap-px border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className={dark ? "bg-navy-deep p-5 text-primary-foreground" : "bg-background p-5 text-foreground"}>
          <div className={dark ? "text-xs text-ice" : "text-xs text-navy"}>0{index + 1}</div>
          <div className="mt-2 font-display text-xl">{item}</div>
        </li>
      ))}
    </ol>
  );
}