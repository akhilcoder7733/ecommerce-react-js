import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";
import Lottie from "lottie-react";
import RegisterAnimation from "../assets/Animation - 1741609260960.json"; // Ensure the JSON file is present
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [agreeTerms, setAgreeTerms] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!username.trim()) {
      newErrors.username = "Username is required.";
      isValid = false;
    }
    if (!email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    }
    if (!password.trim()) {
      newErrors.password = "Password is required.";
      isValid = false;
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }
    if (!agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleRegister = () => {
    if (!validateForm()) {
      return;
    }
    navigate("/login"); // Navigate to home after successful registration
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Register - Terminal Wizard";
  }, []);


  return (
    <Container maxWidth="md">
      <Paper elevation={0} sx={{ p: 4, borderRadius: 3 }}>
        <Grid container spacing={2} alignItems="center">
          {/* Left Side - Registration Form */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 4 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Create an Account 🚀
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={2}>
                Sign up to get started.
              </Typography>

              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={!!errors.username}
                helperText={errors.username}
                margin="normal"
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
                margin="normal"
              />
              <TextField
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
                margin="normal"
              />
              <TextField
                type="password"
                label="Confirm Password"
                variant="outlined"
                fullWidth
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                margin="normal"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    color="primary"
                  />
                }
                label="I agree to the terms and conditions"
              />
              {errors.agreeTerms && (
                <Typography variant="body2" color="error">
                  {errors.agreeTerms}
                </Typography>
              )}

              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 2, py: 1.5, fontSize: 16 }}
                onClick={handleRegister}
              >
                Register
              </Button>

              <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
                Already have an account?{" "}
                <Link
                  onClick={() => navigate("/login")}
                  variant="body2"
                  underline="hover"
                  color="primary"
                  sx={{ cursor: "pointer" }}
                >
                  Login here
                </Link>
              </Typography>
            </Box>
          </Grid>

          {/* Right Side - Animation */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box sx={{ width: "80%" }}>
              <Lottie animationData={RegisterAnimation} loop />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Register;