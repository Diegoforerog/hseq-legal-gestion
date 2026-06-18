import Link from "next/link";
import { Mail, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { NAV_LINKS, PILLARS } from "@/lib/site";
import { waLink, WHATSAPP_DISPLAY } from "@/lib/utils";

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="relative mt-24 overflow-hidden bg-navy-deep text-white/80">
      <div className="glow -top-24 left-1/4 h-72 w-72 bg-royal/30" />
      <div className="glow bottom-0 right-0 h-72 w-72 bg-green/20" />

      <div className="container-page relative z-10 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div className="max-w-sm">
            <Logo dark />
            <p className="mt-5 text-sm leading-relaxed text-white/65">
              Consultoría en cumplimiento legal, Seguridad y Salud en el
              Trabajo, Medio Ambiente y Calidad. Mantenemos a tu empresa al día
              con la normatividad vigente en Colombia.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {PILLARS.map((p) => (
                <span
                  key={p.key}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/70 ring-1 ring-white/10"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: p.color }}
                  />
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
              Explora
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline text-white/75 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
              Contacto
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-white/75 hover:text-white"
                >
                  <MessageCircle className="mt-0.5 h-5 w-5 text-green-bright" />
                  <span>
                    WhatsApp
                    <span className="block text-white/55">
                      {WHATSAPP_DISPLAY}
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-sky" />
                <span>
                  Correo
                  <span className="block text-white/55">
                    contacto@hseqlegalygestion.com
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-stone-light" />
                <span>
                  Colombia
                  <span className="block text-white/55">
                    Atención presencial y virtual
                  </span>
                </span>
              </li>
            </ul>
            <Link
              href="/concepto-legal"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-green-bright hover:gap-2 transition-all"
            >
              Solicitar concepto legal
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} HSEQ Legal y Gestión. Todos los derechos reservados.</p>
          <p>Cumplimiento Legal · Seguridad y Salud · Ambiente · Calidad</p>
        </div>
      </div>
    </footer>
  );
}
