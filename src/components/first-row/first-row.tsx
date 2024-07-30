import { Box } from '@mui/material';
import { RiskInsights, Trends } from '.';

const FirstRow = () => {
  return (
    <Box sx={{ display: 'flex', py: 5, alignItems: 'flex-start' }}>
      <RiskInsights />
      <Trends />
    </Box>
  );
};

export default FirstRow;
