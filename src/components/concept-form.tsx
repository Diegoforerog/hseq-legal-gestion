"use client";

import { useState } from "react";
import { Check, FileSignature, MessageCircle, Mail } from "lucide-react";
import { cn, waLink } from "@/lib/utils";

const AREAS = [
  "Seguridad y Salud en el Trabajo",
  "Cumplimiento Legal",
  "Medio Ambiente",
  "Calidad",
] as const;

const inputClass =
  "w-full rounded-xl border border-hairline bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-stone-light focus:border-royal focus:ring-2 focus:ring-royal/15";

export function ConceptForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState<(typeof AREAS)[number]>(AREAS[0]);
  const [params, setParams] = useState("");
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function summary() {
    return [
      "Solicitud de Concepto Legal — HSEQ Legal y Gestión",
      `• Área: ${area}`,
      `• Nombre: ${name}`,
      `• Empresa: ${company}`,
      `• Correo: ${email}`,
      `• Teléfono: ${phone}`,
      "",
      "Parámetros del concepto:",
      params,
      "",
      "Consulta específica:",
      query,
    ].join("\n");
  }

  if (submitted) {
    const text = summary();
    return (
      <div className="rounded-3xl border border-hairline bg-white p-8 text-center shadow-soft">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-soft text-green">
          <Check className="h-8 w-8" strokeWidth={2.5} />
        </div>
        <h3 className="mt-5 font-display text-2xl">Solicitud preparada</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/65">
          Envíanos tu solicitud por el medio que prefieras. Recibirás tu
          concepto legal por escrito en un plazo máximo de{" "}
          <strong className="text-navy">5 días hábiles</strong>.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={waLink(text)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-5 w-5" />
            Enviar por WhatsApp
          </a>
          <a
            href={`mailto:contacto@hseqlegalygestion.com?subject=${encodeURIComponent(
              "Concepto Legal — " + area
            )}&body=${encodeURIComponent(text)}`}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-navy/20 px-6 font-semibold text-navy transition-colors hover:bg-navy/5"
          >
            <Mail className="h-5 w-5" />
            Enviar por correo
          </a>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-5 text-sm font-medium text-stone underline-offset-4 hover:underline"
        >
          Editar solicitud
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-3xl border border-hairline bg-white p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className={inputClass}
          placeholder="Nombre completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className={inputClass}
          placeholder="Empresa"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          className={inputClass}
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className={inputClass}
          placeholder="Teléfono / WhatsApp"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <div className="mt-4">
        <span className="mb-2 block text-sm font-medium text-ink/75">
          Área del concepto
        </span>
        <div className="flex flex-wrap gap-2">
          {AREAS.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => setArea(a)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                area === a
                  ? "bg-navy text-white"
                  : "border border-hairline text-ink/70 hover:border-navy/40"
              )}
            >
              {a}
            </button>
          ))}
        </div>
      </div>

      <label className="mt-5 block">
        <span className="mb-1.5 block text-sm font-medium text-ink/75">
          Parámetros del concepto
        </span>
        <textarea
          className={cn(inputClass, "min-h-28 resize-y")}
          placeholder="Describe el contexto, la actividad económica, el marco aplicable y cualquier antecedente relevante."
          value={params}
          onChange={(e) => setParams(e.target.value)}
          required
        />
      </label>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-medium text-ink/75">
          Consulta específica
        </span>
        <textarea
          className={cn(inputClass, "min-h-28 resize-y")}
          placeholder="¿Qué necesitas que resolvamos exactamente? Sé tan específico como puedas."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
      </label>

      <button
        type="submit"
        className="mt-7 inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-navy px-8 font-semibold text-white shadow-[0_12px_30px_-10px_rgba(4,44,92,0.6)] transition-all hover:-translate-y-0.5 hover:bg-navy-soft sm:w-auto"
      >
        <FileSignature className="h-5 w-5" />
        Enviar consulta
      </button>
    </form>
  );
}
