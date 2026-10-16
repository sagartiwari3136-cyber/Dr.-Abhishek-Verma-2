import Reveal from "./Reveal";

export default function Biography() {
  return (
    <section id="biography" className="bg-panel px-5 md:px-16 py-28">
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-10 mb-16">
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold">
            01 — The Record
          </div>
          <h2 className="font-display font-medium text-3xl md:text-5xl max-w-xl text-ink">
            A life shaped by inheritance, and defined by his own record.
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr] gap-12">
        <Reveal>
          <div className="border border-dashed border-line rounded-sm p-5 font-mono text-[11.5px] text-muted leading-relaxed">
            Editorial note: paragraphs below combine your existing site copy with
            additional sample material — replace bracketed detail with the real
            account before publishing.
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-5 text-muted text-[15.5px] leading-[1.85]">
            <p>
              Abhishek Verma was born on <b className="text-ink font-medium">February 23, 1968</b>, in
              New Delhi, India, to Shrikant Verma and Veena Verma. He graduated from{" "}
              <b className="text-ink font-medium">Hindu College, Delhi University</b> in the 1980s and
              went on to obtain a Master&apos;s Diploma from{" "}
              <b className="text-ink font-medium">Georgetown University</b>, Washington, D.C. In April
              2024, he was conferred a Doctorate of Philosophy by{" "}
              <b className="text-ink font-medium">Maryland State University</b>, USA.
            </p>
            <p>
              [Sample — early life] Raised between New Delhi and the family&apos;s ancestral
              home, Abhishek was introduced early to the discipline of public life —
              sitting in on his father&apos;s constituency meetings and, by his own
              account, learning &quot;that public service is a ledger, not a
              headline.&quot;
            </p>
            <p>
              In <b className="text-ink font-medium">July 2021</b>, Abhishek Verma was awarded the
              &apos;Maharashtra Samman&apos; by the Governor of Maharashtra State, India. On{" "}
              <b className="text-ink font-medium">March 8, 2024</b>, he received the BBMG Award from
              British Members of Parliament in London, UK.
            </p>
            <p>
              On <b className="text-ink font-medium">January 30, 2025</b>, Abhishek was appointed as
              the &apos;Chief National Coordinator for the NDA Alliance and
              Elections&apos; by the Shiv Sena party chief and Maharashtra Deputy
              Chief Minister Eknath Shinde. The induction was performed during a
              formal ceremony in Mumbai, followed by a press conference —
              continuing a family legacy that follows in the footsteps of his
              parents and forefathers, all influential political figures.
            </p>
            <p>
              [Sample — personal] Outside public life, [add detail — family,
              residence, personal interests] rounds out a figure whose public
              record has, until now, spoken louder than his private one.
            </p>
            <p>
              A philanthropist and the Chairman of The Private Office of Verma
              Family, Abhishek oversees the family&apos;s investments in several
              public and private corporations and manages their global
              philanthropic activities.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
