import type { Metadata } from "next";
import { CalendarDays, MapPin } from "lucide-react";
import {
  PageIntro,
  SiteFooter,
  SiteHeader,
  StatusPill,
} from "@/app/components/site-shell";
import { events } from "@/app/lib/site-data";

export const metadata: Metadata = {
  title: "Events",
};

export default function EventsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Programs calendar"
          title="Events and programs"
          description="A local calendar surface for assemblies, cleanup drives, health outreach, disaster preparedness briefings, and community activities."
        />
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {events.map((event) => (
              <article
                key={event.title}
                className="rounded-lg border border-slate-200 bg-white p-6"
              >
                <StatusPill>{event.type}</StatusPill>
                <h2 className="mt-5 text-2xl font-bold text-slate-950">
                  {event.title}
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  {event.description}
                </p>
                <div className="mt-6 grid gap-3 text-sm text-slate-700">
                  <span className="flex items-center gap-2">
                    <CalendarDays size={17} className="text-emerald-800" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={17} className="text-emerald-800" />
                    {event.location}
                  </span>
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

