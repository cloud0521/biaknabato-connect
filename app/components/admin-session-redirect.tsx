"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const adminSessionKey = "biaknabato_admin_session";

const publicPaths = [
  "/",
  "/about",
  "/announcements",
  "/directory",
  "/events",
  "/report",
  "/services",
];

export function AdminSessionRedirect() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const isPublicPath = publicPaths.some((path) => {
      if (path === "/") return pathname === "/";
      return pathname === path || pathname.startsWith(`${path}/`);
    });

    if (
      isPublicPath &&
      window.localStorage.getItem(adminSessionKey) === "active"
    ) {
      router.replace("/admin");
    }
  }, [pathname, router]);

  return null;
}
