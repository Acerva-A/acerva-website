import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acerva | Technical Solutions",
  description:
    "Acerva is a Melbourne-based technical services firm. We build digital products, integrations, and CRM solutions for businesses that care about how things work.",
  keywords: ["web development", "Salesforce", "API integration", "Melbourne", "tech consulting"],
  openGraph: {
    title: "Acerva | Technical Solutions",
    description:
      "Melbourne-based technical services. Web development, system integrations, CRM, and consulting.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full" style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
        {children}
        <ThemeToggle />
        <Analytics />
      </body>
    </html>
  );
}
