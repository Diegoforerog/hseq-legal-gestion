import type { Metadata } from "next";
import { Bell } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { UpdateCard } from "@/components/update-card";
import { Button } from "@/components/ui/button";
import { UPDATES } from "@/lib/site";
import { waLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Actualizaciones legales",
  description:
    "Cambios normativos en SST, ambiente y calidad explicados claro, y qué significan para tu empresa.",
};

export default function ActualizacionesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Actualizaciones legales"
        title="Normatividad al día, sin letra pequeña"
        description="Seguimos de cerca los cambios en Seguridad y Salud en el Trabajo, ambiente y calidad — y te contamos cómo aplicarlos."
      />

      <section className="bg-white py-14 lg:py-20">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {UPDATES.map((update, i) => (
              <Reveal key={update.slug} delay={(i % 3) * 0.08} className="h-full">
                <UpdateCard update={update} />
              </Reveal>
            ))}
          </div>

          {/* Suscripción */}
          <Reveal>
            <div className="mt-14 flex flex-col items-center gap-5 rounded-3xl border border-hairline bg-mist px-6 py-10 text-center sm:px-12">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-royal ring-1 ring-hairline">
                <Bell className="h-6 w-6" />
              </span>
              <h2 className="max-w-xl text-2xl sm:text-3xl">
                Recibe las actualizaciones antes que nadie
              </h2>
              <p className="max-w-lg text-ink/65">
                Te avisamos por WhatsApp cuando cambie una norma que afecta a tu
                empresa. Sin spam, solo lo que necesitas cumplir.
              </p>
              <Button href={waLink("Quiero recibir las actualizaciones legales de HSEQ.")} external>
                Quiero recibirlas
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
