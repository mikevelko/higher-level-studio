import { SectionRenderer } from "@/contentSections";

import { cn, CookieBanner } from "@shared/ui";

import Footer from "../Footer";
import Header from "../Header";
import type { IPageProps } from "./types";

export default function Page({ data }: IPageProps) {
  if (!data) return null;

  const { sectionsBody, showCookieBanner, header, footer, theme } = data;

  return (
    <div className={cn("bg-bgColor", theme)}>
      <Header data={header} />
      <div className="-mt-16 md:-mt-28">
        {sectionsBody?.map((section, i) => (
          <SectionRenderer key={section._key + i} section={section} />
        ))}
      </div>
      {showCookieBanner && <CookieBanner />}
      <Footer data={footer} />
    </div>
  );
}
