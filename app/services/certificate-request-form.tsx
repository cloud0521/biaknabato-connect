"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, FileText, Send } from "lucide-react";
import { CertificatePreviewHeader } from "@/app/components/certificate-preview";
import { officialContact } from "@/app/lib/site-data";

type CertificateKind = "residency" | "indigency";

type CertificateRequest = {
  fullName: string;
  civilStatus: string;
  purok: string;
  barangayAddress: string;
  residencyLength: string;
  purpose: string;
  contactNo: string;
};

const initialRequest: CertificateRequest = {
  fullName: "",
  civilStatus: "",
  purok: "",
  barangayAddress: "",
  residencyLength: "",
  purpose: "",
  contactNo: "",
};

const civilStatuses = ["Single", "Married", "Widowed", "Separated"];

const copy = {
  residency: {
    title: "Certificate of Residency",
    eyebrow: "Certificate request",
    formTitle: "Residency details",
    description:
      "Fill in the address, length of residency, and purpose shown in the residency certificate template.",
    previewTitle: "CERTIFICATE OF RESIDENCY",
    statement:
      "This is to certify that [Full Name], of legal age, Filipino citizen, is a bona fide resident of [Address], Biaknabato, La Castellana, Negros Occidental for [Length] years.",
    purpose:
      "This certification is issued upon request of the above-named person for the purpose of [Purpose].",
  },
  indigency: {
    title: "Certificate of Indigency",
    eyebrow: "Certificate request",
    formTitle: "Indigency details",
    description:
      "Fill in the resident address and purpose shown in the indigency certificate template.",
    previewTitle: "CERTIFICATE OF INDIGENCY",
    statement:
      "This is to certify that [Full Name], of legal age, Filipino citizen, a bona fide resident of [Address], Biaknabato, La Castellana, Negros Occidental, is known to me to be a person of good moral character and belongs to an INDIGENT FAMILY in this Barangay.",
    purpose:
      "This certification is issued upon request of the above-named person for the purpose of [Purpose].",
  },
};

function fillTemplate(template: string, request: CertificateRequest) {
  return template
    .replace("[Full Name]", request.fullName.trim() || "[Full Name]")
    .replace("[Civil Status]", request.civilStatus.trim() || "[Civil Status]")
    .replace("[Purok / Sitio]", request.purok.trim() || "[Purok / Sitio]")
    .replace(
      "[Resident's Barangay Address]",
      request.barangayAddress.trim() || "[Resident's Barangay Address]",
    )
    .replace("[Address]", request.barangayAddress.trim() || "[Address]")
    .replace("[Length]", request.residencyLength.trim() || "[Length]")
    .replace("[Purpose]", request.purpose.trim() || "[Purpose]");
}

