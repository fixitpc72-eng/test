import Overline from "../ui/Overline";

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-24">
        <Overline code="SEC // 06" label="DASHBOARD PREVIEW" />
        <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-[0.04em] text-[var(--foreground)] sm:text-5xl">
          One powerful
          <br />
          <span className="text-[var(--muted-foreground)]">interface</span>
        </h2>
        <p className="mt-5 max-w-2xl font-sans text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
          The ADMS ClearView dashboard — real-time field telemetry, schedules, and financials on a
          single canvas.
        </p>

        <div className="mt-12 overflow-hidden border border-[var(--border)] rounded-[2px] bg-[var(--card)]">
          <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--background)] px-4 py-2.5">
            <span className="size-2 rounded-full bg-[var(--primary)]" />
            <span className="size-2 rounded-full bg-[var(--hud-cyan)]" />
            <span className="size-2 rounded-full bg-[var(--muted)]" />
            <span className="ml-3 font-mono text-[10px] tracking-[0.18em] text-[var(--muted-foreground)]">
              clearview / live
            </span>
          </div>
          <img
            src="/adms-clearview-dashboard.png"
            alt="ADMS ClearView Dashboard Interface"
            className="block w-full"
          />
        </div>
      </div>
    </section>
  );
}
