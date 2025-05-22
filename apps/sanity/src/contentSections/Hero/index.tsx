import EmptyBlock from "@shared/ui/components/EmptyBlock";

import { Hero } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import SectionContainer from "@/components/SectionContainer";

import type { IHeroSectionProps } from "./types";

export default function HeroSection({ data }: IHeroSectionProps) {
  if (!data) return null;

  const { image, globalData } = data;

  if (!image) return <EmptyBlock name="Hero Section" />;

  if (globalData) {
    const { image: globalImage } = globalData as any;

    return (
      <SectionContainer sectionData={globalData as any}>
        <Hero image={prepareImageProps(globalImage)} />
      </SectionContainer>
    );
  }

  return (
    <SectionContainer sectionData={data}>
      <Hero image={prepareImageProps(image)} />
    </SectionContainer>
  );
}
