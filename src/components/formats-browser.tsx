"use client";

import { useState } from "react";
import { FormatCard } from "@/components/format-card";
import { FORMATS, type Format } from "@/lib/site";
import { cn } from "@/lib/utils";

const CATEGORIES: ("Todos" | Format["category"])[] = [
  "Todos",
  "SST",
  "Legal",
  "Ambiente",
  "Calidad",
];

export function FormatsBrowser() {
  const [active, setActive] =
    useState<(typeof CATEGORIES)[number]>("Todos");

  const filtered =
    active === "Todos"
      ? FORMATS
      : FORMATS.filter((f) => f.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-all",
              active === cat
                ? "bg-navy text-white shadow-soft"
                : "border border-hairline bg-white text-ink/70 hover:border-navy/40 hover:text-navy"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((format) => (
          <FormatCard key={format.slug} format={format} />
        ))}
      </div>

      <p className="mt-10 rounded-2xl border border-hairline bg-mist p-5 text-sm text-ink/60">
        Cada formato se entrega actualizado según la normatividad vigente. Al
        adquirirlo recibirás el archivo editable listo para diligenciar. ¿Buscas
        un formato que no está en la lista?{" "}
        <span className="font-semibold text-navy">Escríbenos</span> y lo
        preparamos para ti.
      </p>
    </div>
  );
}
