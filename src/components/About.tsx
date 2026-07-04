const steps = [
  {
    num: "01",
    title: "Understand first",
    desc: "Every engagement starts with a clear brief. We listen before we build.",
  },
  {
    num: "02",
    title: "Right tool for the job",
    desc: "Technology chosen for fit and longevity. We recommend what works for your situation.",
  },
  {
    num: "03",
    title: "Deliver, then improve",
    desc: "Ship working software early. Iterate based on real feedback. Keep improving.",
  },
];

const stats = [
  { stat: "< 24h", label: "Response time" },
  { stat: "AU", label: "Melbourne-based" },
  { stat: "Full stack", label: "Technical coverage" },
  { stat: "No lock-in", label: "You own your code" },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
              Who we are
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Building real things for real businesses
            </h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              <p>
                Acerva is a Melbourne-based technical services firm. We bring genuine technical expertise to every engagement, from the first conversation through to delivery.
              </p>
              <p>
                We build, integrate, and advise. Whether you&apos;re starting from scratch, modernising existing systems, or connecting the tools you already have, we find the right path and deliver it properly.
              </p>
              <p>
                Our work spans custom web development, CRM implementations, API integrations, and technical strategy. Often across all four at once.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-8 mt-10">
              {stats.map((item) => (
                <div key={item.label}>
                  <div className="font-semibold text-xl mb-0.5" style={{ color: "var(--text-primary)" }}>
                    {item.stat}
                  </div>
                  <div className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl p-7 space-y-3" style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}>
              <p className="text-xs font-mono uppercase tracking-widest mb-5" style={{ color: "var(--text-tertiary)" }}>
                Our approach
              </p>
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="flex gap-4 p-4 rounded-xl"
                  style={{
                    backgroundColor: "var(--bg-tertiary)",
                    border: "1px solid var(--border-light)",
                  }}
                >
                  <span className="font-mono text-xs shrink-0 mt-0.5 pt-0.5" style={{ color: "var(--accent)" }}>
                    {step.num}
                  </span>
                  <div>
                    <div className="text-sm font-medium mb-1" style={{ color: "var(--text-primary)" }}>
                      {step.title}
                    </div>
                    <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {step.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: "rgba(251, 191, 36, 0.05)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
