import { FileText, Eye, ShoppingCart } from "lucide-react";
import { CATEGORY_COLORS, type Format } from "@/lib/site";
import { formatCOP, waLink, cn } from "@/lib/utils";

/** Vista previa estilizada de un documento, teñida por categoría. */
function DocPreview({ category }: { category: Format["category"] }) {
  const color = CATEGORY_COLORS[category];
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-cloud">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ background: color }}
      />
      {/* Hoja del documento */}
      <div className="absolute left-1/2 top-5 h-[115%] w-[78%] -translate-x-1/2 rounded-t-lg bg-white shadow-[0_8px_30px_-12px_rgba(4,44,92,0.35)] ring-1 ring-black/5">
        <div className="space-y-2 p-5">
          <div
            className="h-2.5 w-1/2 rounded-full"
            style={{ background: color }}
          />
          <div className="h-1.5 w-3/4 rounded-full bg-ink/10" />
          <div className="mt-4 grid grid-cols-3 gap-1.5">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-3 rounded-sm bg-ink/[0.06]" />
            ))}
          </div>
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-ink/[0.07]" />
            <div className="h-1.5 w-5/6 rounded-full bg-ink/[0.07]" />
            <div className="h-1.5 w-2/3 rounded-full bg-ink/[0.07]" />
          </div>
        </div>
      </div>
      <span
        className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[0.7rem] font-semibold shadow-sm backdrop-blur"
        style={{ color }}
      >
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: color }}
        />
        {category}
      </span>
    </div>
  );
}

export function FormatCard({ format }: { format: Format }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <DocPreview category={format.category} />

      <div className="flex flex-1 flex-col px-1 pt-4">
        <h3 className="font-display text-lg leading-snug text-navy-deep">
          {format.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-ink/60">
          {format.description}
        </p>

        <div className="mt-3 flex items-center gap-3 text-xs text-stone">
          <span className="inline-flex items-center gap-1.5">
            <FileText className="h-3.5 w-3.5" />
            {format.format}
          </span>
          {format.pages && <span>· {format.pages} págs.</span>}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="font-display text-xl font-semibold text-navy">
            {formatCOP(format.price)}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Vista previa"
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-stone transition-colors hover:border-navy/40 hover:text-navy"
              )}
            >
              <Eye className="h-4 w-4" />
            </button>
            <a
              href={waLink(
                `Hola, quiero adquirir el formato: ${format.name} (${formatCOP(
                  format.price
                )}).`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-navy px-4 text-sm font-semibold text-white transition-all hover:bg-navy-soft"
            >
              <ShoppingCart className="h-4 w-4" />
              Adquirir
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
