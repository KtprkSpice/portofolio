export default function Contacts({ profileData }) {
  return (
    <section
      id="contact"
      className="rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-cyan-500/10 via-cyan-500/5 to-transparent border border-cyan-500/20 dark:bg-[#181b25]/80 dark:border-slate-800"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider font-semibold">
            ● Open to Opportunities
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Let's build something dependable together.
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Currently seeking Junior Software Engineer, Fullstack, or Backend
            roles. Whether you have an open position, freelance project, or
            simply want to chat code, feel free to reach out.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <div className="px-4 py-2.5 rounded-lg bg-white dark:bg-[#0f131c] border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 w-full sm:w-auto text-center">
            {profileData.email}
          </div>
          <a
            href={`mailto:${profileData.email}`}
            className="px-5 py-2.5 rounded-lg font-semibold text-xs bg-cyan-600 hover:bg-cyan-500 text-white dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-950 transition-colors w-full sm:w-auto text-center"
          >
            Send Message ✉
          </a>
        </div>
      </div>
    </section>
  );
}
