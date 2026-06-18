import { Hero } from "@/components/sections/hero";
import { Pillars } from "@/components/sections/pillars";
import { Services } from "@/components/sections/services";
import { FormatsTeaser } from "@/components/sections/formats-teaser";
import { OtherServices } from "@/components/sections/other-services";
import { UpdatesTeaser } from "@/components/sections/updates-teaser";
import { ClosingCta } from "@/components/sections/closing-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <Services />
      <FormatsTeaser />
      <OtherServices />
      <UpdatesTeaser />
      <ClosingCta />
    </>
  );
}
