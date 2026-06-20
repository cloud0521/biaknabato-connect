import type { Metadata } from "next";
import { Send, ShieldAlert } from "lucide-react";
import {
  PageIntro,
  SiteFooter,
  SiteHeader,
} from "@/app/components/site-shell";
import { officialContact } from "@/app/lib/site-data";

export const metadata: Metadata = {
  title: "Report a Concern",
};

const concernTypes = [
  "Road or drainage",
  "Waste or sanitation",
  "Peace and order",
  "Health assistance",
  "Disaster risk",
  "Public service request",
];

export default function ReportPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Resident intake"
          title="Report a concern"
          description="A prepared local form UI for routing barangay concerns. Submission storage will be added later when backend and admin decisions are final."
        />
        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <aside className="h-fit rounded-lg border border-amber-200 bg-amber-50 p-6 text-amber-950">
            <ShieldAlert size={26} aria-hidden="true" />
            <h2 className="mt-4 text-xl font-bold">Emergency note</h2>
            <p className="mt-3 text-sm leading-6">
              This form is not yet connected to a live backend. For urgent or
              life-threatening emergencies, use confirmed emergency hotlines and
              direct barangay channels. Barangay office hours are{" "}
              {officialContact.officeHours}.
            </p>
          </aside>
          <form className="rounded-lg border border-slate-200 bg-white p-6">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Full name
                <input
                  className="rounded-md border border-slate-300 px-3 py-3 font-normal outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                  placeholder="Juan Dela Cruz"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Contact number
                <input
                  className="rounded-md border border-slate-300 px-3 py-3 font-normal outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                  placeholder="09XX XXX XXXX"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Concern type
                <select className="rounded-md border border-slate-300 px-3 py-3 font-normal outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100">
                  {concernTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Location / purok / sitio
                <input
                  className="rounded-md border border-slate-300 px-3 py-3 font-normal outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                  placeholder="Purok, sitio, or near the public plaza"
                />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
              Message
              <textarea
                rows={6}
                className="resize-none rounded-md border border-slate-300 px-3 py-3 font-normal outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                placeholder="Describe the concern, urgency, and any details that can help staff route it."
              />
            </label>
            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-emerald-800 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
            >
              <Send size={16} aria-hidden="true" />
              Preview submission
            </button>
          </form>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
