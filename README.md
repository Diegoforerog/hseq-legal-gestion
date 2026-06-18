# HSEQ Legal y Gestión — Sitio web

Sitio institucional + tienda de formatos + agendamiento + concepto legal para
**HSEQ Legal y Gestión** (consultoría en Cumplimiento Legal, Seguridad y Salud
en el Trabajo, Medio Ambiente y Calidad — Colombia).

Construido con **Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript**,
con `motion` para animaciones y `lucide-react` para iconos. Mismo stack que el
proyecto Agentico.

## Cómo ejecutar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Estructura

```
src/
  app/
    page.tsx              Inicio (hero + pilares + servicios + formatos + actualizaciones + CTA)
    servicios/            Servicios principales + otros servicios
    formatos/             Tienda de formatos con filtro por categoría
    agendar/              Formulario de agendamiento (Teams / Zoom / Presencial)
    concepto-legal/       Solicitud de concepto legal (respuesta 5 días hábiles)
    actualizaciones/      Feed de actualizaciones legales
    contacto/             Datos de contacto + WhatsApp + formulario
    layout.tsx            Header + Footer + botón flotante de WhatsApp
    globals.css           Sistema de diseño (paleta del logo + tipografías)
  components/             Header, Footer, tarjetas, formularios, secciones
  lib/
    site.ts              Contenido del negocio (servicios, formatos, pilares...)
    utils.ts             Helpers (WhatsApp, formato de moneda COP)
```

## Marca

Paleta extraída del logo:

| Color        | Hex       | Uso                         |
| ------------ | --------- | --------------------------- |
| Azul marino  | `#042c5c` | Primario / Cumplimiento     |
| Azul royal   | `#0a59a8` | Acento / Seguridad y Salud  |
| Verde        | `#4e8c1f` | Secundario / Ambiente       |
| Gris         | `#5a5f63` | Neutro / Calidad            |

Tipografías: **Fraunces** (títulos) + **Hanken Grotesk** (texto).
WhatsApp del negocio: **312 301 1656**.

## Pendiente (Fase 2 — requiere backend / cuentas)

Hoy los formularios de agendamiento, concepto legal y contacto **arman el
mensaje y lo envían por WhatsApp o correo** (funciona de inmediato). Para
automatizarlo falta:

- **Agendamiento real con calendario** (Google Calendar / Calendly / Cal.com) con
  invitación automática y copia a los asesores legales.
- **Pago en línea de los formatos** (pasarela: Wompi, Mercado Pago, Bold) y
  entrega/descarga automática del archivo.
- **Chatbot de WhatsApp** con autorespuesta empresarial.
- **CMS / panel** para publicar actualizaciones legales y cargar formatos sin tocar código.
- Despliegue (Netlify / Vercel) y dominio propio.
