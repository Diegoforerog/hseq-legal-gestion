import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Services } from "@/components/sections/services";
import { OtherServices } from "@/components/sections/other-services";
import { ClosingCta } from "@/components/sections/closing-cta";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Asesoría legal virtual, asesoría para implementación y concepto legal. Además: SG-SST, auditorías ISO, planes de emergencia, batería psicosocial y más.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Todo lo que tu empresa necesita para cumplir"
        description="Desde la asesoría puntual hasta el diseño completo de tu sistema de gestión. Elige cómo quieres que te acompañemos."
      />
      <Services />
      <OtherServices />
      <ClosingCta />
    </>
  );
}
