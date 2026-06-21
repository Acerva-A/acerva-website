export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, #334155 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Blue ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        {/* Location pill */}
        <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-medium bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-10">
          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
          Melbourne, Australia
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.08]">
          Technical work,
          <br />
          <span className="text-blue-400">done properly.</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          We build digital products and integrations for businesses that care
          about how things work — not just that they work.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-200 text-base"
          >
            Start a project
          </a>
          <a
            href="#work"
            className="border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-200 text-base"
          >
            See our work →
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-24 flex flex-col items-center gap-2 text-slate-600">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg
            className="w-4 h-4 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
