const projects = [
  {
    category: "Web Development",
    title: "Trade Services Website Rebuild",
    description: "A Melbourne trade business needed a site that brought in customers. We rebuilt their web presence with new business inquiries built in. Freed them to focus on the work.",
    tags: ["Next.js", "Tailwind", "Vercel"],
  },
  {
    category: "CRM Integration",
    title: "Salesforce & Accounting Integration",
    description: "Three teams wasting time manually re-entering data across systems. We built a sync between Salesforce, quoting, and accounting. Stopped the waste.",
    tags: ["Salesforce", "REST API", "Automation"],
  },
  {
    category: "Workflow Automation",
    title: "Professional Services Onboarding",
    description: "Client intake was eating admin time. We built an automated workflow that handles the process. Team focuses on delivering the work.",
    tags: ["Flows", "Webhooks", "Forms"],
  },
];

const gradients = [
  "rgba(251, 191, 36, 0.1)",
  "rgba(251, 191, 36, 0.08)",
  "rgba(251, 191, 36, 0.06)",
];

export default function Work() {
  return (
    <section id="work" className="py-24 lg:py-32" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
            What we&apos;ve built
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
            Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="rounded-xl overflow-hidden flex flex-col transition-colors duration-200"
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="h-44 relative flex items-center justify-center"
                style={{
                  backgroundColor: gradients[i],
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div className="w-14 h-14 rounded-xl border flex items-center justify-center" style={{ borderColor: "var(--border-light)", backgroundColor: "rgba(255, 255, 255, 0.03)" }}>
                  <div className="w-7 h-7 rounded-lg" style={{ backgroundColor: "rgba(251, 191, 36, 0.2)" }} />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
                  {p.category}
                </p>
                <h3 className="font-semibold text-base mb-2 leading-snug" style={{ color: "var(--text-primary)" }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--text-secondary)" }}>
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-md px-2.5 py-1"
                      style={{
                        color: "var(--text-tertiary)",
                        backgroundColor: "var(--bg-tertiary)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-10" style={{ color: "var(--text-tertiary)" }}>
          Full case studies coming soon.
        </p>
      </div>
    </section>
  );
}
