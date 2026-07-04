const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--bg-primary)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="font-semibold text-sm tracking-widest uppercase" style={{ color: "var(--text-primary)" }}>
              Acerva
            </span>
            <p className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>
              Melbourne, VIC, Australia
            </p>
          </div>

          <nav className="flex items-center gap-6">
            {footerLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm transition-colors duration-200 hover:opacity-80"
                style={{ color: "var(--text-tertiary)" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
            © {new Date().getFullYear()} Acerva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
