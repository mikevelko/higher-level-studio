import EmptyBlock from "@shared/ui/components/EmptyBlock";

import { Footer as FooterUI } from "@shared/ui";

import { prepareImageProps } from "@/lib/adapters/prepareImageProps";
import { prepareLinkProps } from "@/lib/adapters/prepareLinkProps";
import SectionContainer from "@/components/SectionContainer";

import type { IFooterProps } from "./types";

export default function Footer({ data }: IFooterProps) {
  if (!data) return null;

  const {
    copywriteText,
    image,
    address,
    contactPhoneNumber1,
    contactPhoneNumber2,
    contactEmail,
    facebookUrl,
    instagramUrl,
    booksyUrl,
    servicesLinks,
  } = data;

  if (
    (!servicesLinks || servicesLinks.length === 0) &&
    !image &&
    !copywriteText
  )
    return <EmptyBlock name="Footer" />;

  return (
    <SectionContainer sectionData={data} className="gradient-footer">
      <FooterUI
        image={prepareImageProps(image)}
        copywriteText={copywriteText}
        servicesLinks={servicesLinks?.map(prepareLinkProps) || []}
        address={address}
        contactPhoneNumber1={contactPhoneNumber1}
        contactPhoneNumber2={contactPhoneNumber2}
        contactEmail={contactEmail}
        facebookUrl={facebookUrl}
        instagramUrl={instagramUrl}
        booksyUrl={booksyUrl}
      />
    </SectionContainer>
  );
}
