export function SectionLabel({
  number,
  label,
  dark = false,
}: {
  number: string;
  label: string;
  dark?: boolean;
}) {
  if (dark) {
    return (
      <p className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-white/10 text-white/80 border border-white/15">
        <span className="text-coral-light font-semibold">{number}</span>
        <span className="w-1 h-1 rounded-full bg-white/30" />
        {label}
      </p>
    );
  }

  return (
    <p className="section-tag mb-4 gap-2.5">
      <span className="text-coral/50 font-semibold">{number}</span>
      <span className="w-1 h-1 rounded-full bg-coral/30" />
      {label}
    </p>
  );
}
