import { Reveal } from "@/components/reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
};

/** Encabezado estándar para las páginas internas. */
export function PageHeader({ eyebrow, title, description, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-mist">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      <div className="glow -left-16 top-0 h-72 w-72 bg-royal/15" />
      <div className="glow right-0 top-10 h-64 w-64 bg-green/12" />

      <div className="container-page relative z-10 py-16 lg:py-20">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 bg-royal" />
            {eyebrow}
          </span>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
