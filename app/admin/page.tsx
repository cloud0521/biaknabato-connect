import type { Metadata } from "next";
import { SiteHeader } from "@/app/components/site-shell";
import { AdminDashboard } from "@/app/admin/admin-dashboard";
import { AdminLogoutButton, AdminShell } from "@/app/admin/admin-shell";

export const metadata: Metadata = {
  title: "Admin",
};

export default function AdminPage() {
  return (
    <AdminShell>
      <SiteHeader mode="admin" />
      <main>
        <section className="border-b border-white/10 bg-slate-950 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">
                Staff workspace
              </p>
              <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Admin transaction desk
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                A local prototype for tracking service requests, concern
                reports, priorities, status changes, and staff notes before the
                real database and authentication layer are added.
              </p>
            </div>
            <AdminLogoutButton />
          </div>
        </section>
        <AdminDashboard />
      </main>
    </AdminShell>
  );
}
