import type { Metadata } from "next";
import {
  PageIntro,
  SiteFooter,
  SiteHeader,
} from "@/app/components/site-shell";
import { CertificateRequestForm } from "@/app/services/certificate-request-form";

export const metadata: Metadata = {
  title: "Certificate of Indigency Request",
};

export default function CertificateOfIndigencyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Certificate request"
          title="Request certificate of indigency"
          description="Fill in the resident information needed to prepare a certificate of indigency for barangay verification."
          action={{ label: "Office directory", href: "/directory" }}
        />
        <CertificateRequestForm kind="indigency" />
      </main>
      <SiteFooter />
    </>
  );
}

