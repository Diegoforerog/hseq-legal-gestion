import type { Metadata } from "next";
import { FileText, Clock, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ConceptForm } from "@/components/concept-form";

export const metadata: Metadata = {
  title: "Concepto Legal",
  description:
    "Solicita un concepto legal especializado en SST, ambiente o calidad. Redacta los parámetros y tu consulta; recibe la respuesta por escrito en 5 días hábiles.",
};

const STEPS = [
  {
    icon: FileText,
    title: "Redactas tu consulta",
    text: "Defines los parámetros y la consulta específica que necesitas resolver.",
  },
  {
    icon: ShieldCheck,
    title: "La analiza un experto",
    text: "Nuestro equipo legal estudia el caso y elabora el concepto por escrito.",
  },
  {
    icon: Clock,
    title: "Respondemos en 5 días",
    text: "Recibes el concepto legal de forma virtual en máximo 5 días hábiles.",
  },
];

export default function ConceptoLegalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Concepto legal"
        title="Tu consulta, resuelta por escrito"
        description="Recibe un concepto legal especializado, elaborado por nuestro equipo y entregado de forma virtual en máximo 5 días hábiles."
      />

      <section className="bg-white py-14 lg:py-20">
        <div className="container-page">
          <div className="grid gap-4 sm:grid-cols-3">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative rounded-2xl border border-hairline bg-mist p-6"
                >
                  <span className="absolute right-5 top-5 font-display text-3xl text-navy/10">
                    {i + 1}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-royal ring-1 ring-hairline">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <ConceptForm />
          </div>
        </div>
      </section>
    </>
  );
}
