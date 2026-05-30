import Overline from "../ui/Overline";
import { FEATURES } from "@/data/features";

export default function FeaturesGrid() {
  return (
    <section id="platform" className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-24">
        <Overline code="SEC // 04" label="PLATFORM OFFERINGS" />
        <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-[0.04em] text-[var(--foreground)] sm:text-5xl">
          Deep-dive
          <br />
          <span className="text-[var(--muted-foreground)]">platform offerings</span>
        </h2>
        <p className="mt-5 max-w-2xl font-sans text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
          Fourteen tightly integrated modules. One real-time ledger from lead capture to payroll.
        </p>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FEATURES.map(({ id, code, title, description, icon: Icon }) => (
            <article
              key={id}
              data-testid={`feature-${id}`}
              className="group border border-[var(--border)] bg-[var(--card)] p-4 rounded-[2px] transition-colors hover:border-[var(--primary)]"
            >
              <div className="flex items-center justify-between">
                <Icon className="size-4 text-[var(--primary)]" strokeWidth={2.25} />
                <span className="font-mono text-[9px] font-bold tracking-[0.18em] text-[var(--hud-cyan)]">
                  {code}
                </span>
              </div>
              <h3 className="mt-4 font-display text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--foreground)]">
                {title}
              </h3>
              <p className="mt-2 font-sans text-[11px] leading-snug text-[var(--muted-foreground)]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
