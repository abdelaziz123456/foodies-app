import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classes from "./navlink.module.css";

const Navlink = ({ link, children }) => {
  const path = usePathname();
  return (
    <Link
      href={link}
      className={path.startsWith(link) ? classes.active : undefined}
    >
      {children}
    </Link>
  );
};

export default Navlink;
