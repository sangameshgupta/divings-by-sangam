"use client";

import { useEffect } from "react";

export default function TallyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-surface-container-low rounded-xl p-8 sticky top-32 border border-outline-variant/10 shadow-2xl shadow-black/20">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 font-headline">
        <span className="material-symbols-outlined text-primary">bolt</span>
        Initiate Connection
      </h2>
      <iframe
        data-tally-src="https://tally.so/embed/WO95rj?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
        loading="lazy"
        width="100%"
        height="400"
        title="Initiate Connection"
        className="border-none"
      />
    </div>
  );
}
