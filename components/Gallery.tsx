
import Reveal from "./Reveal";
import { galleryPlaceholders } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="gallery" className="px-5 md:px-16 pb-28">
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-10 mb-16">
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold">
            06 — Gallery
          </div>

          <h2 className="font-display font-medium text-3xl md:text-5xl max-w-xl text-ink">
            A visual record, to be completed.
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryPlaceholders.map((item) => (
          <Reveal key={item.title}>
            <div className="relative overflow-hidden rounded-sm border border-line aspect-[3/4]">
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  inset: 0,
                }}
              />

              <div className="absolute inset-3.5 border border-gold opacity-35 pointer-events-none" />

              <span className="absolute bottom-0 left-0 right-0 p-3.5 pt-10 font-mono text-[10px] text-white tracking-wide bg-gradient-to-t from-black/80 to-transparent">
                {item.title}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
