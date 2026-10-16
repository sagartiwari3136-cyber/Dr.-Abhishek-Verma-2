# Dr. Abhishek Verma — Political Dossier Site

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Three.js version of the
redesigned bio page.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Where things live

- `lib/data.ts` — all editable content: timeline entries, achievements,
  philanthropy cards, the hero title ticker, gallery captions. This is the
  file to hand to whoever owns the real copy — every `[Sample]` /
  `[Add detail]` item marks placeholder content that needs replacing before
  publishing.
- `components/Hero.tsx` / `components/Biography.tsx` — the biography
  paragraphs and hero copy live inline in JSX (not in `data.ts`) since
  they're closer to prose than structured data.
- `components/SealCanvas.tsx` — the draggable 3D gold seal (Three.js). Runs
  client-side only (`dynamic(..., { ssr: false })` in `Hero.tsx`).
- `components/Reveal.tsx` — reusable scroll-in-view wrapper used across
  sections.
- `tailwind.config.ts` — the color palette (ivory/gold/maroon) and font
  mappings. Change colors here to re-theme everything at once.
- `app/layout.tsx` — loads Fraunces (display serif), Inter (body), and
  JetBrains Mono (data/labels) via `next/font/google`.

## Notes

- Timeline items and achievements marked `sample`/`[Sample]` are placeholder
  content, not real biographical claims — replace via `lib/data.ts`.
- The quote block is intentionally left blank rather than inventing a quote
  attributed to Dr. Verma — fill it in with something he's actually said.
- Gallery is placeholder frames; swap in real photography when available.
