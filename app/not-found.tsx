import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-6 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[60vh] text-center">
      <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary mb-6 block">
        404
      </span>
      <h1 className="text-5xl md:text-7xl font-black tracking-[-0.04em] text-on-surface mb-6 font-headline">
        Lost in the Void.
      </h1>
      <p className="text-on-surface-variant text-lg mb-10 max-w-md">
        This page doesn&apos;t exist in the monolith. Let&apos;s get you back
        to familiar ground.
      </p>
      <Link
        href="/"
        className="bg-primary-container text-on-primary-container font-bold px-8 py-4 rounded-md hover:scale-[1.02] active:scale-95 transition-all"
      >
        Return Home
      </Link>
    </div>
  );
}
