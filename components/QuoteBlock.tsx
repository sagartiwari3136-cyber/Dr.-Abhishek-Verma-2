import Reveal from "./Reveal";

export default function QuoteBlock() {
  return (
    <section className="px-5 md:px-16 pb-28">
      <Reveal>
        <div className="border border-dashed border-line rounded-md text-center px-6 md:px-20 py-14">
          <span className="block font-display text-6xl text-gold leading-none mb-2.5">&ldquo;</span>
          <p className="font-display italic text-xl md:text-3xl max-w-3xl mx-auto leading-snug text-ink">
            [Placeholder — insert a short statement from Dr. Verma here. A single
            strong sentence on public service or his vision works best in this
            space.]
          </p>
          <div className="mt-6 font-mono text-[11px] tracking-wide uppercase text-gold">
            — To be supplied by Dr. Abhishek Verma
          </div>
        </div>
      </Reveal>
    </section>
  );
}
