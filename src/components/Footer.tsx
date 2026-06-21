const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <span className="text-white font-semibold text-sm tracking-widest uppercase">
              Acerva
            </span>
            <p className="text-slate-600 text-xs mt-1">
              Melbourne, VIC, Australia
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6">
            {footerLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Acerva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
