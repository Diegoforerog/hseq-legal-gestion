/**
 * Contenido del negocio HSEQ Legal y Gestión.
 * Extraído del brief del cliente. Centralizado para reutilizar en todas las páginas.
 */

export type Pillar = {
  key: "legal" | "sst" | "ambiente" | "calidad";
  label: string;
  title: string;
  description: string;
  /** color de marca asociado (variable CSS) */
  color: string;
};

export const PILLARS: Pillar[] = [
  {
    key: "legal",
    label: "Cumplimiento Legal",
    title: "Normatividad vigente, aplicada a tu operación",
    description:
      "Interpretamos la ley y la traducimos en acciones concretas para que tu empresa cumpla sin sobresaltos.",
    color: "var(--color-navy)",
  },
  {
    key: "sst",
    label: "Seguridad y Salud",
    title: "SG-SST diseñado, implementado y auditado",
    description:
      "Sistema de Gestión de Seguridad y Salud en el Trabajo conforme al Decreto 1072 y la Resolución 0312.",
    color: "var(--color-royal)",
  },
  {
    key: "ambiente",
    label: "Ambiente",
    title: "Gestión ambiental que cumple requisitos",
    description:
      "Identificamos aspectos e impactos ambientales y aseguramos el cumplimiento de la normatividad aplicable.",
    color: "var(--color-green)",
  },
  {
    key: "calidad",
    label: "Calidad",
    title: "Sistemas ISO que elevan tu estándar",
    description:
      "Implementación y auditoría de sistemas de gestión de calidad que fortalecen tu operación y tu reputación.",
    color: "var(--color-stone)",
  },
];

export type MainService = {
  slug: string;
  name: string;
  modality: string;
  description: string;
  features: string[];
  scheduling: boolean;
  highlight?: string;
};

export const MAIN_SERVICES: MainService[] = [
  {
    slug: "asesoria-legal-virtual",
    name: "Asesoría legal virtual",
    modality: "Teams · Zoom",
    description:
      "Sesión uno a uno con nuestros asesores legales para resolver dudas de cumplimiento en SST, ambiente y calidad.",
    features: [
      "Agendamiento por calendario",
      "Confirmación a tu correo y a los asesores",
      "Sesión grabable según necesidad",
    ],
    scheduling: true,
  },
  {
    slug: "asesoria-implementacion",
    name: "Asesoría para implementación",
    modality: "Presencial · Teams · Zoom",
    description:
      "Acompañamiento práctico para implementar tu sistema de gestión paso a paso, en sitio o de forma virtual.",
    features: [
      "Plan de trabajo a la medida",
      "Acompañamiento documental",
      "Agendamiento por calendario",
    ],
    scheduling: true,
  },
  {
    slug: "concepto-legal",
    name: "Concepto Legal",
    modality: "Virtual · Respuesta en 5 días hábiles",
    description:
      "Redacta los parámetros y tu consulta específica. Recibirás un concepto legal especializado por escrito.",
    features: [
      "Defines parámetros y consulta",
      "Respuesta escrita por experto",
      "Entrega en máximo 5 días hábiles",
    ],
    scheduling: false,
    highlight: "5 días hábiles",
  },
];

export const OTHER_SERVICES: { title: string; description: string }[] = [
  {
    title: "Diseño y administración del SG-SST",
    description:
      "Estructuramos y mantenemos tu Sistema de Gestión de Seguridad y Salud en el Trabajo.",
  },
  {
    title: "Auditoría interna ISO 45001, ISO 9001 y RUC",
    description:
      "Evaluamos tus sistemas frente a los estándares y te preparamos para la certificación.",
  },
  {
    title: "Programas de gestión de riesgos y vigilancia epidemiológica",
    description:
      "Diseño documental de programas de gestión de riesgos y sistemas de vigilancia.",
  },
  {
    title: "Gestión de casos por accidente o enfermedad",
    description:
      "Asesoría en gestión de casos por accidente, enfermedad laboral o común.",
  },
  {
    title: "Diseño de planes de emergencia",
    description:
      "Planes de prevención, preparación y respuesta ante emergencias para tu empresa.",
  },
  {
    title: "Aplicación de Batería de Riesgo Psicosocial",
    description:
      "Medición y análisis del riesgo psicosocial conforme a la normatividad vigente.",
  },
];

export type Format = {
  slug: string;
  name: string;
  category: "SST" | "Ambiente" | "Calidad" | "Legal";
  description: string;
  price: number;
  pages?: number;
  format?: string;
};

