import { CalendarCheck, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { waLink, WHATSAPP_DISPLAY } from "@/lib/utils";

export function ClosingCta() {
  return (
    <section className="bg-white pb-24 pt-4">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy px-7 py-14 text-center text-white sm:px-12 lg:py-20">
            <div className="glow -left-10 top-0 h-64 w-64 bg-royal/40" />
            <div className="glow bottom-0 right-0 h-64 w-64 bg-green/30" />
            <div className="absolute inset-0 bg-grid opacity-[0.12]" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <span className="eyebrow justify-center text-green-bright">
                <span className="h-px w-6 bg-green-bright" />
                Da el primer paso
              </span>
              <h2 className="mt-5 text-3xl text-white sm:text-4xl lg:text-5xl">
                Pongamos tu empresa al día con la ley
              </h2>
              <p className="mt-5 text-lg text-white/75">
                Agenda una asesoría o escríbenos por WhatsApp. Te respondemos con
                la claridad y el respaldo legal que tu operación necesita.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/agendar" variant="accent" size="lg">
                  <CalendarCheck className="h-5 w-5" />
                  Agendar asesoría
                </Button>
                <Button href={waLink()} variant="white" size="lg" external>
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp {WHATSAPP_DISPLAY}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
