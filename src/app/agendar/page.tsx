import type { Metadata } from "next";
import { CalendarCheck, Users, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { BookingForm } from "@/components/booking-form";

export const metadata: Metadata = {
  title: "Agendar asesoría",
  description:
    "Agenda tu asesoría legal virtual o de implementación. Teams, Zoom o presencial, confirmada por calendario con copia a los asesores legales.",
};

const PERKS = [
  {
    icon: CalendarCheck,
    title: "Confirmada por calendario",
    text: "Recibes la invitación con el enlace o la dirección de la sesión.",
  },
  {
    icon: Users,
    title: "Con los asesores correctos",
    text: "Tu solicitud llega con copia a nuestro equipo legal especializado.",
  },
  {
    icon: ShieldCheck,
    title: "Sin compromiso",
    text: "Cuéntanos tu caso; definimos juntos el alcance de la asesoría.",
  },
];

export default function AgendarPage() {
  return (
    <>
      <PageHeader
        eyebrow="Agendamiento"
        title="Reserva tu asesoría en minutos"
        description="Elige el servicio, la modalidad y el horario que más te convenga. Nosotros confirmamos la cita y la dejamos en el calendario."
      />

      <section className="bg-white py-14 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <aside className="space-y-5">
            {PERKS.map((perk) => {
              const Icon = perk.icon;
              return (
                <div
                  key={perk.title}
                  className="flex items-start gap-4 rounded-2xl border border-hairline bg-mist p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-royal ring-1 ring-hairline">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg">{perk.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">
                      {perk.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </aside>

          <BookingForm />
        </div>
      </section>
    </>
  );
}
