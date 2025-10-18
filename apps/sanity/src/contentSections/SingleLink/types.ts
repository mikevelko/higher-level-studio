import type { SectionSingleLink } from "@/generated/extracted-types";

export interface ISingleLinkProps {
  data: SectionSingleLink & {
    _key: string;
  };
}
