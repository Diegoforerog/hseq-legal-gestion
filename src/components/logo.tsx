import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** Esquema sobre fondo oscuro */
  dark?: boolean;
  /** Oculta la línea "Legal y Gestión" */
  compact?: boolean;
  className?: string;
};

/**
 * Marca HSEQ: emblema del logo + wordmark con los colores de marca
 * (H·S azul marino, E verde, Q gris) tal como en el logo original.
 */
export function Logo({ dark = false, compact = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="HSEQ Legal y Gestión — Inicio"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <Image
        src="/logo-mark.png"
        alt=""
        width={284}
        height={284}
        priority
        className="h-11 w-11 shrink-0 transition-transform duration-500 group-hover:rotate-3"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl font-semibold tracking-tight">
          <span className={dark ? "text-white" : "text-navy"}>HS</span>
          <span className="text-green-bright">E</span>
          <span className={dark ? "text-stone-light" : "text-stone"}>Q</span>
        </span>
        {!compact && (
          <span
            className={cn(
              "mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.22em]",
              dark ? "text-white/60" : "text-stone"
            )}
          >
            Legal y Gestión
          </span>
        )}
      </span>
    </Link>
  );
}
