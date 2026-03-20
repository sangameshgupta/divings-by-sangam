interface ConsultantInsightProps {
  quote: string;
  label?: string;
}

export default function ConsultantInsight({ quote, label = "Consultant Insight" }: ConsultantInsightProps) {
  return (
    <div className="bg-surface-container-highest rounded-xl p-8 border border-outline-variant/10 flex flex-col justify-center text-center">
      <span
        className="material-symbols-outlined text-secondary text-5xl mb-6 mx-auto"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        deployed_code
      </span>
      <h3 className="font-label text-sm tracking-[0.2em] uppercase text-secondary mb-4">
        {label}
      </h3>
      <p className="text-lg font-medium leading-relaxed mb-6 italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="h-[1px] w-12 bg-outline-variant/30 mx-auto" />
    </div>
  );
}
