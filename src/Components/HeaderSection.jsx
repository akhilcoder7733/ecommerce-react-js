import {
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  ListItemIcon,
  Popover,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { Link, useNavigate } from "react-router-dom";
import CustomLink from "./CustomLink";
import CloseIcon from "@mui/icons-material/Close";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
// import CustomButton from "../Buttons/CustomButton";
import CustomButton2 from "../Buttons/CustomButton2";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import InfoIcon from '@mui/icons-material/Info';

const navItems = [
  { label: "Home", path: "/home", icon: <HomeOutlinedIcon /> },
  {
    label: "Home 2",
    path: "/Home2",
    icon: <AdminPanelSettingsOutlinedIcon />,
  },
  { label: "Products", path: "/products", icon: <Inventory2OutlinedIcon /> },
  {
    label: "Admin Panel",
    path: "/admin",
    icon: <AdminPanelSettingsOutlinedIcon />,
  },
  
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function HeaderSection() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    setOpenLogoutDialog(true);
    setAnchorEl(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const confirmLogout = () => {
    logout();
    setOpenLogoutDialog(false);
    setAnchorEl(null);
    setMobileOpen(false);
    navigate('/home')
  };

  const cancelLogout = () => {
    setOpenLogoutDialog(false);
    setMobileOpen(false);
  };

  const handleNavigation = (path) => {
    setMobileOpen(false);
    navigate(path);
  };
  

  const drawer = (
    <Box sx={{ textAlign: "center", width: 240, position: "relative" }}>
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          position: "absolute",
          top: 22,
          left: 8,
          color: "#333",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.15)",
            transform: "scale(1.1)",
            transition: "0.3s ease-in-out",
          },
        }}
      >
        <CloseIcon sx={{ fontSize: 22 }} />
      </IconButton>

      <Typography variant="h6" sx={{ my: 3 }}>
        TerminalWizard
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton onClick={() => handleNavigation(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HelpOutlineOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Help" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => { setMobileOpen(false); navigate("/about"); }}>
                <ListItemIcon>
                  <HelpOutlineOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="About US" />
              </ListItemButton>
            </ListItem>
        <Divider />
        {isAuthenticated ? (
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <LogoutOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        ) : (
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("/login")}>
              <ListItemIcon>
                <LoginOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 32px",
        backgroundColor: "transparent",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Box
        component={Link}
        to="/home"
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
          textDecoration: "none",
          color: "#333",
        }}
      >
        TerminalWizard!
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          gap: 3,
          alignItems: "center",
        }}
      >
        {navItems.map((item) => (
          <CustomLink key={item.label} component={Link} to={item.path}>
            {item.label}
          </CustomLink>
        ))}

        <IconButton aria-describedby={id} onClick={handleClick}>
          <AccountCircleIcon />
        </IconButton>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <List sx={{ width: "200px" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HelpOutlineOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Help" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton onClick={() => { setAnchorEl(null); navigate("/about"); }}>
            <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About Us" />
              </ListItemButton>
            </ListItem>
            <Divider />
            {isAuthenticated ? (
              <ListItem disablePadding>
                <ListItemButton onClick={handleLogout}>
                  <ListItemIcon>
                    <LogoutOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            ) : (
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleNavigation("/login")}>
                  <ListItemIcon>
                    <LoginOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Login" />
                </ListItemButton>
              </ListItem>
            )}
          </List>
        </Popover>
      </Box>

      <IconButton
        onClick={handleDrawerToggle}
        sx={{ display: { md: "none" }, color: "#333", ml: "auto" }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>

      <Dialog
        open={openLogoutDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={cancelLogout}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Confirm Logout"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelLogout}>Cancel</Button>
          <CustomButton2 onClick={confirmLogout}>Logout</CustomButton2>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default HeaderSection;
