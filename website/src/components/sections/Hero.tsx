import { useEffect, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import Button from "../ui/Button";
import Overline from "../ui/Overline";
import { ROTATING_WORDS } from "@/data/stats";

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)]" aria-hidden />

      <div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        <Overline code="SYS // 001" label="CONSOLIDATED OPERATIONS LAYER" />

        <h1 className="mt-6 font-display text-[40px] font-black uppercase leading-[1.05] tracking-[0.04em] text-[var(--foreground)] sm:text-[64px] lg:text-[80px]">
          <span>Rebuilding the </span>
          <span
            key={idx}
            className="inline-block text-[var(--primary)] animate-[hud-in_360ms_ease-out]"
          >
            {ROTATING_WORDS[idx]}
          </span>
          <br />
          <span>Operations Layer</span>
        </h1>

        <div className="mt-6 h-[3px] w-14 bg-[var(--primary)]" />

        <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
          Premium operations suite for commercial &amp; residential trades. Unifies CRM, scheduling,
          field operations, and accounting into a single real-time ledger.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button data-testid="hero-request-demo" size="lg">
            Request Demo
            <ArrowRight className="size-4" strokeWidth={2.5} />
          </Button>
          <Button variant="outline" size="lg">
            <Play className="size-4" strokeWidth={2.5} />
            Watch the Pitch
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-3 divide-x divide-[var(--border)] border border-[var(--border)] rounded-[2px]">
          {[
            { color: "bg-emerald-400", label: "Synced" },
            { color: "bg-[var(--hud-cyan)]", label: "Compliant" },
            { color: "bg-[var(--primary)]", label: "Live Feed" },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2 px-4 py-3">
              <span className={`size-2 rounded-full ${b.color}`} />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes hud-in {
          0%   { opacity: 0; transform: translateY(8px); filter: blur(2px); }
          100% { opacity: 1; transform: translateY(0);   filter: blur(0);   }
        }
      `}</style>
    </section>
  );
}
