"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { createPortal } from "react-dom";

import { cn } from "../../../utils";
import { Button } from "../../ui/button";
import { Image } from "../../ui/image";
import { Link } from "../../ui/link";
import type { IMobileHeaderProps } from "./types";

export function HeaderMobile({ links, image, className }: IMobileHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn("flex", "bg-bgColorSecondary", "opacity-95", className)}
    >
      <nav
        className={cn("flex grow items-center justify-between ")}
        aria-label="main mavigation mobile"
      >
        <div className="h-16 w-24">
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

        {isMenuOpen &&
          createPortal(
            <div className="fixed inset-0 z-[9999] flex">
              {/* Left white overlay */}
              <div
                className="flex-1 bg-white opacity-95"
                onClick={toggleMenu}
              ></div>

              {/* Right menu panel */}
              <div className="bg-bgColorSecondary relative h-full w-52">
                <Button className="absolute right-4 top-8" onClick={toggleMenu}>
                  <Cross1Icon className="size-5" />
                </Button>
                <div className="flex flex-col items-center p-4 pt-20">
                  {links.map((link, i) => (
                    <Link
                      key={i}
                      {...link}
                      onClick={toggleMenu}
                      className="mt-8"
                    />
                  ))}
                </div>
              </div>
            </div>,
            document.body,
          )}
      </nav>
    </header>
  );
}
