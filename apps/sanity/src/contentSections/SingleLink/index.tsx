import SectionContainer from "@/components/SectionContainer";

import type { ISingleLinkProps } from "./types";

export default function SingleLinkSection({ data }: ISingleLinkProps) {
  if (!data) return null;

  const { href, text } = data;

  return (
    <SectionContainer sectionData={data}>
      <a
        href={href}
        className="text-primaryColor font-bold no-underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </SectionContainer>
  );
}
