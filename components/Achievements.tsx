"use client";

import { useRef } from "react";
import Reveal from "./Reveal";
import { achievements } from "@/lib/data";

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(4px)`;
  };
  const onMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "none";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="bg-bg hover:bg-panel2 transition-colors p-9 [transform-style:preserve-3d] will-change-transform"
    >
      {children}
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="px-5 md:px-16 pb-28">
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-10 mb-16">
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold">
            03 — Honours &amp; Recognition
          </div>
          <h2 className="font-display font-medium text-3xl md:text-5xl max-w-xl text-ink">
            Distinctions earned across two decades of public and philanthropic life.
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
        {achievements.map((a) => (
          <Reveal key={a.title}>
            <TiltCard>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.2}
                className="w-8 h-8 text-goldBright mb-5"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M8.5 12.5L7 21l5-3 5 3-1.5-8.5" />
              </svg>
              <h3 className="font-display font-medium text-lg mb-2.5 text-ink">{a.title}</h3>
              <p className="text-muted text-[13.5px] leading-relaxed">{a.description}</p>
              <span className="block mt-4 font-mono text-[11px] text-gold">{a.year}</span>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
