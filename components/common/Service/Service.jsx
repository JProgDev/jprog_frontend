import { Typography } from "@mui/material";
import Link from "next/link";
import Avatar from "../Avatar";
import Card from "../Card";

import classNames from "./Service.module.scss";

export const Service = ({ imgUrl, title, description, id, active }) => {
  return (
    <Card active={active} href={`/prices/${id}`}>
      <Avatar imgUrl={imgUrl} alt={title} />
      <Typography className={classNames.title}>{title}</Typography>
      <p className={classNames.default}>{description}</p>
    </Card>
  );
};
