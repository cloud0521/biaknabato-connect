import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_VALUE,
} from "@/app/lib/admin-auth-constants";

export { ADMIN_SESSION_COOKIE, ADMIN_SESSION_VALUE };

export async function hasAdminSession() {
  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_SESSION_COOKIE)?.value === ADMIN_SESSION_VALUE;
}

export async function requireAdminSession() {
  const authenticated = await hasAdminSession();

  if (!authenticated) {
    redirect("/admin/login");
  }
}

export function getAdminPasscode() {
  return process.env.ADMIN_PASSCODE ?? "biaknabato-admin";
}
