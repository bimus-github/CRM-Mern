import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const navItems = [
  {
    name: "Home",
    path: "/homeAdmin",
  },
  {
    name: "Teachers",
    path: "/admin/teachrs",
  },
  {
    name: "Students",
    path: "/admin/students",
  },
  {
    name: "Groups",
    path: "/admin/groups",
  },
  {
    name: "Create",
    path: "/admin/create",
  },
];

function RouteHomeAdmin({ children }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      sx={{
        backgroundImage: "url(https://source.unsplash.com/random)",
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        minHeight: 1000,
      }}
    >
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link to={`${item.path}`} style={{ textDecorationLine: "none" }}>
                <Button
                  key={item.name}
                  sx={{
                    color: location.pathname === item.path ? "#fff" : "#000",
                  }}
                  style={{
                    fontFamily: "fantasy",
                    fontFamily: "sans-serif",
                    fontSize: location.pathname === item.path ? "18px" : "16px",
                  }}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="div" sx={{ p: 5 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default RouteHomeAdmin;
