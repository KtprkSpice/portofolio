import { profileData, projectsData } from "../data/portofolioData";

export default function Hero({ profileData }) {
  return (
    <section
      id="about"
      className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-4"
    >
      <div className="lg:col-span-7 space-y-6">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          {profileData.badge}
        </div>

        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold">
            &gt;_ JUNIOR SOFTWARE ENGINEER
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {profileData.name}
          </h1>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          {profileData.summary}
        </p>

        {/* Badges / Location */}
        <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
          <span className="px-3 py-1.5 rounded-md bg-white dark:bg-[#181b25] border border-slate-200 dark:border-slate-800">
            📍 {profileData.location}
          </span>
          <span className="px-3 py-1.5 rounded-md bg-white dark:bg-[#181b25] border border-slate-200 dark:border-slate-800">
            ⚡ {profileData.techStackSummary.join(" • ")}
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-lg font-medium text-sm bg-cyan-600 hover:bg-cyan-500 text-white dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-950 transition-colors shadow-sm"
          >
            View Projects ↓
          </a>
          <a
            href="#"
            className="px-5 py-2.5 rounded-lg font-medium text-sm bg-white dark:bg-[#181b25] text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            📄 Download CV / Resume
          </a>
        </div>
      </div>

      {/* Profile Card / Avatar */}
      <div className="lg:col-span-5 flex justify-center">
        <div className="w-full max-w-sm rounded-2xl p-3 bg-white dark:bg-[#181b25] border border-slate-200 dark:border-slate-800 shadow-xl relative group">
          <div className="overflow-hidden rounded-xl aspect-square bg-slate-200 dark:bg-slate-900">
            <img
              src={profileData.avatarUrl}
              alt={profileData.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-4 space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                {profileData.name}
              </h3>
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                {profileData.degree}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {profileData.role}
            </p>
            <p className="text-xs text-cyan-600 dark:text-cyan-400 pt-1 font-mono">
              ● Focused on Clean Code & APIs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
