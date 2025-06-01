import type { IImageProps } from "../../ui/image/types";
import type { LinkProps } from "../../ui/link/types";

export interface IFooterProps {
  image: IImageProps;
  servicesLinks: LinkProps[];
  address?: string;
  contactPhoneNumber1?: string;
  contactPhoneNumber2?: string;
  contactEmail?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  booksyUrl?: string;
  copywriteText?: string;
}
