"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", icon: "mail", label: "Newsletter" },
  { href: "/writing", icon: "subscriptions", label: "Writing" },
  { href: "/collaborate", icon: "share", label: "Collaborate" },
  { href: "/projects", icon: "terminal", label: "Projects" },
  { href: "/about", icon: "link", label: "About" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50">
      <div className="bg-surface-container-low/80 backdrop-blur-lg flex justify-around items-center px-4 pb-6 pt-3 rounded-t-xl shadow-2xl shadow-black/50 border-t border-outline-variant/20">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center p-3 active:scale-90 transition-transform ${
                isActive
                  ? "bg-primary-container/20 text-primary rounded-xl"
                  : "text-on-surface/50 hover:text-primary transition-colors duration-200"
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
