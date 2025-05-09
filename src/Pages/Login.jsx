import { useEffect, useState } from "react";
import {
  TextField,
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";
import { useLoading } from "../LoadingContext";
import Lottie from "lottie-react";
import loginAnimation from "../assets/Animation - 1741607956014.json"; // Ensure the JSON file is present
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import CustomButton from "../Buttons/CustomButton";

const Login = () => {
  const { setLoading } = useLoading();
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    document.title = "Login - Terminal Wizard";
  }, []);

  const validateForm = () => {
    let newErrors = { email: "", password: "" };
    let isValid = true;


    if (!password.trim()) {
      newErrors.password = "Password is required.";
      isValid = false;
    }

    if (!username.trim()) {
      newErrors.username = "username is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      login();
      navigate("/home");
    }, 2000);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Container maxWidth="md">
      <Paper elevation={0} sx={{ p: 4, borderRadius: 3 }}>
        <Grid container spacing={2} alignItems="center">
          {/* Left Side - Login Form */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 4 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Welcome Back 👋
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={2}>
                Sign in to continue.
              </Typography>
              <Typography variant="subtitle2">
  <span style={{ color: "inherit" }}>Please note:</span>{" "}
  <span style={{ color: "red" }}>
    You can type any text and click login button to login.</span>
</Typography>

              <TextField
                label="username"
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={!!errors.username}
                helperText={errors.username}
                margin="normal"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                type="password"
                label="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 1,
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      color="primary"
                    />
                  }
                  label="Remember Me"
                />
                <Link
                  onClick={() => navigate("/forgot-password")}
                  variant="body2"
                  underline="hover"
                  sx={{ cursor: "pointer" }}
                >
                  Forgot Password?
                </Link>
              </Box>

              {/* <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 2, py: 1.5, fontSize: 16 }}
                
              >
                Login
              </Button> */}
              <CustomButton fullWidth onClick={handleLogin}>
                Login
              </CustomButton>

              <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
                Don't have an account?{" "}
                <Link
                  onClick={() => navigate("/register")}
                  variant="body2"
                  underline="hover"
                  color="primary"
                  sx={{ cursor: "pointer" }}
                >
                  Register here
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
              <Lottie animationData={loginAnimation} loop />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Login;
