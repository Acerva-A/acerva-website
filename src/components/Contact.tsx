"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Placeholder — wire up a real API route or form service later
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  };

  const inputClass =
    "w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors duration-200";

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <p className="text-blue-400 text-xs font-medium uppercase tracking-widest mb-3">
              Get in touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-5">
              Let&apos;s talk about your project
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-10">
              Whether you have a detailed brief or just a problem you&apos;re
              trying to solve — we&apos;re happy to start the conversation.
              We&apos;ll get back to you within one business day.
            </p>

            <div className="space-y-4">
              <InfoRow
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                }
                label="Melbourne, Victoria, Australia"
              />
              <InfoRow
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                }
                label="Response within 1 business day"
              />
            </div>
          </div>

          {/* Right: form */}
          <div>
            {status === "sent" ? (
              <div className="bg-slate-900 border border-green-500/30 rounded-xl p-10 text-center h-full flex flex-col items-center justify-center gap-4">
                <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    Message received
                  </h3>
                  <p className="text-slate-400 text-sm">
                    We&apos;ll be in touch within one business day.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={set("name")}
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={set("email")}
                      className={inputClass}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={set("company")}
                    className={inputClass}
                    placeholder="Your company (optional)"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    What are you working on? *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={set("message")}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your project, the problem you're solving, or the outcome you need..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3.5 rounded-lg transition-colors duration-200 text-sm"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
                {status === "error" && (
                  <p className="text-red-400 text-xs text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 text-slate-400">
      <div className="w-8 h-8 bg-blue-600/10 border border-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
        <svg
          className="w-4 h-4 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {icon}
        </svg>
      </div>
      <span className="text-sm">{label}</span>
    </div>
  );
}