export const FORMATS: Format[] = [
  {
    slug: "matriz-ipevr",
    name: "Matriz de Identificación de Peligros (IPEVR)",
    category: "SST",
    description:
      "Identificación de peligros, evaluación y valoración de riesgos según la GTC 45.",
    price: 45000,
    pages: 12,
    format: "Excel",
  },
  {
    slug: "matriz-legal-sst",
    name: "Matriz de Requisitos Legales SST",
    category: "Legal",
    description:
      "Compendio normativo actualizado y aplicable a tu actividad económica.",
    price: 60000,
    pages: 20,
    format: "Excel",
  },
  {
    slug: "plan-emergencias",
    name: "Plan de Emergencias y Contingencias",
    category: "SST",
    description:
      "Documento maestro con procedimientos, brigadas y rutas de evacuación.",
    price: 55000,
    pages: 38,
    format: "Word",
  },
  {
    slug: "reglamento-higiene",
    name: "Reglamento de Higiene y Seguridad Industrial",
    category: "Legal",
    description: "Formato base listo para diligenciar y publicar en tu empresa.",
    price: 25000,
    pages: 6,
    format: "Word",
  },
  {
    slug: "investigacion-accidentes",
    name: "Procedimiento de Investigación de Accidentes",
    category: "SST",
    description:
      "Metodología y formatos para investigar incidentes y accidentes de trabajo.",
    price: 35000,
    pages: 14,
    format: "Word",
  },
  {
    slug: "plan-anual-sst",
    name: "Plan de Trabajo Anual SST",
    category: "SST",
    description:
      "Cronograma con objetivos, metas, responsables y recursos del SG-SST.",
    price: 30000,
    pages: 8,
    format: "Excel",
  },
  {
    slug: "matriz-aspectos-ambientales",
    name: "Matriz de Aspectos e Impactos Ambientales",
    category: "Ambiente",
    description:
      "Identificación y valoración de aspectos e impactos para tu gestión ambiental.",
    price: 50000,
    pages: 15,
    format: "Excel",
  },
  {
    slug: "manual-calidad-iso9001",
    name: "Manual de Calidad ISO 9001",
    category: "Calidad",
    description:
      "Estructura documental base para tu sistema de gestión de calidad.",
    price: 65000,
    pages: 30,
    format: "Word",
  },
];

export type Update = {
  slug: string;
  title: string;
  category: "SST" | "Ambiente" | "Calidad" | "Legal";
  date: string;
  excerpt: string;
};

export const UPDATES: Update[] = [
  {
    slug: "resolucion-0312-estandares-minimos",
    title: "Resolución 0312 de 2019: estándares mínimos del SG-SST",
    category: "SST",
    date: "2026-05-28",
    excerpt:
      "Qué estándares aplican según el número de trabajadores y nivel de riesgo, y cómo prepararte para la autoevaluación.",
  },
  {
    slug: "decreto-1072-obligaciones",
    title: "Decreto 1072 de 2015: obligaciones que tu empresa debe cumplir",
    category: "Legal",
    date: "2026-05-15",
    excerpt:
      "Repaso de las obligaciones del empleador en materia de SST y las sanciones por incumplimiento.",
  },
  {
    slug: "bateria-riesgo-psicosocial",
    title: "Batería de Riesgo Psicosocial: claves para su aplicación",
    category: "SST",
    date: "2026-04-30",
    excerpt:
      "Cuándo aplicarla, quién puede hacerlo y cómo usar los resultados en tu programa de vigilancia.",
  },
  {
    slug: "actualizacion-iso-9001",
    title: "Gestión de calidad: tendencias en la actualización de ISO 9001",
    category: "Calidad",
    date: "2026-04-12",
    excerpt:
      "Lo que se discute para la próxima versión de la norma y cómo anticiparte desde ya.",
  },
];

export const TRUST_BADGES = [
  "ISO 45001",
  "ISO 9001",
  "RUC",
  "Decreto 1072",
  "Resolución 0312",
];

export const NAV_LINKS = [
  { href: "/servicios", label: "Servicios" },
  { href: "/formatos", label: "Formatos" },
  { href: "/actualizaciones", label: "Actualizaciones" },
  { href: "/concepto-legal", label: "Concepto legal" },
  { href: "/contacto", label: "Contacto" },
];

export const CATEGORY_COLORS: Record<Format["category"], string> = {
  SST: "var(--color-royal)",
  Ambiente: "var(--color-green)",
  Calidad: "var(--color-stone)",
  Legal: "var(--color-navy)",
};
