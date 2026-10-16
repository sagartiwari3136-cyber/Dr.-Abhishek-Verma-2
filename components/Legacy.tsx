import Reveal from "./Reveal";

export default function Legacy() {
  return (
    <section id="legacy" className="bg-panel px-5 md:px-16 py-28">
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-10 mb-16">
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold">
            04 — Family Legacy
          </div>
          <h2 className="font-display font-medium text-3xl md:text-5xl max-w-xl text-ink">
            Three generations, one office of service.
          </h2>
        </div>
      </Reveal>

      <Reveal>
        <div className="flex justify-center">
          <svg width="720" height="220" viewBox="0 0 720 220" fill="none" className="max-w-full h-auto">
            <line x1="120" y1="60" x2="360" y2="60" stroke="#8a6a1f" strokeWidth="1" opacity="0.55" />
            <line x1="360" y1="60" x2="360" y2="120" stroke="#8a6a1f" strokeWidth="1" opacity="0.55" />
            <line x1="360" y1="120" x2="360" y2="160" stroke="#8a6a1f" strokeWidth="1" opacity="0.55" />
            <line
              x1="360"
              y1="160"
              x2="200"
              y2="200"
              stroke="#8a6a1f"
              strokeWidth="1"
              opacity="0.35"
              strokeDasharray="3 4"
            />
            <line
              x1="360"
              y1="160"
              x2="520"
              y2="200"
              stroke="#8a6a1f"
              strokeWidth="1"
              opacity="0.35"
              strokeDasharray="3 4"
            />

            <g>
              <rect x="40" y="34" width="160" height="52" rx="2" fill="none" stroke="#8a6a1f" opacity="0.6" />
              <text
                x="120"
                y="56"
                textAnchor="middle"
                fill="#5b6472"
                fontSize="10"
                fontFamily="JetBrains Mono, monospace"
                letterSpacing="1"
              >
                FOREFATHERS
              </text>
              <text x="120" y="72" textAnchor="middle" fill="#1f2530" fontSize="12" fontFamily="Inter, sans-serif">
                [Sample — earlier generations]
              </text>
            </g>

            <g>
              <rect x="280" y="94" width="160" height="52" rx="2" fill="none" stroke="#8a6a1f" opacity="0.7" />
              <text
                x="360"
                y="116"
                textAnchor="middle"
                fill="#5b6472"
                fontSize="10"
                fontFamily="JetBrains Mono, monospace"
                letterSpacing="1"
              >
                PARENTS
              </text>
              <text x="360" y="132" textAnchor="middle" fill="#1f2530" fontSize="12" fontFamily="Inter, sans-serif">
                Shrikant &amp; Veena Verma
              </text>
            </g>

            <g>
              <rect x="280" y="160" width="160" height="52" rx="2" fill="#8a6a1f" opacity="0.12" stroke="#8f5510" />
              <text
                x="360"
                y="180"
                textAnchor="middle"
                fill="#8f5510"
                fontSize="10"
                fontFamily="JetBrains Mono, monospace"
                letterSpacing="1"
              >
                CURRENT
              </text>
              <text
                x="360"
                y="196"
                textAnchor="middle"
                fill="#1f2530"
                fontSize="13"
                fontFamily="Fraunces, serif"
                fontWeight="500"
              >
                Dr. Abhishek Verma
              </text>
            </g>
          </svg>
        </div>
        <p className="text-center max-w-xl mx-auto mt-9 text-muted text-sm leading-relaxed">
          Dr. Verma&apos;s appointment as Chief National Coordinator continues a
          family legacy of political engagement — a lineage the family site can
          expand with named forefathers, roles held, and constituencies served.
        </p>
      </Reveal>
    </section>
  );
}
