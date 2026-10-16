const stats = [
  { num: "1968", label: "Born · New Delhi, India" },
  { num: "03", label: "National & International Honours" },
  { num: "03", label: "Generations in Public Service" },
  { num: "2025", label: "Chief National Coordinator, NDA" },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border-b border-line divide-x divide-line md:divide-x [&>*:nth-child(2)]:border-r-0 md:[&>*:nth-child(2)]:border-r">
      {stats.map((s) => (
        <div key={s.label} className="p-9">
          <div className="font-mono text-goldBright text-2xl md:text-3xl">{s.num}</div>
          <div className="mt-2 text-xs text-muted tracking-wide">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
