import { Button } from "@mui/material";
import Link from "next/link";

import classNames from "./Card.module.scss";

export const Card = ({ children, className, href, active }) => {
  return (
    <Button
      className={`${className} ${classNames.card} ${
        active && classNames.active
      }`}
    >
      {new Array(4).fill("").map((_, index) => (
        <span key={index} className={classNames["border-line"]} />
      ))}
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </Button>
  );
};
