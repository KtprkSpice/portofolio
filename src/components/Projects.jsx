import { ArrowInUpRightSquare, Github } from "@boxicons/react";

export default function Projects({ projectsData }) {
  return (
    <section id="projects" className="space-y-6">
      <div className="space-y-1">
        <p className="font-mono text-xs text-cyan-600 dark:text-cyan-400 font-semibold tracking-wider">
          01 // PORTFOLIO
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          Featured Projects
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Practical web applications built with clean code and structured
          databases
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl p-6 bg-white dark:bg-[#181b25] border border-slate-200 dark:border-slate-800/80 shadow-sm hover:border-cyan-500/50 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights Box */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0f131c] border border-slate-200 dark:border-slate-800/60 space-y-2">
                <p className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                  ARCHITECTURE HIGHLIGHTS:
                </p>
                <ul className="space-y-1.5">
                  {project.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2"
                    >
                      <span className="text-cyan-500">▪</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tech.map((techItem, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3 pt-6 mt-4 border-t border-slate-100 dark:border-slate-800/80">
              <a
                href={project.liveDemoUrl}
                className="flex-1 inline-flex items-center justify-center gap-2 text-center py-2 px-3 text-xs font-semibold rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-950 transition-colors"
              >
                Live Demo{" "}
                <ArrowInUpRightSquare className="w-3.5 h-3.5 shrink-0" />
              </a>

              <a
                href={project.githubUrl}
                className="flex-1 inline-flex items-center justify-center gap-2 text-center py-2 px-3 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4 shrink-0" />
                GitHub Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
