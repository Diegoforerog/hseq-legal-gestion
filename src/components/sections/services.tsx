import {
  Video,
  Handshake,
  FileSignature,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { MAIN_SERVICES, type MainService } from "@/lib/site";

const ICONS: Record<string, LucideIcon> = {
  "asesoria-legal-virtual": Video,
  "asesoria-implementacion": Handshake,
  "concepto-legal": FileSignature,
};

function ServiceCard({ service, index }: { service: MainService; index: number }) {
  const Icon = ICONS[service.slug] ?? Video;
  const featured = service.slug === "concepto-legal";

  return (
    <Reveal delay={index * 0.1} className="h-full">
      <article
        className={
          "group flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 " +
          (featured
            ? "border-navy bg-navy text-white shadow-lift"
            : "border-hairline bg-white shadow-soft hover:shadow-lift")
        }
      >
        <div className="flex items-center justify-between">
          <div
            className={
              "flex h-12 w-12 items-center justify-center rounded-xl " +
              (featured ? "bg-green text-white" : "bg-sky-soft text-royal")
            }
          >
            <Icon className="h-6 w-6" />
          </div>
          {service.highlight && (
            <span className="rounded-full bg-green-bright/15 px-3 py-1 text-xs font-semibold text-green-bright">
              {service.highlight}
            </span>
          )}
        </div>

        <p
          className={
            "mt-5 text-xs font-semibold uppercase tracking-[0.14em] " +
            (featured ? "text-white/55" : "text-stone")
          }
        >
          {service.modality}
        </p>
        <h3
          className={
            "mt-2 font-display text-2xl " + (featured ? "text-white" : "")
          }
        >
          {service.name}
        </h3>
        <p
          className={
            "mt-3 text-sm leading-relaxed " +
            (featured ? "text-white/70" : "text-ink/65")
          }
        >
          {service.description}
        </p>

        <ul className="mt-6 space-y-3">
          {service.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm">
              <span
                className={
                  "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full " +
                  (featured
                    ? "bg-green-bright/20 text-green-bright"
                    : "bg-green-soft text-green")
                }
              >
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span className={featured ? "text-white/85" : "text-ink/75"}>
                {f}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-7 pt-2">
          <Button
            href={service.scheduling ? "/agendar" : "/concepto-legal"}
            variant={featured ? "accent" : "outline"}
            className="w-full"
          >
            {service.scheduling ? "Agendar" : "Solicitar concepto"}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </article>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="servicios" className="bg-mist py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Servicios con agendamiento"
          title="Asesoría experta, cuando la necesitas"
          description="Reserva una sesión que queda confirmada por calendario, con copia a nuestros asesores legales — o solicita un concepto por escrito."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {MAIN_SERVICES.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
