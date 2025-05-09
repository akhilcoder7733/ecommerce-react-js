import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)({
  alignItems: "center",
  backgroundColor: "#bdddfc",
  borderRadius: "12px",
  boxShadow: "transparent 0 0 0 3px, rgba(18, 18, 18, 0.1) 0 6px 20px",
  boxSizing: "border-box",
  color: "#121212",
  cursor: "pointer",
  display: "inline-flex",
  flex: "1 1 auto",
  fontFamily: "Inter, sans-serif",
  fontSize: "1.2rem",
  fontWeight: "700",
  justifyContent: "center",
  lineHeight: "1",
  margin: "0",
  outline: "none",
  padding: "1rem 1.2rem",
  textAlign: "center",
  textDecoration: "none",
  transition: "box-shadow 0.2s",
  whiteSpace: "nowrap",
  border: "0",
  userSelect: "none",
  touchAction: "manipulation",

  "&:hover": {
    boxShadow: "#121212 0 0 0 3px, transparent 0 0 0 0",
    backgroundColor: "#f5f5f5",
  },
});

const CustomButton = ({ children, onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
