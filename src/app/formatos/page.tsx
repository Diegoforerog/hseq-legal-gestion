import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { FormatsBrowser } from "@/components/formats-browser";

export const metadata: Metadata = {
  title: "Formatos estandarizados SST, ambiente y calidad",
  description:
    "Tienda de formatos y plantillas actualizadas según la normatividad colombiana. Descárgalas, diligéncialas y da cumplimiento sin empezar de cero.",
};

export default function FormatosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tienda de formatos"
        title="Formatos listos para cumplir la norma"
        description="Plantillas estandarizadas y actualizadas en SST, requisitos legales, ambiente y calidad. Vista previa, descarga y a diligenciar."
      />
      <section className="bg-white py-14 lg:py-20">
        <div className="container-page">
          <FormatsBrowser />
        </div>
      </section>
    </>
  );
}
