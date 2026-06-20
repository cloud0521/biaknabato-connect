import type { Metadata } from "next";
import { Megaphone } from "lucide-react";
import {
  PageIntro,
  SiteFooter,
  SiteHeader,
  StatusPill,
} from "@/app/components/site-shell";
import { announcements } from "@/app/lib/site-data";

export const metadata: Metadata = {
  title: "Announcements",
};

export default function AnnouncementsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Public notices"
          title="Announcements"
          description="A structured place for advisories, barangay notices, program updates, and urgent community information."
          action={{ label: "Report a concern", href: "/report" }}
        />
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-4">
            {announcements.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-slate-200 bg-white p-6"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <StatusPill>{item.category}</StatusPill>
                  <span className="text-sm font-medium text-slate-500">
                    {item.date}
                  </span>
                </div>
                <div className="mt-5 flex gap-4">
                  <Megaphone
                    className="mt-1 shrink-0 text-emerald-800"
                    size={22}
                    aria-hidden="true"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-slate-950">
                      {item.title}
                    </h2>
                    <p className="mt-3 leading-7 text-slate-600">
                      {item.summary}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

