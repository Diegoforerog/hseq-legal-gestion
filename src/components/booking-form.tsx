"use client";

import { useState } from "react";
import {
  Video,
  Handshake,
  Check,
  CalendarCheck,
  MessageCircle,
  Mail,
  Clock,
} from "lucide-react";
import { cn, waLink } from "@/lib/utils";

const SERVICES = [
  {
    id: "Asesoría legal virtual",
    desc: "Sesión uno a uno con asesores legales",
    icon: Video,
    modalities: ["Microsoft Teams", "Zoom"],
  },
  {
    id: "Asesoría para implementación",
    desc: "Acompañamiento para implementar tu sistema",
    icon: Handshake,
    modalities: ["Presencial", "Microsoft Teams", "Zoom"],
  },
] as const;

const TIME_SLOTS = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "14:00",
  "15:00",
  "16:00",
];

const inputClass =
  "w-full rounded-xl border border-hairline bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-stone-light focus:border-royal focus:ring-2 focus:ring-royal/15";

export function BookingForm() {
  const [serviceIdx, setServiceIdx] = useState(0);
  const [modality, setModality] = useState<string>(SERVICES[0].modalities[0]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const service = SERVICES[serviceIdx];

  function selectService(idx: number) {
    setServiceIdx(idx);
    setModality(SERVICES[idx].modalities[0]);
  }

  function summary() {
    return [
      "Nueva solicitud de agendamiento — HSEQ Legal y Gestión",
      `• Servicio: ${service.id}`,
      `• Modalidad: ${modality}`,
      `• Fecha preferida: ${date || "por confirmar"} ${time}`,
      `• Nombre: ${name}`,
      `• Empresa: ${company}`,
      `• Correo: ${email}`,
      `• Teléfono: ${phone}`,
      topic ? `• Tema: ${topic}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    const text = summary();
    return (
      <div className="mx-auto max-w-xl rounded-3xl border border-hairline bg-white p-8 text-center shadow-soft">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-soft text-green">
          <Check className="h-8 w-8" strokeWidth={2.5} />
        </div>
        <h3 className="mt-5 font-display text-2xl">¡Solicitud lista!</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/65">
          Para confirmar tu cita y dejarla en el calendario (con copia a
          nuestros asesores legales), envíanos el resumen por el medio que
          prefieras. Te responderemos con la confirmación.
        </p>

        <div className="mt-6 rounded-2xl bg-mist p-5 text-left text-sm">
          <div className="flex items-center gap-2 font-semibold text-navy">
            <CalendarCheck className="h-4 w-4" />
            {service.id}
          </div>
          <ul className="mt-3 space-y-1.5 text-ink/70">
            <li>Modalidad: {modality}</li>
            <li>
              Fecha: {date || "por confirmar"} {time && `· ${time}`}
            </li>
            <li>A nombre de: {name || "—"}</li>
          </ul>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={waLink(text)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-5 w-5" />
            Confirmar por WhatsApp
          </a>
          <a
            href={`mailto:contacto@hseqlegalygestion.com?subject=${encodeURIComponent(
              "Agendamiento — " + service.id
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
      onSubmit={handleSubmit}
      className="rounded-3xl border border-hairline bg-white p-6 shadow-soft sm:p-8"
    >
      {/* 1. Servicio */}
      <fieldset>
        <legend className="text-xs font-semibold uppercase tracking-[0.14em] text-stone">
          1 · Elige el servicio
        </legend>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            const active = idx === serviceIdx;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => selectService(idx)}
                className={cn(
                  "flex items-start gap-3 rounded-2xl border p-4 text-left transition-all",
                  active
                    ? "border-royal bg-sky-soft/40 ring-2 ring-royal/20"
                    : "border-hairline hover:border-navy/30"
                )}
              >
                <span
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                    active ? "bg-royal text-white" : "bg-cloud text-royal"
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-semibold text-navy-deep">
                    {s.id}
                  </span>
                  <span className="mt-0.5 block text-xs text-ink/60">
                    {s.desc}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* 2. Modalidad */}
      <fieldset className="mt-8">
        <legend className="text-xs font-semibold uppercase tracking-[0.14em] text-stone">
          2 · Modalidad
        </legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {service.modalities.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setModality(m)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                modality === m
                  ? "bg-navy text-white"
                  : "border border-hairline text-ink/70 hover:border-navy/40"
              )}
            >
              {m}
            </button>
          ))}
        </div>
      </fieldset>

      {/* 3. Fecha y hora */}
      <fieldset className="mt-8">
        <legend className="text-xs font-semibold uppercase tracking-[0.14em] text-stone">
          3 · Fecha y hora preferida
        </legend>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink/75">
              Fecha
            </span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={inputClass}
              required
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink/75">
              Hora
            </span>
            <div className="relative">
              <Clock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-light" />
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className={cn(inputClass, "pl-9 appearance-none")}
                required
              >
                <option value="">Selecciona una hora</option>
                {TIME_SLOTS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </label>
        </div>
      </fieldset>

      {/* 4. Datos de contacto */}
      <fieldset className="mt-8">
        <legend className="text-xs font-semibold uppercase tracking-[0.14em] text-stone">
          4 · Tus datos
        </legend>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
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
          <textarea
            className={cn(inputClass, "sm:col-span-2 min-h-24 resize-y")}
            placeholder="¿Sobre qué tema necesitas la asesoría? (opcional)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
      </fieldset>

      <button
        type="submit"
        className="mt-8 inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-navy px-8 font-semibold text-white shadow-[0_12px_30px_-10px_rgba(4,44,92,0.6)] transition-all hover:-translate-y-0.5 hover:bg-navy-soft sm:w-auto"
      >
        <CalendarCheck className="h-5 w-5" />
        Solicitar agendamiento
      </button>
      <p className="mt-3 text-xs text-stone">
        Confirmamos la cita por calendario, con copia a los asesores legales.
      </p>
    </form>
  );
}
