import { Button as MuiButton } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

import Button from "../Button";
import classNames from "./Card.module.scss";

export const Card = ({
  children,
  className,
  href,
  active = false,
  hoverable = false,
  ...props
}) => {
  const router = useRouter();

  const RedirectForActiveItem = () => active && router.push(href);

  return (
    <MuiButton
      onClick={RedirectForActiveItem}
      className={`${className} ${classNames.card} ${
        active && classNames.active
      } ${hoverable && classNames.hoverable}`}
      {...props}
    >
      {new Array(4).fill("").map((_, index) => (
        <span key={index} className={classNames["border-line"]} />
      ))}
      <Link href={href}>
        <a>
          <div className={classNames.content}>{children}</div>
          <Button variant="outlined" className={classNames.btn}>
            Buyurtma berish
          </Button>
        </a>
      </Link>
    </MuiButton>
  );
};
