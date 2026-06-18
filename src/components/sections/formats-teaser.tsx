import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { FormatCard } from "@/components/format-card";
import { FORMATS } from "@/lib/site";

export function FormatsTeaser() {
  const featured = FORMATS.slice(0, 4);

  return (
    <section id="formatos" className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Tienda de formatos"
            title="Formatos estandarizados, listos para cumplir"
            description="Plantillas actualizadas según la normatividad vigente. Descárgalas, diligéncialas y da cumplimiento sin empezar de cero."
          />
          <Reveal delay={0.1}>
            <Button href="/formatos" variant="outline" className="shrink-0">
              Ver todos los formatos
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((format, i) => (
            <Reveal key={format.slug} delay={i * 0.08} className="h-full">
              <FormatCard format={format} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
