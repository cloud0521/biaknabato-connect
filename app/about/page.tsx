import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import {
  PageIntro,
  SiteFooter,
  SiteHeader,
} from "@/app/components/site-shell";
import { barangayFacts, sourceNotes } from "@/app/lib/site-data";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Barangay profile"
          title="About Biaknabato"
          description="A starter profile page for Barangay Biaknabato in the Municipality of La Castellana, Negros Occidental."
        />
        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-950">
              Local context
            </h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                Public references list Biaknabato as a rural barangay of La
                Castellana. The municipality is landlocked in Negros Occidental
                and is commonly described within the Mt. Kanlaon foothill area.
              </p>
              <p>
                The first version of this site is designed around practical
                resident needs: announcements, services, programs, emergency
                contacts, and concern reporting.
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {barangayFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-lg border border-slate-200 bg-white p-5"
              >
                <p className="text-sm text-slate-500">{fact.label}</p>
                <p className="mt-2 text-xl font-bold text-slate-950">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-950">Sources</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {sourceNotes.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-200 bg-white p-5 transition hover:border-emerald-300"
                >
                  <span className="flex items-center gap-2 font-bold text-slate-950">
                    {source.name}
                    <ExternalLink size={15} aria-hidden="true" />
                  </span>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {source.note}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

