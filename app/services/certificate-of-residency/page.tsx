import type { Metadata } from "next";
import {
  PageIntro,
  SiteFooter,
  SiteHeader,
} from "@/app/components/site-shell";
import { CertificateRequestForm } from "@/app/services/certificate-request-form";

export const metadata: Metadata = {
  title: "Certificate of Residency Request",
};

export default function CertificateOfResidencyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Certificate request"
          title="Request certificate of residency"
          description="Fill in the resident information needed to prepare a certificate of residency for barangay verification."
          action={{ label: "Office directory", href: "/directory" }}
        />
        <CertificateRequestForm kind="residency" />
      </main>
      <SiteFooter />
    </>
  );
}

