import { Map } from "@shared/ui";

import SectionContainer from "@/components/SectionContainer";

import type { IMapProps } from "./types";

export default function MapSection({ data }: IMapProps) {
  if (!data) return null;

  const { longitude, latitude, zoom } = data;

  return (
    <SectionContainer sectionData={data}>
      <Map longitude={longitude} latitude={latitude} zoom={zoom} />
    </SectionContainer>
  );
}
