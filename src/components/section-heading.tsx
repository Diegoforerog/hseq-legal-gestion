import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "eyebrow",
            align === "center" && "justify-center",
            dark && "text-green-bright"
          )}
        >
          <span
            className={cn(
              "h-px w-6",
              dark ? "bg-green-bright" : "bg-royal"
            )}
          />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-4 text-3xl sm:text-4xl",
          dark && "text-white"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            dark ? "text-white/70" : "text-ink/65"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
