import Reveal from "./Reveal";
import { philanthropy } from "@/lib/data";

export default function Philanthropy() {
  return (
    <section id="philanthropy" className="px-5 md:px-16 py-28">
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-10 mb-16">
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold">
            05 — SKV Trust &amp; Philanthropy
          </div>
          <h2 className="font-display font-medium text-3xl md:text-5xl max-w-xl text-ink">
            Public office, private commitment.
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {philanthropy.map((p) => (
          <Reveal key={p.title}>
            <div className="border border-line rounded-sm p-8">
              <span className="block font-mono text-xs text-gold mb-4">{p.num}</span>
              <h3 className="font-display font-medium text-xl mb-3 text-ink">{p.title}</h3>
              <p className="text-muted text-[13.5px] leading-relaxed">{p.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
