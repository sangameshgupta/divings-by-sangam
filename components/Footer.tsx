import Link from "next/link";

const socialLinks = [
  { href: "https://x.com/SangamGella", label: "TWITTER / X" },
  { href: "https://www.youtube.com/@divingsbysangam", label: "YOUTUBE" },
  { href: "https://www.linkedin.com/in/gella-sangamesh-gupta-a35b5b1b8/", label: "LINKEDIN" },
  { href: "https://sangameshgellagupta.substack.com/", label: "SUBSTACK" },
  { href: "https://discord.gg/sqzazDd8", label: "DISCORD" },
];

export default function Footer() {
  return (
    <footer className="hidden md:block pb-12 pt-12 px-6 border-t border-outline-variant/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <Link href="/" className="text-2xl font-black tracking-tighter text-on-surface uppercase mb-2 block font-headline">
            DIVINGS
          </Link>
          <p className="text-xs text-on-surface-variant font-label tracking-[0.2em]">
            &copy; {new Date().getFullYear()} GELLA SANGAMESH GUPTA
          </p>
        </div>
        <div className="flex gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors font-label text-xs tracking-[0.2em]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
