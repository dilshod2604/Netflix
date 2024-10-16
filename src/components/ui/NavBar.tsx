"use client";
import { navLinks } from "@/constants/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathName = usePathname();
  return (
    <ul className="flex items-center gap-x-4">
      {navLinks.map((link, index) =>
        pathName === link.href ? (
          <Link
            key={index}
            href={link.href}
            className="text-pink-500 font-bold underline"
          >
            {link.name}
          </Link>
        ) : (
          <Link key={index} href={link.href} className="text-black ">
            {link.name}
          </Link>
        )
      )}
    </ul>
  );
};

export default NavBar;
