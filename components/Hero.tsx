"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { titleTicker } from "@/lib/data";

// Three.js touches the DOM directly — load client-side only, no SSR.
const SealCanvas = dynamic(() => import("./SealCanvas"), { ssr: false });

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % titleTicker.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center gap-10 px-5 md:px-16 pt-40 pb-20 border-b border-line overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 82% 18%, rgba(201,161,93,.20), transparent 45%), radial-gradient(circle at 10% 90%, rgba(125,36,50,.08), transparent 40%)",
        }}
      />

      <div className="relative z-10 order-2 md:order-1">
        <div className="flex items-center gap-2.5 font-mono text-[11px] tracking-[0.22em] uppercase text-gold mb-5">
          <span className="w-6 h-px bg-gold inline-block" />
          The Verma Family — Political Dossier
        </div>

        <h1 className="font-display font-medium text-[44px] md:text-[92px] leading-[0.98] tracking-tight text-ink">
          Dr. Abhishek
          <br />
          <em className="italic font-light text-goldBright not-italic md:italic">Verma</em>
        </h1>

        <div className="mt-6 h-7 overflow-hidden relative max-w-xl">
          {titleTicker.map((t, i) => (
            <p
              key={t}
              className={`font-mono text-sm text-muted tracking-wide h-7 flex items-center absolute top-0 transition-all duration-500 ${
                i === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              {t}
            </p>
          ))}
        </div>

        <p className="mt-7 max-w-lg text-muted text-[15px] leading-relaxed">
          Third in an unbroken line of public service, Dr. Abhishek Verma continues
          a family legacy that spans generations — from grassroots advocacy to
          national coordination, from private philanthropy to public office.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap">
          <a
            href="#biography"
            className="font-mono text-xs tracking-wide uppercase px-8 py-4 rounded-sm bg-gold text-bg border border-gold hover:bg-goldBright transition-colors"
          >
            Read the Record
          </a>
          <a
            href="#timeline"
            className="font-mono text-xs tracking-wide uppercase px-8 py-4 rounded-sm border border-line text-ink hover:border-gold hover:text-goldBright transition-colors"
          >
            View Chronicle
          </a>
        </div>
      </div>

      <div className="relative z-10 order-1 md:order-2">
        <SealCanvas />
      </div>

      <div className="hidden md:flex absolute bottom-7 left-16 z-10 items-center gap-2.5 font-mono text-[10px] tracking-[0.18em] uppercase text-muted">
        <span className="w-px h-8 bg-gradient-to-b from-gold to-transparent scroll-bar" />
        Scroll
      </div>
    </section>
  );
}
