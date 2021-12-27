import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import classNames from "./Service.module.scss";

export const Service = ({ imgUrl, title, description, id }) => {
  return (
    <Button className={classNames.card}>
      <div>
        <Image
          width={80}
          height={80}
          className={classNames.avatar}
          src={imgUrl}
          alt={title}
        />
        <Typography className={classNames.title}>{title}</Typography>
        <p className={classNames.default}>{description}</p>
      </div>
    </Button>
  );
};
