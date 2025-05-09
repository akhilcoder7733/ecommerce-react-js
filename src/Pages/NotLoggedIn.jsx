import React, { useEffect } from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButton from '../Buttons/CustomButton'
import Not from '../assets/images/not.png'


// Post@Qwerty@123

function NotLoggedIn() {
  const navigate = useNavigate();
useEffect(() => {
    document.title = "Login - Terminal Wizard";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        // background: "linear-gradient(135deg, #667eea, #764ba2)",
        padding: 2,
      }} data-aos="zoom-in"
    >
        <Card
          sx={{
            width: { xs: 320, sm: 400 },
            textAlign: "center",
            p: 3,
            boxShadow: 0,
            borderRadius: 3,
            background: "transparent",
          }}
        >
          <CardContent>
            <CardMedia component="img"
            src={Not}/>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#333" }}
            >
              You're Not Logged In
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: "#555" }}>
              Please log in to explore more features.
            </Typography>
           
              <CustomButton
                
                onClick={() => navigate("/login")}
                sx={{ textTransform: "none", fontSize: "1rem", px: 4 }}
              >
                Login
              </CustomButton>
         
          </CardContent>
        </Card>
    </Box>
  );
}

export default NotLoggedIn;
