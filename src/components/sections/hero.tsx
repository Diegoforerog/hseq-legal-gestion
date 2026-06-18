import {
  ShieldCheck,
  FileDown,
  CalendarCheck,
  ArrowRight,
  Scale,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TRUST_BADGES } from "@/lib/site";
import { formatCOP } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-mist">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="glow -left-20 top-10 h-80 w-80 bg-royal/20" />
      <div className="glow right-0 top-40 h-72 w-72 bg-green/15" />

      <div className="container-page relative z-10 grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        {/* Columna de texto */}
        <div>
          <span className="eyebrow reveal" style={{ animationDelay: "0ms" }}>
            <span className="h-px w-6 bg-royal" />
            Consultoría HSEQ · Colombia
          </span>

          <h1
            className="reveal mt-6 text-balance text-4xl leading-[1.04] sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            Cumplimiento legal que{" "}
            <span className="relative whitespace-nowrap text-royal">
              protege
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9C40 4 160 3 198 7"
                  stroke="var(--color-green-bright)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            a tu empresa y a tu gente.
          </h1>

          <p
            className="reveal mt-6 max-w-xl text-lg leading-relaxed text-ink/70"
            style={{ animationDelay: "160ms" }}
          >
            Te mantenemos al día con la normatividad en Seguridad y Salud en el
            Trabajo, Medio Ambiente y Calidad — con formatos listos para usar,
            asesoría legal y conceptos especializados.
          </p>

          <div
            className="reveal mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "240ms" }}
          >
            <Button href="/agendar" size="lg">
              <CalendarCheck className="h-5 w-5" />
              Agendar asesoría
            </Button>
            <Button href="/formatos" size="lg" variant="outline">
              Ver formatos
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div
            className="reveal mt-12"
            style={{ animationDelay: "320ms" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone">
              Trabajamos bajo estándares
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
              {TRUST_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="text-sm font-semibold text-navy/55"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Columna visual: las 3 propuestas de valor */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* Emblema marca de agua */}
          <Scale
            className="absolute -right-6 -top-10 h-40 w-40 text-navy/[0.04]"
            aria-hidden="true"
          />

          <div className="relative space-y-4">
            {/* Card 1 — Actualización legal */}
            <article
              className="reveal ml-0 rounded-2xl border border-hairline bg-white p-5 shadow-soft"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-navy">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy" />
                  Actualización legal
                </span>
                <span className="text-xs text-stone">Hoy</span>
              </div>
              <p className="mt-3 font-display text-lg text-navy-deep">
                Resolución 0312: estándares mínimos del SG-SST
              </p>
              <p className="mt-1 text-sm text-ink/60">
                Qué aplica según tu número de trabajadores y nivel de riesgo.
              </p>
            </article>

            {/* Card 2 — Formato descargable */}
            <article
              className="reveal ml-8 rounded-2xl border border-hairline bg-white p-5 shadow-lift"
              style={{ animationDelay: "320ms" }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-soft text-royal">
                  <FileDown className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-sky-soft px-2.5 py-0.5 text-[0.7rem] font-semibold text-royal">
                      Formato · SST
                    </span>
                    <span className="font-display text-lg font-semibold text-navy">
                      {formatCOP(45000)}
                    </span>
                  </div>
                  <p className="mt-2 truncate font-medium text-navy-deep">
                    Matriz de Peligros (IPEVR)
                  </p>
                  <p className="text-sm text-ink/55">
                    Listo para diligenciar · Excel
                  </p>
                </div>
              </div>
            </article>

            {/* Card 3 — Asesoría agendada */}
            <article
              className="reveal ml-0 flex items-center gap-4 rounded-2xl border border-hairline bg-navy p-5 text-white shadow-lift"
              style={{ animationDelay: "440ms" }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green text-white">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="font-display text-lg">Asesoría agendada</p>
                <p className="text-sm text-white/65">
                  Confirmada por calendario · Teams / Zoom / Presencial
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
