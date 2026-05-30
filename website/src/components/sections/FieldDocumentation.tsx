import { Camera, Truck } from "lucide-react";
import Overline from "../ui/Overline";

export default function FieldDocumentation() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--accent)]/30">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-24">
        <Overline code="SEC // 03" label="FIELD INTELLIGENCE" />
        <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-[0.04em] text-[var(--foreground)] sm:text-5xl">
          Conquer complex
          <br />
          <span className="text-[var(--muted-foreground)]">field documentation</span>
        </h2>
        <p className="mt-5 max-w-2xl font-sans text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
          Empower technicians with high-density data, checklists, and real-time photo telemetry from
          any job site.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <FeatureBlock
            code="FEAT // 001"
            icon={Camera}
            title="Zero-Trip Closeouts"
            description="Capture geo-tagged, time-stamped site photos. Assembled and submitted as the crew leaves the site. Closeout packages approved by clients in minutes — zero return trips for missing photos."
          />
          <FeatureBlock
            code="FEAT // 002"
            icon={Truck}
            title="Technician Synchronization"
            description="Smart Dispatch with drag-and-drop scheduling synced to live GPS telemetry. Deploy crews based on skill, location, and SLA urgency — and watch technician utilization climb."
          />
        </div>
      </div>
    </section>
  );
}

interface BlockProps {
  code: string;
  icon: typeof Camera;
  title: string;
  description: string;
}

function FeatureBlock({ code, icon: Icon, title, description }: BlockProps) {
  return (
    <article className="relative border border-[var(--border)] bg-[var(--card)] p-7 rounded-[2px]">
      <div className="flex items-center gap-3">
        <Icon className="size-5 text-[var(--primary)]" strokeWidth={2.25} />
        <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-[var(--hud-cyan)]">
          {code}
        </span>
      </div>
      <h3 className="mt-4 font-display text-xl font-black uppercase tracking-[0.04em] text-[var(--foreground)] sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 font-sans text-[13px] leading-relaxed text-[var(--muted-foreground)] sm:text-sm">
        {description}
      </p>
    </article>
  );
}
