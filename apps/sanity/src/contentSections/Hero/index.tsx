import EmptyBlock from "@shared/ui/components/EmptyBlock";

import { Hero } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import SectionContainer from "@/components/SectionContainer";

import type { IHeroSectionProps } from "./types";

export default function HeroSection({ data }: IHeroSectionProps) {
  if (!data) return null;

  const { image, globalData, mobileImage } = data;

  if (!image || !mobileImage) return <EmptyBlock name="Hero Section" />;

  if (globalData) {
    const { image: globalImage, mobileImage: globalMobileImage } =
      globalData as any;

    return (
      <SectionContainer sectionData={globalData as any}>
        <Hero
          image={prepareImageProps(globalImage)}
          mobileImage={prepareImageProps(globalMobileImage)}
        />
      </SectionContainer>
    );
  }

  return (
    <SectionContainer sectionData={data}>
      <Hero
        image={prepareImageProps(image)}
        mobileImage={prepareImageProps(mobileImage)}
      />
    </SectionContainer>
  );
}
