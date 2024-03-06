/* eslint-disable no-unused-vars */
import React from "react";

import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import {
  IconButton,
  Box,
  Divider,
  Drawer,
  Badge,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Toolbar,
  Typography,
  AppBar,
} from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];
const newLocal = [
  { cat: "Children", path: "3" },
  { cat: "Men", path: "2" },
  { cat: "Women", path: "1" },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ paddingY: "8px" }}>
        <Link to="/">
          <Typography variant="h4" color="initial">
            LAMOSTORE
          </Typography>
        </Link>
      </Box>
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <Link key={i} to="/">
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "start" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <Divider orientation="horizontal" variant="middle" flexItem />
        <Typography
          sx={{ color: "steelblue", textAlign: "start", p: "10px" }}
          variant="h4"
          color="initial"
        >
          Categories
        </Typography>

        {newLocal.map((item, i) => (
          <Link key={i} to={`products/${item.path}`}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "start" }}>
                <ListItemText primary={item.cat} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            <Link to="/">LAMOSTORE</Link>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            {newLocal.map((item, i) => (
              <Link key={i} to={`products/${item.path}`}>
                <Button sx={{ color: "#fff" }}>{item.cat}</Button>
              </Link>
            ))}
            <Divider orientation="vertical" variant="middle" flexItem />
            {navItems.map((item, i) => (
              <Link key={i} to="/">
                <Button sx={{ color: "#fff" }}>{item}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      
    </Box>
  );
}

export default DrawerAppBar;

// done