import React, { useState } from "react";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import { theme } from "../../theme";
import { menuStyling, menuStyling2 } from "./HeaderStyling";
import navBarData from "./NavBarData.json";

const NavBar = () => {
  const [anchorNav, setAnchorNav] = useState(null);

  const handleOpenNavBar = (event) => {
    setAnchorNav(event.currentTarget);
  };

  const handleCloseNavBar = () => {
    setAnchorNav(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: theme.palette.secondary.main }}
      >
        {/* <Container maxWidth="xl"> */}
        <Toolbar disableGutters>
          <Typography noWrap variant="h4" sx={{ flexGrow: 1 }}>
            {"<pk />"}
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {navBarData.map((item) => (
              <Button
                key={item.id}
                onClick={handleCloseNavBar}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <a href={`#${item.label}`} style={menuStyling}>
                  {item.label}
                </a>
                {/* {item.label} */}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              color="inherit"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              aria-label="account of current user"
              onClick={handleOpenNavBar}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorNav)}
              onClose={handleCloseNavBar}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navBarData.map((item) => (
                <MenuItem key={item.id} onClick={handleCloseNavBar}>
                  <Typography textAlign="center">
                    <a
                      href={`#${item.label}`}
                      style={menuStyling2}
                      rel="noreferrer"
                    >
                      {item.label}
                    </a>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        {/* </Container> */}
      </AppBar>
    </>
  );
};

export default NavBar;
