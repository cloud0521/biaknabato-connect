import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, PhoneCall } from "lucide-react";
import { officialContact } from "@/app/lib/site-data";
import { SiteNav } from "@/app/components/site-nav";
import { AdminSessionRedirect } from "@/app/components/admin-session-redirect";

export function SiteHeader({ mode = "public" }: { mode?: "public" | "admin" }) {
  const isAdmin = mode === "admin";

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/95 text-white backdrop-blur">
      {isAdmin ? null : <AdminSessionRedirect />}
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href={isAdmin ? "/admin" : "/"} className="flex items-center gap-3">
          <span className="relative size-11 shrink-0 overflow-hidden rounded-full bg-white ring-2 ring-amber-300/70">
            <Image
              src="/seal-biaknabato.png"
              alt="Barangay Biaknabato seal"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span>
            <span className="block text-sm font-bold tracking-wide text-white">
              Biaknabato Connect
            </span>
            <span className="block text-xs text-slate-400">
              La Castellana, Negros Occidental
            </span>
          </span>
        </Link>
        {isAdmin ? (
          <span className="rounded-full border border-amber-300/40 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-300">
            Admin
          </span>
        ) : (
          <>
            <SiteNav />
            <div className="flex items-center gap-2">
              <Link
                href="/report"
                className="hidden items-center gap-2 rounded-md bg-amber-400 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 sm:flex"
              >
                <PhoneCall size={16} aria-hidden="true" />
                Report
              </Link>
              <Link
                href="/report"
                className="grid size-10 place-items-center rounded-md border border-white/15 text-slate-200 sm:hidden"
                aria-label="Report a concern"
              >
                <PhoneCall size={18} aria-hidden="true" />
              </Link>
            </div>
          </>
        )}
      </div>
      {isAdmin ? null : <SiteNav mobile />}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-bold text-white">Biaknabato Connect</p>
          <p className="mt-3 max-w-xl text-sm leading-6">
            A local-first information hub for Barangay Biaknabato residents,
            services, announcements, events, and public concern routing.
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Quick Links</p>
          <div className="mt-3 grid gap-2 text-sm">
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <Link href="/directory" className="hover:text-white">
              Directory
            </Link>
            <Link href="/report" className="hover:text-white">
              Report a Concern
            </Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Launch Note</p>
          <p className="mt-3 text-sm leading-6">
            Office location and hours are now set. Contact numbers, officials,
            hotlines, and service fees still need confirmation.
          </p>
          <a
            href={officialContact.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200"
          >
            <ExternalLink size={16} aria-hidden="true" />
            {officialContact.facebookName}
          </a>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: { label: string; href: string };
}) {
  return (
    <section className="border-b border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">
          {eyebrow}
        </p>
        <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              {description}
            </p>
          </div>
          {action ? (
            <Link
              href={action.href}
              className="inline-flex w-fit items-center gap-2 rounded-md bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              {action.label}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function CardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
  );
}

export function StatusPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex w-fit rounded-full bg-amber-300 px-3 py-1 text-xs font-semibold text-slate-950 ring-1 ring-amber-200">
      {children}
    </span>
  );
}
