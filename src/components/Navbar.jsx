import React from "react";
import { useDarkMode } from "../hooks/useDarkmode";

export default function Navbar() {
  const { theme, toggleTheme } = useDarkMode();

  const handleNavigate = (event, sectionId) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);
    if (!section) return;

    window.scrollTo({
      top: section.getBoundingClientRect().top + window.scrollY - 80,
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#0f131c]/80 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a
            href="#about"
            onClick={(event) => handleNavigate(event, "about")}
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            About
          </a>
          <a
            onClick={(event) => handleNavigate(event, "projects")}
            href="#projects"
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={(event) => handleNavigate(event, "skills")}
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            Skills
          </a>
          <a
            href="#certificates"
            onClick={(event) => handleNavigate(event, "certificates")}
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            Certificates
          </a>
          <a
            href="#contact"
            onClick={(event) => handleNavigate(event, "contact")}
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right Action: Dark Mode Toggle & Contact */}
        <div className="flex items-center gap-3">
          {/* Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark and Light Mode"
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-amber-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60 transition-all cursor-pointer"
          >
            {theme === "dark" ? (
              // Icon Sun
              <svg
                className="w-5 h-5 text-amber-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              // Icon Moon
              <svg
                className="w-5 h-5 text-slate-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          <a
            href="#contact"
            onClick={(event) => handleNavigate(event, "contact")}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-950 transition-colors shadow-sm"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
