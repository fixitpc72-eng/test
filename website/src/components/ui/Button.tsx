import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

const variantClass: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "bg-[var(--primary)] text-[var(--primary-foreground)] hover:brightness-110 active:brightness-95",
  outline:
    "border border-[var(--border)] bg-transparent text-[var(--foreground)] hover:bg-[var(--accent)] hover:border-[var(--ring)]",
  ghost: "bg-transparent text-[var(--foreground)] hover:bg-[var(--accent)]",
};

const sizeClass: Record<NonNullable<Props["size"]>, string> = {
  sm: "px-3 py-1.5 text-[11px]",
  md: "px-5 py-3 text-xs",
  lg: "px-6 py-4 text-sm",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-mono font-bold uppercase tracking-[0.18em]",
        "rounded-[2px] transition-[filter,background-color,border-color] duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
        variantClass[variant],
        sizeClass[size],
        className
      )}
    >
      {children}
    </button>
  );
}
