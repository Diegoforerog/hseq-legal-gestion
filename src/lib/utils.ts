import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Ruta base del sitio (vacía en local, /hseq-legal-gestion en GitHub Pages). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Antepone la ruta base a un asset de /public (ej. logo). */
export function asset(path: string) {
  return `${BASE_PATH}${path}`;
}

/** Número de WhatsApp de la empresa (Colombia +57). */
export const WHATSAPP_NUMBER = "573123011656";
export const WHATSAPP_DISPLAY = "312 301 1656";

export function waLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Formatea un valor numérico como pesos colombianos. */
export function formatCOP(value: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}
