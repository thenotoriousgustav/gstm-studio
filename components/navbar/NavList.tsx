"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children: string;
  href: string;
  className: string;
}

const NavLink = ({ children, href, className }: Props) => {
  return (
    <li>
      <Link href={href} className={className}>
        {children}
      </Link>
    </li>
  );
};

export default function NavList() {
  const path = usePathname();
  return (
    <>
      <NavLink href='/' className={path == "/" ? "activeNav" : "nonActiveNav"}>
        Home
      </NavLink>

      <NavLink
        href='/about'
        className={path == "/about" ? "activeNav" : "nonActiveNav"}
      >
        About
      </NavLink>

      <NavLink
        href='/services'
        className={path == "/services" ? "activeNav" : "nonActiveNav"}
      >
        Services
      </NavLink>

      <NavLink
        href='/work'
        className={path == "/work" ? "activeNav" : "nonActiveNav"}
      >
        Work
      </NavLink>
    </>
  );
}
