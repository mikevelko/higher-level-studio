"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

import { cn } from "../../../utils";
import { Button } from "../../ui/button";
import { Image } from "../../ui/image";
import { Link } from "../../ui/link";
import type { IMobileHeaderProps } from "./types";

export function HeaderMobile({ links, image, className }: IMobileHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        "flex",
        isScrolled ? "bg-bgColorTransparent" : "",
        className,
      )}
    >
      <nav
        className={cn("flex grow items-center justify-between ")}
        aria-label="main mavigation mobile"
      >
        <div className="h-16">
          {image && (
            <NextLink href="/">
              <Image {...image} fit="contain" />
            </NextLink>
          )}
        </div>
        {!isMenuOpen && (
          <Button onClick={toggleMenu}>
            <HamburgerMenuIcon className="size-5" />
          </Button>
        )}

        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-white opacity-95"
              style={{ width: "calc(100% - 13rem)" }}
              onClick={toggleMenu}
            ></div>
            <div className="bg-bgColor fixed right-0 top-0 z-50 h-full w-52">
              <Button className="absolute right-4 top-8" onClick={toggleMenu}>
                <Cross1Icon className="size-5" />
              </Button>
              <div className="flex flex-col items-center p-4 pt-20">
                {links.map((link, i) => (
                  <Link key={i} {...link} className="mt-8" />
                ))}
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
