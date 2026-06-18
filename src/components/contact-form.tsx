"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";
import { cn, waLink } from "@/lib/utils";

const inputClass =
  "w-full rounded-xl border border-hairline bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-stone-light focus:border-royal focus:ring-2 focus:ring-royal/15";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const text = [
    "Mensaje desde la web — HSEQ Legal y Gestión",
    `• Nombre: ${name}`,
    `• Correo: ${email}`,
    "",
    message,
  ].join("\n");

  if (sent) {
    return (
      <div className="rounded-3xl border border-hairline bg-white p-8 text-center shadow-soft">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-soft text-green">
          <Check className="h-7 w-7" strokeWidth={2.5} />
        </div>
        <h3 className="mt-4 font-display text-xl">¡Gracias por escribirnos!</h3>
        <p className="mt-2 text-sm text-ink/65">
          Envía tu mensaje para que te respondamos cuanto antes.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={waLink(text)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 font-semibold text-white"
          >
            Enviar por WhatsApp
          </a>
          <a
            href={`mailto:contacto@hseqlegalygestion.com?subject=${encodeURIComponent(
              "Contacto web"
            )}&body=${encodeURIComponent(text)}`}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-navy/20 px-6 font-semibold text-navy hover:bg-navy/5"
          >
            Enviar por correo
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-3xl border border-hairline bg-white p-6 shadow-soft sm:p-8"
    >
      <div className="space-y-4">
        <input
          className={inputClass}
          placeholder="Nombre completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className={inputClass}
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          className={cn(inputClass, "min-h-32 resize-y")}
          placeholder="¿En qué podemos ayudarte?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-navy px-8 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-soft"
      >
        <Send className="h-4 w-4" />
        Enviar mensaje
      </button>
    </form>
  );
}
