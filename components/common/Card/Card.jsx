import { Button } from "@mui/material";

import classNames from "./Card.module.scss";

export const Card = ({ children }) => {
  return <Button className={classNames.card}>{children}</Button>;
};
