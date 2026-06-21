const services = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    title: "Web & App Development",
    description:
      "Custom websites and web applications built with modern frameworks. Fast, accessible, and designed to convert visitors into clients.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "System Integrations",
    description:
      "Connecting your tools, APIs, and platforms so data flows where it needs to. No more manual re-entry or duct-tape workarounds.",
    tags: ["REST APIs", "Webhooks", "ETL", "Automation"],
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    title: "CRM & Automation",
    description:
      "Salesforce configuration, custom objects, flows, and integrations. Your CRM working for your team — not the other way around.",
    tags: ["Salesforce", "Flows", "LWC", "Apex"],
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "Technical Consulting",
    description:
      "Architecture reviews, tech stack decisions, and vendor evaluation. Clear thinking on complex technical problems, without the agency overhead.",
    tags: ["Strategy", "Architecture", "Review", "Vendor eval"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-blue-400 text-xs font-medium uppercase tracking-widest mb-3">
            What we do
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all duration-200"
            >
              <div className="w-10 h-10 bg-blue-600/10 border border-blue-500/20 rounded-lg flex items-center justify-center mb-5 text-blue-400 group-hover:bg-blue-600/20 transition-colors duration-200">
                {s.icon}
              </div>
              <h3 className="text-white font-semibold text-base mb-2">
                {s.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {s.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-slate-500 bg-slate-800 rounded-md px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
