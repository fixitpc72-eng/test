import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  bordered?: boolean;
}

export default function Card({ children, className, bordered = true, ...rest }: Props) {
  return (
    <div
      {...rest}
      className={cn(
        bordered && "border border-[var(--border)]",
        "bg-[var(--card)] text-[var(--card-foreground)] rounded-[2px]",
        className
      )}
    >
      {children}
    </div>
  );
}
