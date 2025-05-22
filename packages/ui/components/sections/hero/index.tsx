import { Image } from "../../ui/image";
import type { IHeroProps } from "./types";

export function Hero({ image }: IHeroProps) {
  return (
    <div className="w-1/1">
      <Image {...image} fit="contain" />
    </div>
  );
}
