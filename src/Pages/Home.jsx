import React, { useEffect } from "react";
import { Box, Typography, Container, Grid, Paper, Stack, Card, CardContent } from "@mui/material";
import Lottie from "lottie-react";
import homeAnimation from "../assets/Animation - 1741609260960.json"; // Ensure JSON file is present
import Newsletter from "./Newsletter";
import WelcomePage from "./WelcomePage";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Home - Terminal Wizard";
  }, []);
  return (
   <>
   <WelcomePage/>
    <Container maxWidth="lg">
      
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Welcome to Our Platform 🚀
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          Experience the best services and features tailored just for you.
        </Typography>
      </Box>
      
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Animation */}
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "80%" }}>
            <Lottie animationData={homeAnimation} loop />
          </Box>
        </Grid>
        
        {/* Right Side - Features Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Why Choose Us?
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={2}>
              We offer top-notch features to enhance your experience.
            </Typography>
            
            <Stack spacing={2}>
              <Card elevation={0} sx={{ display: "flex", alignItems: "center" }}>
                <CardContent>
                  <Typography variant="body1">🔥 Seamless User Experience</Typography>
                </CardContent>
              </Card>
              <Card elevation={0} sx={{ display: "flex", alignItems: "center" }}>
                <CardContent>
                  <Typography variant="body1">💡 Innovative Features</Typography>
                </CardContent>
              </Card>
              <Card elevation={0} sx={{ display: "flex", alignItems: "center" }}>
                <CardContent>
                  <Typography variant="body1">🔒 Secure & Reliable</Typography>
                </CardContent>
              </Card>
              <Card elevation={0} sx={{ display: "flex", alignItems: "center" }}>
                <CardContent>
                  <Typography variant="body1">⚡ Fast & Responsive</Typography>
                </CardContent>
              </Card>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
      <Newsletter/>
      </>
  );
};

export default Home;