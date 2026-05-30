import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const next = theme === "dark" ? "LIGHT" : "DARK";

  return (
    <button
      type="button"
      data-testid="theme-toggle"
      aria-label={`Switch to ${next} theme`}
      onClick={toggle}
      className="inline-flex items-center gap-2 border border-[var(--border)] bg-[var(--card)] hover:border-[var(--ring)] px-3 py-2 rounded-[2px] transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="size-4 text-[var(--primary)]" strokeWidth={2.25} />
      ) : (
        <Moon className="size-4 text-[var(--foreground)]" strokeWidth={2.25} />
      )}
      <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-[var(--foreground)]">
        {next}
      </span>
    </button>
  );
}
