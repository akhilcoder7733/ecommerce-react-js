import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)({
  position: "relative",
  fontSize: "1.2em",
  padding: "0.4em 1.4em",
  backgroundColor: "#BF0426",
  textDecoration: "none",
  border: "none",
  borderRadius: "0.5em",
  color: "#DEDEDE",
  boxShadow: "0.5em 0.5em 0.5em rgba(0, 0, 0, 0.3)",
  overflow: "hidden",
  transition: "transform 0.1s, box-shadow 0.1s",

  "&::before": {
    position: "absolute",
    content: '""',
    height: "0",
    width: "0",
    top: "0",
    left: "0",
    background: "linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 50%, rgba(150,4,31,1) 50%, rgba(191,4,38,1) 60%)",
    borderRadius: "0 0 0.5em 0",
    boxShadow: "0.2em 0.2em 0.2em rgba(0, 0, 0, 0.3)",
    transition: "0.3s",
  },

  "&:hover::before": {
    width: "1.6em",
    height: "1.6em",
  },

  "&:active": {
    boxShadow: "0.2em 0.2em 0.3em rgba(0, 0, 0, 0.3)",
    transform: "translate(0.1em, 0.1em)",
  },
});

const CustomButton2 = ({ children, onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default CustomButton2;
