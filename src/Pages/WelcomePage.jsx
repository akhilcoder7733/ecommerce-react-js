import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CustomButton from "../Buttons/CustomButton";

const Background = styled(Box)({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  background: "linear-gradient(to bottom,transparent,rgb(242, 130, 130), #fdbb2d)",
  color: "#fff",
  position: "relative",
  overflow: "hidden",
});

const Star = styled(motion.div)({
  position: "absolute",
  width: 4,
  height: 4,
  backgroundColor: "#fff",
  borderRadius: "50%",
  opacity: 0.8,
});

const StyledButton = styled(Button)({
  borderRadius: 25,
  fontSize: "1rem",
  padding: "10px 20px",
  margin: "10px",
});

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <Background>
      {/* Stars Animation */}
      {[...Array(20)].map((_, i) => (
        <Star
          key={i}
          animate={{
            x: [0, Math.random() * 300 - 150],
            y: [0, Math.random() * 500 - 250],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}
      
      <Typography variant="h2" component={motion.div} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        WELCOME
      </Typography>
      <Typography variant='subtitle1'>- Akhil John -</Typography>
      <Typography variant="body1" component={motion.div} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
        Explore the world of opportunities with us.
      </Typography>
      
      <Box mt={3}>
        <CustomButton
        //   variant="contained"
        //   color="primary"
          onClick={() => navigate("/get-started")}
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started Now
        </CustomButton>
        <StyledButton
          variant="outlined"
          color="inherit"
          onClick={() => navigate("/learn-more")}
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More
        </StyledButton>
      </Box>
    </Background>
  );
}

export default WelcomePage;
