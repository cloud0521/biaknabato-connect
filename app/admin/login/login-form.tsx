"use client";

import { useActionState } from "react";
import { LockKeyhole } from "lucide-react";
import { loginAdmin, type LoginState } from "@/app/admin/actions";

const initialState: LoginState = {
  message: "",
};

export function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAdmin, initialState);

  return (
    <form action={formAction} className="mt-8 grid gap-5">
      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        Admin passcode
        <input
          name="passcode"
          type="password"
          required
          className="h-12 rounded-md border border-white/10 bg-slate-900 px-3 text-white outline-none transition focus:border-amber-300"
          placeholder="Enter admin passcode"
        />
      </label>
      {state.message ? (
        <p className="rounded-md border border-red-400/30 bg-red-400/10 px-3 py-2 text-sm text-red-100">
          {state.message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-amber-400 px-4 text-sm font-bold text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <LockKeyhole size={17} aria-hidden="true" />
        {pending ? "Checking..." : "Sign in"}
      </button>
    </form>
  );
}

