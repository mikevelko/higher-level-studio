import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";

import { Image } from "../../ui/image";
import { Link } from "../../ui/link";
import type { IFooterProps } from "./types";

export function Footer({
  image,
  servicesLinks,
  address,
  contactPhoneNumber1,
  contactPhoneNumber2,
  contactEmail,
  facebookUrl,
  instagramUrl,
  booksyUrl,
  copywriteText,
}: IFooterProps) {
  console.log(contactPhoneNumber1);
  return (
    <footer className="space-y-12">
      <div className="flex justify-center gap-32">
        <div className="h-40">
          <Image {...image} fit="contain" />
        </div>

        <div className="flex flex-col items-start gap-4">
          <h2 className="text-primaryColor text-center text-xl font-semibold">
            KONTAKT
          </h2>
          <p className="text-textColor text-center">Adres: {address}</p>
          <p className="text-textColor text-center">
            Telefon: {contactPhoneNumber1} {contactPhoneNumber2}
          </p>
          <p className="text-textColor text-center">Email: {contactEmail}</p>
          <div className="flex space-x-3">
            {facebookUrl && (
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                <IconBrandFacebook stroke={2} className="text-primaryColor" />
              </a>
            )}
            {instagramUrl && (
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <IconBrandInstagram stroke={2} className="text-primaryColor" />
              </a>
            )}
            {booksyUrl && (
              <a href={booksyUrl} target="_blank" rel="noopener noreferrer">
                <div className="text-primaryColor font-bold">Booksy</div>
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          <h2 className="text-primaryColor text-center text-xl font-semibold">
            USŁUGI
          </h2>
          <nav
            aria-label="services navigation"
            className="flex flex-col items-start gap-4"
          >
            {servicesLinks.map((link, i) => (
              <Link key={link.text + i} {...link} className="p-0" />
            ))}
          </nav>
        </div>
      </div>

      {copywriteText && (
        <p className="text-textColor text-center">{copywriteText}</p>
      )}
    </footer>
  );
}
