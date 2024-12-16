import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function HeaderWithDrawer() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  // Toggle drawer state
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Define navigation routes for the drawer items
  const drawerItems = [
    { label: "Dashboard", route: "/dashboard" },
    { label: "To Do", route: "/todo" },
    { label: "Class Schedule", route: "/schedule" },
    { label: "Fees", route: "/fees" },
    { label: "Report Card", route: "/report-card" },
    { label: "Assessments", route: "/assessments" },
    { label: "Messages", route: "/messages" },
    { label: "My Account", route: "/account" },
  ];

  return (
    <>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          {/* Menu Icon */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Title */}
          <h1 className="font-bold flex-1 text-[24px]">
            Three Rivers Local Schools
          </h1>

          {/* Right Button */}
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div className="font-semibold text-[24px] h-[65px] content-center border-b-2 p-4">
          Site Map
        </div>
        <List sx={{ width: 250 }}>
          {drawerItems.map((item) => (
            <ListItem
              button
              key={item.label}
              onClick={() => {
                navigate(item.route); // Navigate to the route
                setDrawerOpen(false); // Close the drawer after navigation
              }}
              className="cursor-pointer"
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
