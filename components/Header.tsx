"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/writing", label: "WRITING" },
  { href: "/about", label: "ABOUT" },
  { href: "/collaborate", label: "COLLABORATE" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl">
      <nav className="flex justify-between items-center px-6 py-4 w-full max-w-none">
        <Link href="/" className="text-xl font-black tracking-[-0.04em] text-on-surface uppercase font-headline">
          DIVINGS
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-label text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-sm transition-all duration-200 hover:bg-surface-bright/40 ${
                  isActive
                    ? "text-primary font-bold"
                    : "text-on-surface/70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
