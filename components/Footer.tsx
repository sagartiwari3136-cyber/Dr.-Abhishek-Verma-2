const socials = ["f", "ig", "x", "in", "yt"];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line px-5 md:px-16 pt-16 pb-9">
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-10 mb-12">
        <div>
          <h4 className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold mb-5">
            The Verma Family
          </h4>
          <p className="max-w-xs text-muted text-[13.5px] leading-loose">
            The Private Office of Verma Family oversees public engagement,
            philanthropic activity, and family enterprise across generations.
          </p>
        </div>
        <div>
          <h4 className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold mb-5">
            Navigate
          </h4>
          {[
            ["About", "#biography"],
            ["Chronicle", "#timeline"],
            ["Family", "#legacy"],
            ["SKV Trust", "#philanthropy"],
          ].map(([label, href]) => (
            <p key={href}>
              <a href={href} className="text-muted text-[13.5px] leading-loose hover:text-goldBright transition-colors">
                {label}
              </a>
            </p>
          ))}
        </div>
        <div>
          <h4 className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold mb-5">
            Follow
          </h4>
          <div className="flex gap-3.5">
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-ink text-xs hover:border-gold hover:text-goldBright hover:-translate-y-0.5 transition-all"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-wrap gap-2.5 font-mono text-[11px] text-muted border-t border-line pt-6">
        <span>© 2026 THE VERMA FAMILY. ALL RIGHTS RESERVED.</span>
        <span>THEVERMAFAMILY.ORG / ABHISHEK-VERMA</span>
      </div>
    </footer>
  );
}
