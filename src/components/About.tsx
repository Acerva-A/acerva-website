const steps = [
  {
    num: "01",
    title: "Understand your business",
    desc: "We start by understanding what you do, how you do it, and what's in the way. Not just the tech.",
  },
  {
    num: "02",
    title: "Build the right foundation",
    desc: "We architect and build systems that fit your business. Built to last. Easy to work with.",
  },
  {
    num: "03",
    title: "You do what you're good at",
    desc: "Once the foundation is solid, it stops being a problem. Your team can focus on the work that matters.",
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
              Who we are
            </h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              <p>
                Acerva is a Melbourne-based technical services firm. We work with teams that need solid technical foundations.
              </p>
              <p>
                Whether you're building from scratch, modernising existing systems, or connecting the tools you have, we handle the technical work so you can focus on your business. Web development, integrations, CRM, automation. Whatever you need.
              </p>
              <p>
                We work with teams that care about quality and know what they're doing. No jargon. No bloat. Just solid engineering.
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
