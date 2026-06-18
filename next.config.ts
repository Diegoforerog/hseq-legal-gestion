import type { NextConfig } from "next";

// En GitHub Pages el sitio se sirve bajo /<nombre-repo>/.
// En local (sin la variable) se sirve en la raíz para no romper el preview.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export", // genera un sitio 100% estático en /out
  trailingSlash: true, // rutas como /agendar/ → agendar/index.html (compatible con Pages)
  basePath,
  images: {
    unoptimized: true, // requerido para export estático
  },
  // Expone la ruta base a los componentes (para assets en /public como el logo)
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
