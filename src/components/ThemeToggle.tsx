"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [isRetro, setIsRetro] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check localStorage for theme
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      const dark = storedTheme === "dark";
      setIsDark(dark);
      applyTheme(dark);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
      applyTheme(prefersDark);
    }

    // Don't remember retro mode - always start in modern
    setIsRetro(false);
    applyRetro(false);
  }, []);

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement;
    if (dark) {
      html.classList.remove("light");
    } else {
      html.classList.add("light");
    }
  };

  const applyRetro = (retro: boolean) => {
    const html = document.documentElement;
    if (retro) {
      html.classList.add("retro");
    } else {
      html.classList.remove("retro");
    }
  };

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    applyTheme(newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  const toggleRetro = () => {
    const newRetro = !isRetro;
    setIsRetro(newRetro);
    applyRetro(newRetro);
    // Don't persist retro mode - always reload to modern
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-4">
      {/* Light/Dark Toggle */}
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 transition-colors text-sm"
        style={{
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border)",
          color: "var(--text-secondary)",
          padding: "6px 12px",
          borderRadius: "4px",
        }}
        aria-label="Toggle light/dark mode"
      >
        <span>{isDark ? "dark" : "light"}</span>
        {isDark ? (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style={{ color: "var(--accent)" }}>
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style={{ color: "var(--accent)" }}>
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </button>

      {/* Modern/90's Toggle */}
      <button
        onClick={toggleRetro}
        className="text-sm transition-colors"
        style={{
          background: "none",
          border: "none",
          color: "#0000ff",
          textDecoration: "underline",
          padding: 0,
          cursor: "pointer",
          fontFamily: "inherit",
          fontSize: "13px",
        }}
        aria-label={isRetro ? "Back to modern" : "Try 90's mode"}
        title={isRetro ? "Back to modern" : "Try 90's mode"}
      >
        {isRetro ? "back to modern" : "[retro]"}
      </button>
    </div>
  );
}
