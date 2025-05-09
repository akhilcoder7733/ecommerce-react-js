import React from 'react';
import { Link, styled } from '@mui/material';

const StyledLink = styled(Link)(({ theme }) => ({
  position: 'relative',
  textDecoration: 'none',
  color: theme.palette.text.primary,
  transition: 'color 0.3s ease',
  fontSize: '16px',
  letterSpacing: '0.5px', // optional letter spacing
  // fontFamily: 'Roboto, sans-serif', // optional font change

  '&:before': {
    content: '""',
    position: 'absolute',
    bottom: '-1.5px', // Slightly lower
    left: '0',
    width: '0',
    height: '1.2px', // Slightly thicker
    backgroundColor: theme.palette.primary.main,
    transition: 'width 0.25s ease-in-out', // Smoother transition
    boxShadow: '0 0.5px 1px rgba(0, 0, 0, 0.1)', // Subtle shadow
  },

  '&:hover': {
    color: theme.palette.primary.main,
    '&:before': {
      width: '100%',
    },
  },
}));

function CustomLink({ children, ...props }) {
  return <StyledLink {...props}>{children}</StyledLink>;
}

export default CustomLink;