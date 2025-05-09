import React from 'react';
import { Box, Typography, Link, Container, Grid, styled } from '@mui/material';

// Styled Components
const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900], // Dark background
  color: theme.palette.grey[400], // Light grey text
  padding: theme.spacing(6, 0),
  '& a': {
    color: theme.palette.grey[400],
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
      color: theme.palette.primary.light,
    },
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.grey[400],
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
    color: theme.palette.primary.light,
  },
}));

const Footer = () => {
  return (
    <StyledFooter component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a company dedicated to providing high-quality products and services.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box display="flex" flexDirection="column">
              <StyledLink href="/about">About</StyledLink>
              <StyledLink href="/contact">Contact</StyledLink>
              <StyledLink href="/privacy">Privacy Policy</StyledLink>
              <StyledLink href="/terms">Terms of Service</StyledLink>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              Akhil John
            </Typography>
            <Typography variant="body2">
              Parayuullaa, Kottayam, India
            </Typography>
            <Typography variant="body2">
              Email: info@example.com
            </Typography>
            <Typography variant="body2">
              Phone: +1 123 456 7890
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box display="flex" flexDirection="column">
              <StyledLink href="https://www.facebook.com">Facebook</StyledLink>
              <StyledLink href="https://www.twitter.com">Twitter</StyledLink>
              <StyledLink href="https://www.instagram.com">Instagram</StyledLink>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} TerminalWizard. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;