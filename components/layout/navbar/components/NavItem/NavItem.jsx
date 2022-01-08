import { Button, MenuItem, MenuList } from "@mui/material";
import Link from "next/link";

import classNames from "./NavItem.module.scss";

export const NavItem = ({ children, ...props }) => {
  return (
    <Link
      href={props.href || ""}
      key={props.name || index}
      passHref={props.passHref || false}
    >
      <a className={classNames["nav-item"]}>
        <Button
          onClick={props.handleCloseNavMenu}
          sx={{ mx: 2, color: "black", display: "block" }}
        >
          <span className={`${classNames.right} ${classNames.line}`} />
          <span className={`${classNames.top} ${classNames.line}`} />
          <span className={`${classNames.left} ${classNames.line}`} />
          <span className={`${classNames.bottom} ${classNames.line}`} />
          {props.name}
        </Button>
        {Array.isArray(children) && (
          <div className={classNames.dropdown}>
            <MenuList className={classNames.list}>
              {children.map((link, index) => (
                <MenuItem key={index}>
                  <Link href={link.href || "/"}>
                    <a>{link.name}</a>
                  </Link>
                </MenuItem>
              ))}
            </MenuList>
          </div>
        )}
      </a>
    </Link>
  );
};
