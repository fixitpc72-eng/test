import Overline from "../ui/Overline";
import { TRADES } from "@/data/trades";

export default function TradesGrid() {
  return (
    <section id="trades" className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-24">
        <Overline code="SEC // 02" label="TRADES FOUNDATION" />
        <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-[0.04em] text-[var(--foreground)] sm:text-5xl">
          Tailored solutions
          <br />
          <span className="text-[var(--muted-foreground)]">for every core trade</span>
        </h2>
        <p className="mt-5 max-w-2xl font-sans text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
          One platform, deep vertical playbooks. Every trade ships with its own compliance forms,
          telemetry, and certifications baked in.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TRADES.map(({ id, code, title, description, icon: Icon }) => (
            <article
              key={id}
              data-testid={`trade-${id}`}
              className="group relative border border-[var(--border)] bg-[var(--card)] p-5 rounded-[2px] transition-colors hover:border-[var(--hud-cyan)]"
            >
              <span
                className="absolute left-0 top-0 h-full w-[2px] bg-[var(--hud-cyan)] opacity-60 group-hover:opacity-100"
                aria-hidden
              />
              <div className="flex items-start gap-4">
                <div className="grid size-11 place-items-center border border-[var(--border)] bg-[var(--background)] rounded-[2px]">
                  <Icon className="size-5 text-[var(--primary)]" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-[var(--hud-cyan)]">
                      {code}
                    </span>
                    <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-[var(--foreground)]">
                      {title}
                    </h3>
                  </div>
                  <p className="mt-3 font-sans text-[13px] leading-relaxed text-[var(--muted-foreground)]">
                    {description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
