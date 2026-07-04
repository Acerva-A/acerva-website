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

    // Check localStorage for retro mode
    const storedRetro = localStorage.getItem("retro");
    if (storedRetro === "true") {
      setIsRetro(true);
      applyRetro(true);
    }
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
    localStorage.setItem("retro", newRetro ? "true" : "false");
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-4">
      {/* Light/Dark Toggle */}
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm"
        style={{
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border)",
          color: "var(--text-secondary)",
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
        className="flex items-center gap-2 px-3 py-2 transition-colors text-sm"
        style={{
          backgroundColor: isRetro ? "#c0c0c0" : "var(--bg-secondary)",
          border: isRetro ? "2px solid #808080" : "1px solid var(--border)",
          color: isRetro ? "#000000" : "var(--text-secondary)",
          fontFamily: isRetro ? "Times New Roman, serif" : "inherit",
          textDecoration: isRetro ? "underline" : "none",
        }}
        aria-label="Toggle modern/90s mode"
      >
        <span>{isRetro ? "90's" : "modern"}</span>
      </button>
    </div>
  );
}
