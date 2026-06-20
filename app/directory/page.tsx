import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import {
  PageIntro,
  SiteFooter,
  SiteHeader,
  StatusPill,
} from "@/app/components/site-shell";
import { directory, officialContact } from "@/app/lib/site-data";

export const metadata: Metadata = {
  title: "Directory",
};

export default function DirectoryPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Contacts"
          title="Directory and emergency desk"
          description="A scan-friendly contact page for barangay office, health, public safety, and community program coordination. Numbers are placeholders until confirmed."
          action={{ label: "Report a concern", href: "/report" }}
        />
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
            Barangay office: {officialContact.officeLocation}. Regular hours:
            {" "}
            {officialContact.officeHours}. For life-threatening emergencies,
            residents should use confirmed emergency hotlines directly.
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {directory.map((entry) => {
              const Icon = entry.icon;
              return (
                <article
                  key={entry.name}
                  className="rounded-lg border border-slate-200 bg-white p-6"
                >
                  <Icon className="text-emerald-800" size={26} aria-hidden="true" />
                  <h2 className="mt-5 text-2xl font-bold text-slate-950">
                    {entry.name}
                  </h2>
                  <p className="mt-2 text-slate-600">{entry.role}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <StatusPill>{entry.contact}</StatusPill>
                    <StatusPill>{entry.hours}</StatusPill>
                  </div>
                  {entry.name === "Community Programs" ? (
                    <a
                      href={officialContact.facebookUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-800"
                    >
                      Open Facebook page
                      <ExternalLink size={15} aria-hidden="true" />
                    </a>
                  ) : null}
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
