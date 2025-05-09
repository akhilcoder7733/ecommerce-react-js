import React, { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import animationData from "../assets/Animation - 1740732064418.json";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.title = "Page not found - Terminal Wizard";
    }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      sx={{ px: 3 }}
    >
      <Box width={{ xs: 300, md: 400 }} data-aos="fade-up">
        <Lottie animationData={animationData} loop />
      </Box>

      <Typography variant="h4" fontWeight="bold" mt={-3} gutterBottom>
        Oops! Page Not Found
      </Typography>

      <Typography variant="body1" color="text.secondary" mb={3}>
        The page you are looking for might have been removed or is temporarily unavailable.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/home")}
        sx={{ borderRadius: 2, px: 3 }}
      >
        Go Back Home
      </Button>
    </Box>
  );
}

export default NotFound;
