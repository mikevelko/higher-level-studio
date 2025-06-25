import type { SectionMap } from "@/generated/extracted-types";

export interface IMapProps {
  data: SectionMap & {
    _key: string;
  };
}
