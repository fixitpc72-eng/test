import React, { createContext, useContext, useState, useMemo, useCallback } from "react";

export type ThemeMode = "dark" | "light";

export interface ThemeColors {
  background: string;
  surface: string;
  surfaceAlt: string;
  border: string;
  borderStrong: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  primary: string;
  primaryFg: string;
  accent: string;
}

const dark: ThemeColors = {
  background: "#020204",
  surface: "#09090B",
  surfaceAlt: "#0E0E12",
  border: "#27272A",
  borderStrong: "#3F3F46",
  textPrimary: "#E4E4E7",
  textSecondary: "#A1A1AA",
  textMuted: "#71717A",
  primary: "#FF6B00",
  primaryFg: "#000000",
  accent: "#00D8F6",
};

const light: ThemeColors = {
  background: "#F8F8F7",
  surface: "#FFFFFF",
  surfaceAlt: "#F1F1EF",
  border: "#D4D4D8",
  borderStrong: "#A1A1AA",
  textPrimary: "#18181B",
  textSecondary: "#52525B",
  textMuted: "#71717A",
  primary: "#FF6B00",
  primaryFg: "#FFFFFF",
  accent: "#0891B2",
};

interface ThemeCtx {
  mode: ThemeMode;
  colors: ThemeColors;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeCtx | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("dark");

  const toggle = useCallback(() => {
    setMode((m) => (m === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo<ThemeCtx>(
    () => ({
      mode,
      colors: mode === "dark" ? dark : light,
      toggle,
    }),
    [mode, toggle]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
