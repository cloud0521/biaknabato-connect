import Image from "next/image";

export function CertificatePreviewHeader() {
  return (
    <div className="border-b border-slate-500 pb-5">
      <div className="grid grid-cols-[88px_1fr_88px] items-center gap-5">
        <div className="relative mx-auto size-20 overflow-hidden rounded-full bg-white">
          <Image
            src="/seal-biaknabato.png"
            alt="Barangay Biaknabato seal"
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
        <div className="text-center font-serif font-bold uppercase leading-tight text-slate-950">
          <p className="text-[12px]">Republic of the Philippines</p>
          <p className="text-[12px]">Municipality of La Castellana</p>
          <p className="text-[12px]">Province of Negros Occidental</p>
          <p className="text-[12px]">Barangay Biaknabato</p>
          <p className="text-[12px] italic normal-case">
            Office of the Punong Barangay
          </p>
        </div>
        <div className="relative mx-auto size-20 overflow-hidden rounded-full bg-white">
          <Image
            src="/seal-lacastellana.png"
            alt="Municipality of La Castellana seal"
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
