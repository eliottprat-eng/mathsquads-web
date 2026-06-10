export function SectionLabel({ label }: { label: string }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.25em] text-electric mb-3">
      {label}
    </p>
  );
}
