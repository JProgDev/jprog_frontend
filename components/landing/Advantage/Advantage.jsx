import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Advantage = ({ iconUrl, title, description, offset = 0 }) => {
  return (
    <Grid container className="mb-2">
      {offset > 0 && <Grid item xs={offset} />}
      <Grid item xs={2} className="text-center">
        <Image width={80} height={80} src={iconUrl} alt="code quality" />
      </Grid>
      <Grid item xs={10 - offset}>
        <Typography className="fs-2">{title}</Typography>
        <Typography>{description}</Typography>
      </Grid>
    </Grid>
  );
};
