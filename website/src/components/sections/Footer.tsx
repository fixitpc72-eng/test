import { ArrowRight, Activity } from "lucide-react";
import Button from "../ui/Button";
import Overline from "../ui/Overline";

export default function Footer() {
  return (
    <footer className="bg-[var(--background)]">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-24">
        <Overline code="END // OF // FEED" label="ALLIED DATA SOLUTIONS" />
        <h2 className="mt-4 font-display text-4xl font-black uppercase tracking-[0.04em] text-[var(--foreground)] sm:text-6xl">
          Uncompromising
          <br />
          <span className="text-[var(--primary)]">visibility.</span>
        </h2>
        <p className="mt-5 max-w-xl font-sans text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
          Our enterprise operations team will contact you shortly to authorize credentials and
          schedule a demo.
        </p>

        <div className="mt-8">
          <Button data-testid="footer-request-demo" size="lg">
            Request Demo
            <ArrowRight className="size-4" strokeWidth={2.5} />
          </Button>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center">
          <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--muted-foreground)]">
            ADMS // CLEARVIEW &copy; {new Date().getFullYear()}
          </span>
          <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-[var(--muted-foreground)]">
            <Activity className="size-3 text-[var(--hud-cyan)]" strokeWidth={2.25} />
            LOCAL BUILD &mdash; v1.0
          </span>
        </div>
      </div>
    </footer>
  );
}
