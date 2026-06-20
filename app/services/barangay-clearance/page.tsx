import type { Metadata } from "next";
import {
  PageIntro,
  SiteFooter,
  SiteHeader,
} from "@/app/components/site-shell";
import { BarangayClearanceForm } from "@/app/services/barangay-clearance/request-form";

export const metadata: Metadata = {
  title: "Barangay Clearance Request",
};

export default function BarangayClearancePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Barangay clearance"
          title="Request barangay clearance"
          description="Fill in the details needed for the barangay clearance certificate. The office can use this information to prepare and verify the document before release."
          action={{ label: "Office directory", href: "/directory" }}
        />
        <BarangayClearanceForm />
      </main>
      <SiteFooter />
    </>
  );
}

