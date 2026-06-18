import { ArrowUpRight } from "lucide-react";
import { CATEGORY_COLORS, type Update } from "@/lib/site";

const MONTHS = [
  "ene",
  "feb",
  "mar",
  "abr",
  "may",
  "jun",
  "jul",
  "ago",
  "sep",
  "oct",
  "nov",
  "dic",
];

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export function UpdateCard({ update }: { update: Update }) {
  const color = CATEGORY_COLORS[update.category];
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-hairline bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
      <span
        className="absolute left-0 top-6 h-10 w-1 rounded-r-full"
        style={{ background: color }}
      />
      <div className="flex items-center justify-between">
        <span
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
          style={{ background: `${color}14`, color }}
        >
          {update.category}
        </span>
        <time className="text-xs text-stone" dateTime={update.date}>
          {formatDate(update.date)}
        </time>
      </div>
      <h3 className="mt-4 font-display text-xl leading-snug text-navy-deep">
        {update.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">
        {update.excerpt}
      </p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-royal transition-all group-hover:gap-2">
        Leer artículo
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </article>
  );
}
