import type { Metadata } from "next";
import { MessageCircle, Mail, MapPin, Bot } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { waLink, WHATSAPP_DISPLAY } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escríbenos por WhatsApp, correo o el formulario. Atención presencial y virtual en toda Colombia.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title="Hablemos de tu cumplimiento"
        description="Estamos a un mensaje de distancia. Escríbenos y te respondemos con la claridad y el respaldo que tu empresa necesita."
      />

      <section className="bg-white py-14 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Datos de contacto */}
          <div className="space-y-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-hairline bg-mist p-6 transition-all hover:border-green/40 hover:bg-white"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white">
                <MessageCircle className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg">WhatsApp</h3>
                <p className="text-sm text-ink/65">{WHATSAPP_DISPLAY}</p>
                <p className="mt-1 text-sm font-medium text-green">
                  Chatea con nosotros →
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-hairline bg-mist p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-royal ring-1 ring-hairline">
                <Mail className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg">Correo</h3>
                <p className="text-sm text-ink/65">
                  contacto@hseqlegalygestion.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-hairline bg-mist p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-stone ring-1 ring-hairline">
                <MapPin className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg">Cobertura</h3>
                <p className="text-sm text-ink/65">
                  Colombia · Atención presencial y virtual
                </p>
              </div>
            </div>

            {/* Nota ChatBot */}
            <div className="flex items-start gap-4 rounded-2xl border border-royal/20 bg-sky-soft/40 p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-royal text-white">
                <Bot className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg">Respuesta inmediata</h3>
                <p className="text-sm text-ink/65">
                  Nuestro asistente de WhatsApp te orienta al instante, cualquier
                  día y a cualquier hora.
                </p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
