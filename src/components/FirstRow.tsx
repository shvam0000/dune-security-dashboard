//@ts-nocheck
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { RiskInsights, Trends } from './first-row';

const FirstRow = () => {
  return (
    <Box sx={{ display: 'flex', py: 6 }}>
      <RiskInsights />
      <Trends />
    </Box>
  );
};

export default FirstRow;
