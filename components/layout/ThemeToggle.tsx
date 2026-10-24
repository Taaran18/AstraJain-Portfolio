"use client";

import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { THEME_KEY } from "@/lib/theme";

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  try {
    localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
  } catch {}
}

export function ThemeToggle({ className }: { className?: string }) {
  function toggle(e: React.MouseEvent<HTMLButtonElement>) {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!document.startViewTransition || reduced) {
      root.classList.add("theme-fade");
      applyTheme(next);
      window.setTimeout(() => root.classList.remove("theme-fade"), 550);
      return;
    }

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    root.style.setProperty("--theme-x", `${x}px`);
    root.style.setProperty("--theme-y", `${y}px`);
    root.style.setProperty("--theme-r", `${r}px`);
    root.dataset.themeDir = next ? "in" : "out";
    document.startViewTransition(() => applyTheme(next));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      title="Switch theme"
      className={cn(
        "relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line-strong text-fg transition-colors hover:border-gold hover:text-gold",
        className,
      )}
    >
      <Sun
        size={19}
        aria-hidden="true"
        className="absolute transition-all duration-500 dark:-translate-y-8 dark:rotate-90 dark:opacity-0"
      />
      <Moon
        size={19}
        aria-hidden="true"
        className="absolute translate-y-8 -rotate-90 opacity-0 transition-all duration-500 dark:translate-y-0 dark:rotate-0 dark:opacity-100"
      />
    </button>
  );
}
