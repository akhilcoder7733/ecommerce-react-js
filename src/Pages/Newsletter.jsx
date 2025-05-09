import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Snackbar,
  Alert,
  Paper,
} from "@mui/material";
import CustomButton from "../Buttons/CustomButton";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() !== "") {
      setOpen(true); // Show Snackbar
      setEmail(""); // Clear input field
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #6a11cb, #2575fc)", // Gradient Background
        padding: 3,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 5,
          borderRadius: 3,
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.9)", // Slight Transparency
          maxWidth: 500,
          width: "100%",
        }}
      >
        <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
          Subscribe to Our Newsletter 📩
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          Stay updated with our latest products and offers.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            label="Enter your email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                "&:hover fieldset": { borderColor: "#2575fc" }, // Hover Effect
              },
            }}
          />
          <CustomButton onClick={handleSubscribe} fullWidth>
            Subscribe
          </CustomButton>
        </Box>
      </Paper>

      {/* Snackbar Alert */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Thanks for Subscribing! 🎉
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Newsletter;