export function CertificateRequestForm({ kind }: { kind: CertificateKind }) {
  const [request, setRequest] = useState(initialRequest);
  const [submitted, setSubmitted] = useState(false);
  const [validIdFile, setValidIdFile] = useState("");
  const labels = copy[kind];
  const isResidency = kind === "residency";
  const isIndigency = kind === "indigency";

  const preview = useMemo(
    () => ({
      statement: fillTemplate(labels.statement, request),
      purpose: fillTemplate(labels.purpose, request),
    }),
    [labels, request],
  );

  function updateField(field: keyof CertificateRequest, value: string) {
    setSubmitted(false);
    setRequest((current) => ({ ...current, [field]: value }));
  }

  return (
    <section className="bg-slate-900">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <form
          className="rounded-lg border border-white/10 bg-slate-950 p-6"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="flex items-center gap-3">
            <FileText className="text-amber-300" size={24} aria-hidden="true" />
            <div>
              <h2 className="text-2xl font-bold text-white">{labels.formTitle}</h2>
              <p className="mt-1 text-sm text-slate-400">{labels.description}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-5">
            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              Full name
              <input
                required
                value={request.fullName}
                onChange={(event) => updateField("fullName", event.target.value)}
                className="h-12 rounded-md border border-white/10 bg-slate-900 px-3 text-white outline-none transition focus:border-amber-300"
                placeholder="Juan Dela Cruz"
              />
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              {isResidency ? (
                <label className="grid gap-2 text-sm font-semibold text-slate-200">
                  Length of residency
                  <input
                    required
                    value={request.residencyLength}
                    onChange={(event) =>
                      updateField("residencyLength", event.target.value)
                    }
                    className="h-12 rounded-md border border-white/10 bg-slate-900 px-3 text-white outline-none transition focus:border-amber-300"
                    placeholder="5"
                  />
                </label>
              ) : isIndigency ? null : (
                <label className="grid gap-2 text-sm font-semibold text-slate-200">
                  Civil status
                  <select
                    required
                    value={request.civilStatus}
                    onChange={(event) =>
                      updateField("civilStatus", event.target.value)
                    }
                    className="h-12 rounded-md border border-white/10 bg-slate-900 px-3 text-white outline-none transition focus:border-amber-300"
                  >
                    <option value="">Select status</option>
                    {civilStatuses.map((status) => (
                      <option key={status}>{status}</option>
                    ))}
                  </select>
                </label>
              )}

              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Contact number
                <input
                  required
                  value={request.contactNo}
                  onChange={(event) => updateField("contactNo", event.target.value)}
                  className="h-12 rounded-md border border-white/10 bg-slate-900 px-3 text-white outline-none transition focus:border-amber-300"
                  placeholder="09XX XXX XXXX"
                />
              </label>
            </div>

            {isResidency || isIndigency ? null : (
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Purok / Sitio
                <input
                  required
                  value={request.purok}
                  onChange={(event) => updateField("purok", event.target.value)}
                  className="h-12 rounded-md border border-white/10 bg-slate-900 px-3 text-white outline-none transition focus:border-amber-300"
                  placeholder="Purok 2"
                />
              </label>
            )}

            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              {isResidency || isIndigency
                ? "Address"
                : "Resident's barangay address"}
              <input
                required
                value={request.barangayAddress}
                onChange={(event) =>
                  updateField("barangayAddress", event.target.value)
                }
                className="h-12 rounded-md border border-white/10 bg-slate-900 px-3 text-white outline-none transition focus:border-amber-300"
                placeholder={
                  isResidency || isIndigency
                    ? "Purok 2"
                    : "Barangay Biaknabato, La Castellana"
                }
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              Purpose
              <textarea
                required
                rows={4}
                value={request.purpose}
                onChange={(event) => updateField("purpose", event.target.value)}
                className="resize-none rounded-md border border-white/10 bg-slate-900 px-3 py-3 text-white outline-none transition focus:border-amber-300"
                placeholder="School requirement, medical assistance, financial assistance, etc."
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              Valid ID for verification
              <input
                required
                type="file"
                accept="image/*,.pdf"
                onChange={(event) => {
                  setSubmitted(false);
                  setValidIdFile(event.target.files?.[0]?.name ?? "");
                }}
                className="rounded-md border border-dashed border-white/20 bg-slate-900 px-3 py-3 text-sm text-slate-300 file:mr-4 file:rounded-md file:border-0 file:bg-amber-400 file:px-3 file:py-2 file:text-sm file:font-bold file:text-slate-950 hover:file:bg-amber-300"
              />
              <span className="text-xs font-normal leading-5 text-slate-400">
                Upload a clear photo or PDF of a valid ID. Staff will use this
                to verify details before printing.
              </span>
              {validIdFile ? (
                <span className="text-xs font-semibold text-emerald-300">
                  Selected: {validIdFile}
                </span>
              ) : null}
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
          >
            <Send size={16} aria-hidden="true" />
            Review request
          </button>

          {submitted ? (
            <div className="mt-5 flex gap-3 rounded-lg border border-emerald-300/30 bg-emerald-300/10 p-4 text-sm leading-6 text-emerald-100">
              <CheckCircle2 className="mt-0.5 shrink-0" size={18} aria-hidden="true" />
              <p>
                Request details and valid ID are ready for staff review. The
                admin can verify details before printing once backend submission
                is connected.
              </p>
            </div>
          ) : null}
        </form>

        <aside className="rounded-lg border border-white/10 bg-slate-950 p-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">
            Certificate preview
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white">{labels.title}</h2>
          <div className="relative mt-6 aspect-[210/297] overflow-hidden rounded-sm border border-slate-300 bg-white p-[5%] font-serif text-slate-950 shadow-sm">
            <div className="space-y-[3%]">
              <CertificatePreviewHeader />
              <h3 className="my-[30px] mb-[50px] text-center font-sans text-[1.8em] font-bold tracking-[1px] text-slate-900">
                {labels.previewTitle}
              </h3>
              <p className="text-[12px] font-bold uppercase leading-5">
                To Whom It May Concern:
              </p>
              <p className="text-justify text-[12px] leading-5 indent-12">
                {preview.statement}
              </p>
              <p className="text-justify text-[12px] leading-5 indent-12">
                {preview.purpose}
              </p>
              {isResidency || isIndigency ? (
                <p className="text-justify text-[12px] leading-5 indent-12">
                  Issued this 17th day of June, 2026 at the Office of the Punong
                  Barangay, Biaknabato, La Castellana, Negros Occidental,
                  Philippines.
                </p>
              ) : null}
            </div>
            <div className="absolute bottom-[14%] right-[5%] w-64 text-center text-sm leading-5">
              <p className="border-t border-slate-950 pt-1 font-bold text-[12px]">
                {isIndigency
                  ? "[Your Barangay Captain's Full Name]"
                  : "[Punong Barangay Name]"}
              </p>
              <p className="text-[12px]">Punong Barangay</p>
            </div>
            <div className="absolute bottom-[5%] left-[5%] grid gap-0.5 text-[11px] leading-4">
              <span>O.R. No.: To be encoded by staff</span>
              <span>Fees: To be confirmed</span>
              <span>Place Issued: Barangay Biaknabato</span>
            </div>
          </div>

          <div className="mt-5 rounded-lg border border-amber-300/30 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100">
            Bring valid ID and supporting documents to the barangay office at{" "}
            {officialContact.officeLocation}. Office hours are{" "}
            {officialContact.officeHours}.
          </div>
        </aside>
      </div>
    </section>
  );
}
