import Reveal from "./Reveal";
import { timeline } from "@/lib/data";

export default function Timeline() {
  return (
    <section id="timeline" className="px-5 md:px-16 py-28">
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-10 mb-16">
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold">
            02 — Chronicle of Service
          </div>
          <h2 className="font-display font-medium text-3xl md:text-5xl max-w-xl text-ink">
            A record kept in dates.
          </h2>
        </div>
      </Reveal>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-[52px] md:left-[110px] top-0 bottom-0 w-px bg-line" />

        {timeline.map((item) => (
          <Reveal key={item.title}>
            <div className="grid grid-cols-[52px_1fr] md:grid-cols-[110px_1fr] gap-5 md:gap-9 pb-14 relative">
              <div className="text-right pt-0.5">
                <span className="font-mono text-goldBright text-[11px] md:text-sm">{item.year}</span>
              </div>
              <span className="absolute left-[48px] md:left-[106px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold ring-4 ring-bg" />
              <div>
                <h3 className="font-display font-medium text-lg mb-2 text-ink">
                  {item.title}
                  <span
                    className={`ml-2.5 inline-block align-middle font-mono text-[9.5px] tracking-wide uppercase px-2 py-0.5 rounded-full border ${
                      item.status === "sample"
                        ? "text-gold border-gold"
                        : "text-muted border-line"
                    }`}
                  >
                    {item.status === "sample" ? "Placeholder" : "Confirmed"}
                  </span>
                </h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
