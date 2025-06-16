import { Image } from "../../ui/image";
import type { IHeroProps } from "./types";

export function Hero({ image, mobileImage }: IHeroProps) {
  return (
    <div className="w-full">
      {/* Mobile version - hidden on sm and up */}
      <div className="block sm:hidden">
        <Image {...mobileImage} fit="cover" />
      </div>
      {/* Desktop version - hidden below sm */}
      <div className="hidden sm:block">
        <Image {...image} fit="contain" />
      </div>
    </div>
  );
}
