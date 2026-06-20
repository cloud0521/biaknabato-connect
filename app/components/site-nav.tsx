"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Announcements", href: "/announcements" },
  { label: "Services", href: "/services" },
  { label: "Events", href: "/events" },
  { label: "Directory", href: "/directory" },
  { label: "About", href: "/about" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNav({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();

  return (
    <nav
      className={
        mobile
          ? "flex gap-1 overflow-x-auto border-t border-white/10 px-4 py-2 md:hidden"
          : "hidden items-center gap-1 md:flex"
      }
      aria-label={mobile ? "Mobile navigation" : "Main navigation"}
    >
      {navItems.map((item) => {
        const active = isActivePath(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={[
              "relative shrink-0 rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ease-out after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-amber-300 after:transition-transform after:duration-300 after:ease-out hover:bg-white/10 hover:text-white hover:after:scale-x-100",
              active
                ? "text-white after:scale-x-100"
                : "text-slate-300 after:scale-x-0",
            ].join(" ")}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
