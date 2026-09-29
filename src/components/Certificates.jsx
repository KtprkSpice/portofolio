export default function Certificates({ certificatesData }) {
  return (
    <section id="certificates" className="space-y-6">
      <div className="space-y-1">
        <p className="font-mono text-xs text-cyan-600 dark:text-cyan-400 font-semibold tracking-wider">
          03 // CREDENTIALS
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          Certificates & Credentials
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Formal courses, bootcamps, and technical certifications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificatesData.map((cert) => (
          <div
            key={cert.id}
            className="rounded-2xl p-6 bg-white dark:bg-[#181b25] border border-slate-200 dark:border-slate-800/80 shadow-sm flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                  Verified Credential
                </span>
                <span className="text-slate-400">{cert.year}</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                  {cert.issuer}
                </p>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {cert.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">
                ID: {cert.id}
              </span>
              <a
                href={cert.verifyUrl}
                className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
              >
                View Certificate →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
