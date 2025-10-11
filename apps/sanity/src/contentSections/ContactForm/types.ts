import type { SectionContactForm } from "@/generated/extracted-types";

export interface IContactFormProps {
  data: SectionContactForm & {
    _key: string;
  };
}
