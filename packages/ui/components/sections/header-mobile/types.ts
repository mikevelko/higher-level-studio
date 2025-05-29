import type { IImageProps } from "../../ui/image/types";
import type { LinkProps } from "../../ui/link/types";

export interface IMobileHeaderProps {
  links: LinkProps[];
  image: IImageProps;
  className?: string;
}
