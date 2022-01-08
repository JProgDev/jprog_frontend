import { Typography } from "@mui/material";
import Avatar from "../Avatar";
import Card from "../Card";

import classNames from "./Service.module.scss";

export const Service = ({ imgUrl, id, title, price, features, ...props }) => {
  return (
    <Card data-aos="zoom-in" href={`/prices/${id}`} {...props}>
      <div>
        <Avatar imgUrl={imgUrl} alt={title} />
      </div>
      <Typography className={classNames.title}>{title}</Typography>
      {price && (
        <>
          <Typography className={classNames.price}>{price}</Typography>
          <Typography
            className={`${classNames.default} ${classNames["border-bottom"]}`}
          >
            dan boshlab
          </Typography>
        </>
      )}
      <div className={classNames.line}></div>
      <ul className={classNames.features}>
        {features &&
          features.map((feature, index) => (
            <li key={index} className={classNames.default}>
              {feature}
            </li>
          ))}
      </ul>
    </Card>
  );
};
