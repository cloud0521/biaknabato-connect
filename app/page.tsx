import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MapPin,
  ShieldAlert,
} from "lucide-react";
import { SiteFooter, SiteHeader, StatusPill } from "@/app/components/site-shell";
import {
  announcements,
  barangayFacts,
  officialContact,
  programAreas,
  quickActions,
  sourceNotes,
} from "@/app/lib/site-data";
import { assetPath } from "@/app/lib/asset-path";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="bg-slate-950">
        <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-slate-950 text-white">
          <Image
            src={assetPath("/biaknabato-hero.png")}
            alt="Illustration of Barangay Biaknabato landscape near Mt. Kanlaon"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/78 to-slate-950/35" />
          <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <StatusPill>Ready for barangay review</StatusPill>
              <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Biaknabato Connect
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100">
                A mobile-first community hub for Barangay Biaknabato: public
                announcements, barangay services, events, directory contacts,
                and concern reporting in one clear local site.
              </p>
              <div className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                    Barangay Office
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {officialContact.officeLocation}
                  </p>
                </div>
                <div className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                    Office Hours
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {officialContact.officeHours}
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
                >
                  View Services
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link
                  href="/directory"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  Emergency Directory
                  <ShieldAlert size={16} aria-hidden="true" />
                </Link>
                <a
                  href={officialContact.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  Facebook Page
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-slate-900">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {quickActions.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  href={item.href}
                  key={item.title}
                  className="group rounded-lg border border-white/10 bg-slate-950 p-5 transition hover:border-amber-300/70 hover:bg-slate-900"
                >
                  <Icon className="text-amber-300" size={22} aria-hidden="true" />
                  <h2 className="mt-4 font-bold text-white">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-300">
                    Open
                    <ArrowRight
                      size={15}
                      aria-hidden="true"
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="bg-slate-950">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">
                Barangay Snapshot
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
                Local details and public profile
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                The office location, office hours, and Facebook page came from
                your local input. Population and geography details remain tied
                to public references.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {barangayFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-lg border border-white/10 bg-slate-900 p-5"
                >
                  <p className="text-sm font-medium text-slate-400">{fact.label}</p>
                  <p className="mt-2 text-2xl font-bold text-white">
                    {fact.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {fact.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">
                  Latest
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
                  Announcements and build notices
                </h2>
              </div>
              <Link
                href="/announcements"
                className="inline-flex w-fit items-center gap-2 text-sm font-bold text-amber-300"
              >
                View all
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {announcements.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-white/10 bg-slate-950 p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <StatusPill>{item.category}</StatusPill>
                    <span className="text-xs font-medium text-slate-400">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {programAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <div
                    key={area.name}
                    className="flex items-center gap-3 rounded-lg bg-slate-900 p-4 ring-1 ring-white/10"
                  >
                    <Icon size={19} className="text-amber-300" aria-hidden="true" />
                    <span className="text-sm font-semibold text-slate-200">
                      {area.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-900">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">
                  Source Notes
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
                  Public details gathered for the first build
                </h2>
                <p className="mt-4 leading-7 text-slate-300">
                  The site uses public references for general barangay profile
                  facts and leaves operational details for local confirmation.
                </p>
              </div>
              <div className="grid gap-4">
                {sourceNotes.map((source) => (
                  <a
                    key={source.href}
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-white/10 bg-slate-950 p-5 transition hover:border-amber-300/70"
                  >
                    <span className="flex items-center gap-2 font-bold text-white">
                      {source.name}
                      <ExternalLink size={15} aria-hidden="true" />
                    </span>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {source.note}
                    </p>
                  </a>
                ))}
                <div className="flex gap-3 rounded-lg bg-emerald-50 p-5 text-emerald-950">
                  <CheckCircle2 className="mt-1 shrink-0" size={20} aria-hidden="true" />
                  <p className="text-sm leading-6">
                    La Castellana is a landlocked municipality with 13
                    barangays, and Biaknabato is listed as one of them. The
                    public profile also places the community within the larger
                    Kanlaon foothill context.
                  </p>
                </div>
                <div className="flex gap-3 rounded-lg bg-amber-50 p-5 text-amber-950">
                  <MapPin className="mt-1 shrink-0" size={20} aria-hidden="true" />
                  <p className="text-sm leading-6">
                    Map pins and boundaries should be checked locally before
                    publication, especially if the site later supports incident
                    reports by purok or sitio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
