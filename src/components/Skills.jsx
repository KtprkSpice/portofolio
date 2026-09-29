export default function Skills({ skillsData }) {
  return (
    <section id="skills" className="space-y-6">
      <div className="space-y-1">
        <p className="font-mono text-xs text-cyan-600 dark:text-cyan-400 font-semibold tracking-wider">
          02 // STACK & TOOLS
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          Technical Skills
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Languages, frameworks, databases, and development tools I work with
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((group, idx) => {
          const Icon = group.icon;
          return (
            <div
              key={idx}
              className="rounded-2xl p-5 bg-white dark:bg-[#181b25] border border-slate-200 dark:border-slate-800/80 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                <Icon size="20" className="text-blue-500" />

                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  {group.category}
                </h3>
              </div>
              <div className="space-y-3">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-[#0f131c] border border-slate-100 dark:border-slate-800/60 space-y-1"
                  >
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200 font-mono">
                      {skill.name}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
