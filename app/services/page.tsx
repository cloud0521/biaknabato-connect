import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  PageIntro,
  SiteFooter,
  SiteHeader,
  StatusPill,
} from "@/app/components/site-shell";
import { services } from "@/app/lib/site-data";

const mostUsedTransactions = [
  {
    label: "Request Barangay Clearance",
    href: "/services/barangay-clearance",
  },
  {
    label: "Request Certificate of Residency",
    href: "/services/certificate-of-residency",
  },
  {
    label: "Request Certificate of Indigency",
    href: "/services/certificate-of-indigency",
  },
];

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Resident assistance"
          title="Barangay services"
          description="A first-pass service guide for residents. These cards are ready for official requirements, fees, processing time, and office contacts."
          action={{ label: "Start a concern report", href: "/report" }}
        />
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-800">
              Most used transactions
            </p>
            <div className="mt-4 grid gap-3 lg:grid-cols-3">
              {mostUsedTransactions.map((transaction) => (
                <Link
                  key={transaction.href}
                  href={transaction.href}
                  className="inline-flex min-h-14 items-center justify-center rounded-md border border-slate-200 bg-slate-950 px-5 py-3 text-center text-base font-extrabold text-white shadow-sm transition hover:border-amber-300 hover:bg-slate-900 hover:text-amber-200"
                >
                  {transaction.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="rounded-lg border border-slate-200 bg-white p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="text-emerald-800" size={26} aria-hidden="true" />
                    <StatusPill>{service.status}</StatusPill>
                  </div>
                  <h2 className="mt-5 text-2xl font-bold text-slate-950">
                    {service.title}
                  </h2>
                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                  <div className="mt-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                      Starter requirements
                    </h3>
                    <ul className="mt-3 grid gap-2">
                      {service.requirements.map((requirement) => (
                        <li
                          key={requirement}
                          className="rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-700"
                        >
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-2 rounded-md bg-emerald-800 px-4 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
                  >
                    {service.title === "Barangay Clearance"
                      ? "Start request"
                      : "View details"}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
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
