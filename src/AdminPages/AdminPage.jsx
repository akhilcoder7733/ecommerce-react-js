import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  useMediaQuery,
  Drawer,
  IconButton,
  AppBar,
  Toolbar,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Settings from "./Settings";
import Food from "./Food";
import Finance from "./Finance";
import Events from "./Events";
import Teachers from "./Teachers";
import Chat from "./Chat";
import Dashboard from "./Dashboard";
import Students from "./Students";
import CustomButton from "../Buttons/CustomButton";
import { useNavigate } from "react-router-dom";

const MainBox = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  backgroundColor: "#f4f4f9",
});

const SidePanelBox = styled(Box)({
  minHeight: "100vh",
  width: 250,
  backgroundColor: "#2e3b55",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 8,
  gap: 16,
});

const ContentBox = styled(Box)({
  flex: 1,
  padding: 24,
  backgroundColor: "#fff",
});

const StyledAvatar = styled(Avatar)({
  width: 80,
  height: 80,
  marginBottom: 16,
});

const StyledListItemButton = styled(ListItemButton)(({ active }) => ({
  color: active ? "#1c9bff" : "#fff",
  backgroundColor: active ? "#1c9bff33" : "transparent",
  borderRadius: 8,
  marginBottom: 8,
  "&:hover": {
    backgroundColor: "#1c9bff33",
    color: "#1c9bff",
  },
}));

const items = [
  { label: "Dashboard", icon: <DashboardOutlinedIcon />, component: <Dashboard /> },
  { label: "Chat", icon: <ChatBubbleOutlineOutlinedIcon />, component: <Chat /> },
  { label: "Students", icon: <PeopleOutlineOutlinedIcon />, component: <Students /> },
  { label: "Teachers", icon: <SchoolOutlinedIcon />, component: <Teachers /> },
  { label: "Events", icon: <EventOutlinedIcon />, component: <Events /> },
  { label: "Finance", icon: <AttachMoneyOutlinedIcon />, component: <Finance /> },
  { label: "Food", icon: <RestaurantMenuOutlinedIcon />, component: <Food /> },
  { label: "Settings", icon: <SettingsOutlinedIcon />, component: <Settings /> },
];

function AdminPage() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate();

  const ActiveComponent = items.find(item => item.label === activeItem).component;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Dashboard - Terminal Wizard";
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <SidePanelBox>
      <StyledAvatar>A</StyledAvatar>
      <Typography variant="h6">Admin Panel</Typography>
      <List>
        {items.map((item) => (
          <ListItem key={item.label} disablePadding>
            <StyledListItemButton
              active={activeItem === item.label}
              onClick={() => {
                setActiveItem(item.label);
                setDrawerOpen(false);
              }}
            >
              <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </StyledListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ width: "100%", backgroundColor: "#ffffff50" }} />
      <Box sx={{ display: "flex", gap: 2, flexDirection: "column", width: "100%", px: 2 }}>
  <Typography variant="h6" alignSelf="center">Back to home</Typography>
  <CustomButton fullWidth onClick={() => navigate('/home')}>Home</CustomButton>
</Box>

    </SidePanelBox>
  );

  return (
    <MainBox>
      {isMobile ? (
        <>
          <AppBar position="fixed" sx={{ backgroundColor: "#2e3b55" }}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" sx={{ marginLeft: 2 }}>
                Admin Panel
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerToggle}
          >
            {drawerContent}
          </Drawer>
          <Box sx={{ width: "100%", marginTop: 8 }}>{ActiveComponent}</Box>
        </>
      ) : (
        <>
          {drawerContent}
          <ContentBox>{ActiveComponent}</ContentBox>
        </>
      )}
    </MainBox>
  );
}

export default AdminPage;
