import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappButton } from "@/components/whatsapp-button";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hseqlegalygestion.com"),
  title: {
    default: "HSEQ Legal y Gestión | Cumplimiento legal en SST, ambiente y calidad",
    template: "%s | HSEQ Legal y Gestión",
  },
  description:
    "Consultoría HSEQ en Colombia. Te mantenemos al día con la normatividad en Seguridad y Salud en el Trabajo, Medio Ambiente y Calidad: formatos listos para usar, asesoría legal y conceptos especializados.",
  keywords: [
    "SG-SST",
    "cumplimiento legal SST",
    "asesoría legal SST",
    "ISO 45001",
    "ISO 9001",
    "Decreto 1072",
    "Resolución 0312",
    "formatos SST",
  ],
  openGraph: {
    title: "HSEQ Legal y Gestión",
    description:
      "Cumplimiento legal que protege a tu empresa y a tu gente. SST, ambiente y calidad.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${hanken.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-paper">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsappButton />
      </body>
    </html>
  );
}
