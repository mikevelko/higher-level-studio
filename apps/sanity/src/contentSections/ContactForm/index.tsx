import { ContactForm } from "@shared/ui";

import SectionContainer from "@/components/SectionContainer";

import type { IContactFormProps } from "./types";

export default function ContactFormSection({ data }: IContactFormProps) {
  if (!data) return null;

  return (
    <SectionContainer sectionData={data}>
      <ContactForm />
    </SectionContainer>
  );
}
