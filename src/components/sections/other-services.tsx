import {
  ClipboardCheck,
  Search,
  FolderCog,
  HeartPulse,
  Siren,
  Brain,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { OTHER_SERVICES } from "@/lib/site";

const ICONS: LucideIcon[] = [
  ClipboardCheck,
  Search,
  FolderCog,
  HeartPulse,
  Siren,
  Brain,
];

export function OtherServices() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Acompañamiento integral"
          title="Más servicios para tu sistema de gestión"
          description="Diseñamos, implementamos y auditamos cada componente de tu operación HSEQ."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OTHER_SERVICES.map((service, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={service.title} delay={(i % 3) * 0.08}>
                <article className="group flex h-full items-start gap-4 rounded-2xl border border-hairline bg-mist p-6 transition-all duration-300 hover:border-royal/30 hover:bg-white hover:shadow-soft">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-royal ring-1 ring-hairline transition-colors group-hover:bg-royal group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                      {service.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
