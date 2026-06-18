import { Scale, HardHat, Leaf, BadgeCheck, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { PILLARS, type Pillar } from "@/lib/site";

const ICONS: Record<Pillar["key"], LucideIcon> = {
  legal: Scale,
  sst: HardHat,
  ambiente: Leaf,
  calidad: BadgeCheck,
};

export function Pillars() {
  return (
    <section id="pilares" className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Las 4 dimensiones HSEQ"
          title="Un solo aliado para todo tu cumplimiento"
          description="Integramos lo legal, lo humano, lo ambiental y lo operativo en un mismo sistema de gestión."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => {
            const Icon = ICONS[pillar.key];
            return (
              <Reveal key={pillar.key} delay={i * 0.08}>
                <article
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-mist p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                  style={{ ["--accent" as string]: pillar.color }}
                >
                  {/* Barra de acento superior */}
                  <span
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                    style={{ background: "var(--accent)" }}
                  />
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                    style={{ background: "var(--accent)" }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl">{pillar.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {pillar.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
