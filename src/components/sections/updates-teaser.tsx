import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { UpdateCard } from "@/components/update-card";
import { UPDATES } from "@/lib/site";

export function UpdatesTeaser() {
  const latest = UPDATES.slice(0, 3);

  return (
    <section id="actualizaciones" className="bg-mist py-20 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Actualizaciones legales"
            title="Normatividad al día, explicada claro"
            description="Publicamos los cambios normativos en SST, ambiente y calidad — y qué significan para tu empresa."
          />
          <Reveal delay={0.1}>
            <Button href="/actualizaciones" variant="outline" className="shrink-0">
              Ver todas
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {latest.map((update, i) => (
            <Reveal key={update.slug} delay={i * 0.08} className="h-full">
              <UpdateCard update={update} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
