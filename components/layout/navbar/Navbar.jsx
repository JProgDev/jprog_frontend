import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  Typography,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

import { links } from "./Navbar.data";
import classNames from "./Navbar.module.scss";
import { NavItem } from "./components";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" className={classNames.navbar}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <IconButton sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
            <Link href="/#" passHref>
              <Image
                width={100}
                height={50}
                src={"/images/logo.svg"}
                alt="JProg logo"
              />
            </Link>
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}
              icon
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              keepMounted
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {links.map((link, index) => (
                <Link href={link.href || ""} passHref key={link.name || index}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{link.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <IconButton sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Link href="/#" passHref>
              <Image
                width={100}
                height={50}
                src={"/images/logo.svg"}
                alt="JProg logo"
              />
            </Link>
          </IconButton>
          <Box
            className={classNames["navbar-menu"]}
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {links.map((link, index) => (
              <NavItem
                key={index}
                {...link}
                handleCloseNavMenu={handleCloseNavMenu}
              />
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { Navbar };
