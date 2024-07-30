import { Box } from '@mui/material';
import { RiskInsights, Trends } from './first-row';

const FirstRow = () => {
  return (
    <Box sx={{ display: 'flex', py: 5, alignItems: 'flex-start' }}>
      <RiskInsights />
      <Trends />
    </Box>
  );
};

export default FirstRow;
