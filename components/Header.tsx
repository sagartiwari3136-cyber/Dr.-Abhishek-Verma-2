"use client";

import { useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#biography", label: "About" },
  { href: "#timeline", label: "Chronicle" },
  { href: "#legacy", label: "Family" },
  { href: "#philanthropy", label: "SKV Trust" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-5 md:px-16 py-5 bg-gradient-to-b from-[rgba(250,246,238,0.92)] to-transparent backdrop-blur-md">
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
          <circle cx="24" cy="24" r="22" stroke="#8a6a1f" strokeWidth="1" />
          <path d="M24 8 L29 20 L24 40 L19 20 Z" fill="#8a6a1f" opacity="0.85" />
          <circle cx="24" cy="16" r="3" fill="#faf6ee" stroke="#8a6a1f" strokeWidth="1" />
        </svg>
        <div className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase leading-relaxed">
          The Verma Family
          <b className="block text-[12px] tracking-[0.14em] text-goldBright">
            Est. Legacy of Service
          </b>
        </div>
      </div>

      <nav
        className={`
          md:static md:h-auto md:w-auto md:translate-x-0 md:bg-transparent md:border-none md:p-0
          fixed top-0 right-0 h-screen w-[min(78vw,320px)] bg-panel border-l border-line
          pt-24 px-8 transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <ul className="flex flex-col md:flex-row gap-6 md:gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="relative text-ink text-[13px] tracking-wide opacity-85 hover:opacity-100 transition-opacity after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-goldBright hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
        className="md:hidden w-10 h-10 border border-line rounded-sm text-goldBright"
      >
        ☰
      </button>
    </header>
  );
}
