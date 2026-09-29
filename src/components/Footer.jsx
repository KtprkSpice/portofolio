export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 py-8 text-xs font-mono text-slate-500 dark:text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} Developer Portfolio. Engineered with
          Tailwind & ReactJS.
        </div>
      </div>
    </footer>
  );
}
