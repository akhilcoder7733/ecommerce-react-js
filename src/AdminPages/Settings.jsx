import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Switch,
  FormControlLabel,
  TextField,
  Button,
  Avatar,
  MenuItem,
  Select,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import CustomButton from "../Buttons/CustomButton";
import CustomButton2 from "../Buttons/CustomButton2";
import { ThemeContext } from "../context/ThemeContext";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [name, setName] = useState("Amal Krishna");
  const [email, setEmail] = useState("krishna@example.com");
  const [language, setLanguage] = useState("English");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogAction, setDialogAction] = useState("");
  const { mode, toggleTheme } = useContext(ThemeContext);


  const handleOpenDialog = (action) => {
    setDialogAction(action);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setDialogAction("");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Box sx={{ padding: 3, backgroundColor:"primary" }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Settings
      </Typography>

      <Grid container spacing={3}>
        {/* User Profile Settings */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Profile Settings
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar sx={{ width: 56, height: 56 }} />
                <Box>
                  <TextField
                    label="Name"
                    fullWidth
                    variant="outlined"
                    sx={{ marginBottom: 2 }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    label="Email"
                    fullWidth
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Box>
              </Box>
              <CustomButton
                sx={{ marginTop: 2 }}
                onClick={() => handleOpenDialog("save changes")}
              >
                Save Changes
              </CustomButton>
            </CardContent>
          </Card>
        </Grid>

        {/* Preferences */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Preferences
              </Typography>
              <Button variant="contained" onClick={toggleTheme}>
      Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
              <FormControlLabel
                control={
                  <Switch
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                  />
                }
                label="Dark Mode"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={notifications}
                    onChange={() => setNotifications(!notifications)}
                  />
                }
                label="Enable Notifications"
              />
              <Typography variant="body1" sx={{ marginTop: 2 }}>
                Language
              </Typography>
              <Select
                fullWidth
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                sx={{ marginTop: 1 }}
              >
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Spanish">Spanish</MenuItem>
                <MenuItem value="French">French</MenuItem>
              </Select>
            </CardContent>
          </Card>
        </Grid>

        {/* Security Settings */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Security
              </Typography>
              <TextField
                label="New Password"
                type="password"
                fullWidth
                variant="outlined"
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                variant="outlined"
              />
              <CustomButton
                variant="contained"
                sx={{ marginTop: 2 }}
                onClick={() => handleOpenDialog("update password")}
              >
                Update Password
              </CustomButton>
            </CardContent>
          </Card>
        </Grid>

        {/* Account Management */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Account Management
              </Typography>
              <CustomButton2
                variant="outlined"
                color="error"
                sx={{ marginTop: 1 }}
                onClick={() => handleOpenDialog("delete account")}
              >
                Delete Account
              </CustomButton2>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Confirmation Dialog */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to {dialogAction}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button
            variant="outlined"
            onClick={handleCloseDialog}
            color="primary"
            autoFocus
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Settings;
