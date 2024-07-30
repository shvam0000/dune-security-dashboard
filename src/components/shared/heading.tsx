import { Box, Typography } from '@mui/material';
import React from 'react';
import HelpIcon from '@mui/icons-material/Help';
import { HeadingProps } from '../../util/props/props';

const Heading: React.FC<HeadingProps> = ({ heading }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignContent: 'center',
        alignItems: 'start',
        color: 'white',
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          pl: 2,
        }}
      >
        {heading}
      </Typography>
      <Box
        sx={{
          pl: 0.5,
          color: '#676662',
        }}
      >
        <HelpIcon />
      </Box>
    </Box>
  );
};

export default Heading;
