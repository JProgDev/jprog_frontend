import { Button as MuiButton } from "@mui/material";

export const Button = ({ children, className, variant = "contained" }) => {
  return (
    <MuiButton variant={variant} className={className}>
      {children}
    </MuiButton>
  );
};
