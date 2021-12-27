import { Button as MuiButton } from "@mui/material";

export const Button = ({ children }) => {
  return <MuiButton variant="contained">{children}</MuiButton>;
};
