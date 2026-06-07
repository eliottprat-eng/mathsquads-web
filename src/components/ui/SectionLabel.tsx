export function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.25em] text-electric mb-3">
      {number} — {label}
    </p>
  );
}
