"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";

import { cn } from "../../../utils";
import { AlignVariant } from "../../sections/header/types";
import { Image } from "../../ui/image";
import { Link } from "../../ui/link";
import type { IHeaderProps } from "./types";

export function Header({
  links,
  className,
  image,
  alignVariant,
}: IHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      setIsScrolled(window.scrollY > 50); // Adjust the value as needed
    };

    // Check scroll position on initial render
    checkScrollPosition();

    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <header
      className={cn(
        "flex gap-2",
        className,
        // replace second if want no bg color
        isScrolled ? "bg-bgColorTransparent" : "bg-bgColorTransparent",
      )}
    >
      <nav
        className={cn(
          "flex grow flex-wrap items-center justify-center gap-3 gap-x-6",
          {
            "justify-center": alignVariant === AlignVariant.Center,
            "justify-start": alignVariant === AlignVariant.Left,
            "justify-end": alignVariant === AlignVariant.Right,
          },
        )}
        aria-label="main mavigation"
      >
        <div className="h-28">
          {image && (
            <NextLink href="/">
              <Image {...image} fit="contain" />
            </NextLink>
          )}
        </div>
        {links.map((link, i) => (
          <Link key={i} {...link} />
        ))}
      </nav>
    </header>
  );
}
