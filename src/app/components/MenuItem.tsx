"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";

type MenuLinkProps = React.ComponentProps<typeof Link> & {
  name: string;
};

export const MenuLink = React.forwardRef<LinkProps, MenuLinkProps>(
  ({ name, href, ...props }, ref) => {
    const pathname = usePathname();
    return (
      <Link {...props} href={href}>
        <li className={pathname === href ? "font-bold" : ""}>{name}</li>
      </Link>
    );
  }
);
