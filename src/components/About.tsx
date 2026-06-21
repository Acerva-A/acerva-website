const steps = [
  {
    num: "01",
    title: "Understand first",
    desc: "Every engagement starts with a clear brief. We listen before we build.",
  },
  {
    num: "02",
    title: "Right tool for the job",
    desc: "No overselling, no underselling. The technology that actually solves your problem.",
  },
  {
    num: "03",
    title: "Deliver, then improve",
    desc: "Ship working software. Iterate continuously. No black holes.",
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
    <section id="about" className="py-24 lg:py-32 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <p className="text-blue-400 text-xs font-medium uppercase tracking-widest mb-3">
              Who we are
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-6">
              Building real things for real businesses
            </h2>
            <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
              <p>
                Acerva is a Melbourne-based technical services firm. We work
                with businesses that need genuine technical expertise — not just
                a template and a handshake.
              </p>
              <p>
                We build, integrate, and advise. Whether you&apos;re starting
                from scratch, modernising existing systems, or trying to connect
                the tools you already have — we find the right path and deliver
                it properly.
              </p>
              <p>
                Our work spans custom web development, CRM implementations, API
                integrations, and technical strategy. Often across all four at
                once.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-8 mt-10">
              {stats.map((item) => (
                <div key={item.label}>
                  <div className="text-white font-semibold text-xl mb-0.5">
                    {item.stat}
                  </div>
                  <div className="text-slate-500 text-xs">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: approach card */}
          <div className="relative">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7 space-y-3">
              <p className="text-slate-600 text-xs font-mono uppercase tracking-widest mb-5">
                Our approach
              </p>
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="flex gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/40"
                >
                  <span className="text-blue-400 font-mono text-xs shrink-0 mt-0.5 pt-0.5">
                    {step.num}
                  </span>
                  <div>
                    <div className="text-white text-sm font-medium mb-1">
                      {step.title}
                    </div>
                    <div className="text-slate-400 text-sm">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* decorative glow */}
            <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
