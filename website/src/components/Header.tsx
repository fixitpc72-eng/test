import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--card)]/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-5 sm:px-8">
        <div className="flex items-center gap-3">
          <span className="size-2 bg-[var(--primary)]" />
          <span className="font-display text-base font-extrabold tracking-[0.32em] text-[var(--foreground)]">
            ADMS
          </span>
          <span className="hidden h-4 w-px bg-[var(--border)] sm:block" />
          <span className="hidden font-mono text-[10px] font-medium tracking-[0.2em] text-[var(--muted-foreground)] sm:inline">
            CLEARVIEW
          </span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {["Trades", "Platform", "Performance", "Dashboard"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
