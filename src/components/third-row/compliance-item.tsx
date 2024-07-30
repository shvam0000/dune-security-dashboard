import React from 'react';
import { Box, Typography } from '@mui/material';
import { ComplianceItemProps } from '../../util/props/props';

const ComplianceItem: React.FC<ComplianceItemProps> = ({
  icon: Icon,
  title,
  subtitle,
}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', py: 1 }}>
      <Box
        sx={{
          height: '50px',
          width: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          border: '1px solid #A2A099',
          borderRadius: 2,
          mr: 1,
        }}
      >
        <Icon sx={{ fontSize: 40, color: '#01FF82' }} />
      </Box>
      <Box>
        <Typography sx={{ color: 'white' }} variant="body1">
          {title}
        </Typography>
        <Typography sx={{ color: '#9A9892' }} variant="body2">
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default ComplianceItem;
