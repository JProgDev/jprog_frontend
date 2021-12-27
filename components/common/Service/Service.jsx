import { Typography } from "@mui/material";
import Link from "next/link";
import Avatar from "../Avatar";
import Card from "../Card";

import classNames from "./Service.module.scss";

export const Service = ({ imgUrl, title, description, id }) => {
  return (
    <Card>
      <Link href={`/prices/${id}`}>
        <a>
          <Avatar imgUrl={imgUrl} alt={title} />
          <Typography className={classNames.title}>{title}</Typography>
          <p className={classNames.default}>{description}</p>
        </a>
      </Link>
    </Card>
  );
};
