import React from 'react';
import { Typography, styled } from '@mui/material';

const CustomTypography = styled(Typography)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  cursor: 'pointer',
  transition: 'color 0.3s ease',
  color: theme.palette.text.primary, // Default text color

  '&:before': {
    content: '""',
    position: 'absolute',
    bottom: '-2px', // Adjust as needed for underline thickness/position
    left: '0',
    width: '0',
    height: '2px', // Underline thickness
    backgroundColor: theme.palette.primary.main, // Underline color
    transition: 'width 0.3s ease',
  },

  '&:hover': {
    color: theme.palette.primary.main, // Hover text color
    '&:before': {
      width: '100%',
    },
  },
}));

function StyledTypography({ children, ...props }) {
  return <CustomTypography {...props}>{children}</CustomTypography>;
}

export default StyledTypography;