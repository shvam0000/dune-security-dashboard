import { Box, Typography } from '@mui/material';
import { RiskBoxProps } from '../../util/props/props';
import React from 'react';

const RiskBox: React.FC<RiskBoxProps> = ({ title, score, subtitle, label }) => {
  return (
    <Box
      sx={{
        height: 150,
        width: 150,
        border: '2px solid #00b0f0',
        borderTop: 'none',
        borderRadius: 2,
        p: 2,
        mb: 2,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background:
            'linear-gradient(to right, #00b0f0, #2E8B7A 5%, #2E8B7A 95%, #00b0f0)',
        }}
      />
      <Typography sx={{ fontSize: 16, color: '#A2A099' }}>{title}</Typography>
      <Box sx={{ pt: '10px' }}>
        <Box sx={{ fontWeight: 'bold', fontSize: 56 }}>{score}</Box>
        <Typography sx={{ fontSize: 12, color: '#A2A099' }}>
          {subtitle}
        </Typography>
      </Box>
      <Box
        sx={{
          mx: 2,
          bgcolor: '#00b0f0',
          color: 'black',
          fontWeight: 'medium',
          borderRadius: '8px 8px 0 0',
          p: 0.01,
          textAlign: 'center',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        {label}
      </Box>
    </Box>
  );
};

export default RiskBox;
