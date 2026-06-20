"use client";

import { useEffect, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

const adminSessionKey = "biaknabato_admin_session";

export function AdminShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const authenticated = useAdminSession();

  useEffect(() => {
    if (!authenticated) {
      router.replace("/admin/login");
    }
  }, [authenticated, router]);

  if (!authenticated) {
    return (
      <main className="grid min-h-screen place-items-center bg-slate-950 px-4 text-center text-white">
        <p className="text-sm font-semibold text-slate-300">
          Checking demo admin access...
        </p>
      </main>
    );
  }

  return children;
}

function subscribeToAdminSession(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getAdminSessionSnapshot() {
  return window.localStorage.getItem(adminSessionKey) === "active";
}

function getServerAdminSessionSnapshot() {
  return false;
}

function useAdminSession() {
  return useSyncExternalStore(
    subscribeToAdminSession,
    getAdminSessionSnapshot,
    getServerAdminSessionSnapshot,
  );
}

export function AdminLogoutButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        window.localStorage.removeItem(adminSessionKey);
        router.push("/admin/login");
      }}
      className="inline-flex w-fit items-center gap-2 rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
    >
      <LogOut size={16} aria-hidden="true" />
      Log out
    </button>
  );
}
