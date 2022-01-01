import { Typography } from "@mui/material";
import Link from "next/link";
import Avatar from "../Avatar";
import Card from "../Card";

import classNames from "./Price.module.scss";

export const Price = ({ imgUrl, id, title, price, features }) => {
  return (
    <Card>
      <Link href={`/prices/${id}`}>
        <a>
          <div>
            <Avatar imgUrl={imgUrl} alt={title} />
          </div>
          <Typography className={classNames.title}>{title}</Typography>
          <Typography className={classNames.price}>{price}</Typography>
          <Typography
            className={`${classNames.default} ${classNames["border-bottom"]}`}
          >
            dan boshlab
          </Typography>
          <div className={classNames.line}></div>
          <ul className={classNames.features}>
            {features &&
              features.map((feature, index) => (
                <li key={index} className={classNames.default}>
                  {feature}
                </li>
              ))}
          </ul>
        </a>
      </Link>
    </Card>
  );
};
