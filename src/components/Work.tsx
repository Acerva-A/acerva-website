const projects = [
  {
    category: "Web Development",
    title: "Trade Services Website Rebuild",
    description:
      "Full redesign and rebuild of a Melbourne-based trade services business. Mobile-first, fast-loading, with integrated quote request and lead capture.",
    tags: ["Next.js", "Tailwind", "Vercel"],
  },
  {
    category: "CRM Integration",
    title: "Salesforce API Integration Suite",
    description:
      "Multi-system sync between Salesforce, a quoting platform, and an accounting tool. Eliminated manual data re-entry across three teams.",
    tags: ["Salesforce", "REST API", "Automation"],
  },
  {
    category: "Workflow Automation",
    title: "Client Onboarding Workflow",
    description:
      "End-to-end onboarding automation for a professional services firm. Reduced admin time significantly across the entire intake process.",
    tags: ["Flows", "Webhooks", "Forms"],
  },
];

const gradients = [
  "from-blue-900/30 to-slate-900",
  "from-indigo-900/30 to-slate-900",
  "from-sky-900/30 to-slate-900",
];

export default function Work() {
  return (
    <section id="work" className="py-24 lg:py-32 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-blue-400 text-xs font-medium uppercase tracking-widest mb-3">
            What we&apos;ve built
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col hover:border-slate-700 transition-colors duration-200"
            >
              {/* Placeholder visual */}
              <div
                className={`h-44 bg-gradient-to-br ${gradients[i]} relative flex items-center justify-center border-b border-slate-800`}
              >
                <div className="w-14 h-14 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                  <div className="w-7 h-7 bg-blue-400/30 rounded-lg" />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="text-blue-400 text-xs font-medium uppercase tracking-widest mb-2">
                  {p.category}
                </p>
                <h3 className="text-white font-semibold text-base mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-slate-500 bg-slate-800 rounded-md px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-600 text-sm mt-10">
          Full case studies coming soon.
        </p>
      </div>
    </section>
  );
}
