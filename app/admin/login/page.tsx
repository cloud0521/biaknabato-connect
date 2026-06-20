import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { LoginForm } from "@/app/admin/login/login-form";

export const metadata: Metadata = {
  title: "Admin Login",
};

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md flex-col justify-center">
        <Link
          href="/"
          className="mb-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to public site
        </Link>
        <section className="rounded-lg border border-white/10 bg-slate-900 p-6 shadow-2xl shadow-black/30">
          <div className="grid size-12 place-items-center rounded-lg bg-amber-400 text-slate-950">
            <ShieldCheck size={24} aria-hidden="true" />
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-amber-300">
            Staff access
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight">
            Admin login
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Enter the local admin passcode to open the transaction desk. This is
            a prototype login until full staff accounts are added.
          </p>
          <LoginForm />
          <p className="mt-5 text-xs leading-5 text-slate-500">
            Local default passcode: biaknabato-admin. Set ADMIN_PASSCODE in
            `.env.local` before sharing this outside your machine.
          </p>
        </section>
      </div>
    </main>
  );
}

