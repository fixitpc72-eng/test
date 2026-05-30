import { TrendingUp } from "lucide-react";
import Overline from "../ui/Overline";
import { STATS } from "@/data/stats";

export default function StatsSection() {
  return (
    <section id="performance" className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-24">
        <Overline code="SEC // 05" label="PERFORMANCE GAINS" />
        <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-[0.04em] text-[var(--foreground)] sm:text-5xl">
          Measurable
          <br />
          <span className="text-[var(--muted-foreground)]">performance gains</span>
        </h2>
        <p className="mt-5 max-w-2xl font-sans text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
          What enterprise operators are reporting after 90 days on ClearView.
        </p>

        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {STATS.map((stat, idx) => (
            <article
              key={stat.label}
              data-testid={`stat-${idx}`}
              className="border border-[var(--border)] bg-[var(--card)] p-7 rounded-[2px]"
            >
              <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                <TrendingUp className="size-3.5 text-[var(--hud-cyan)]" strokeWidth={2.25} />
                <span className="font-mono text-[10px] font-bold tracking-[0.18em]">
                  METRIC {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-3 font-mono text-5xl font-black tracking-tight text-[var(--primary)] sm:text-6xl">
                {stat.value}
              </div>
              <div className="mt-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--foreground)]">
                {stat.label}
              </div>
              <p className="mt-3 font-sans text-[13px] leading-relaxed text-[var(--muted-foreground)]">
                {stat.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
