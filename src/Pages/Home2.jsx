// src/pages/Home2.jsx
import React, { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(4),
  background: theme.palette.mode === 'light'
    ? 'linear-gradient(135deg,rgb(130, 198, 247) 0%,rgb(255, 155, 155) 100%)'
    : 'linear-gradient(135deg, #1a237e 0%, #121212 100%)',
  color: theme.palette.text.primary,

  // Responsive styling for small screens
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1.2, 3),
  borderRadius: '12px',
  fontSize: '1rem',
  textTransform: 'none',
  boxShadow: theme.shadows[3],

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    fontSize: '0.9rem',
  },
}));

const ResponsiveTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
}));

function Home2() {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.title = "Home2 - Terminal Wizard";
    }, []);

  return (
    <HeroSection>
      <ResponsiveTypography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        Welcome to TerminalWizard!
      </ResponsiveTypography>

      <Typography variant='subtitle1'>- Akhil John -</Typography>

      <Typography variant="h6" sx={{ maxWidth: 600, mb: 4, px: 2 }}>
        Create, customize, and manage your content beautifully with our modern React + MUI setup.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <StyledButton variant="contained" color="primary">
          Get Started
        </StyledButton>
        <StyledButton variant="outlined" color="primary">
          Learn More
        </StyledButton>
      </Box>
    </HeroSection>
  );
}

export default Home2;
