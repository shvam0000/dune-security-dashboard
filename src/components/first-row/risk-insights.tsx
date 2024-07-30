import { Box, CardContent } from '@mui/material';
import { Heading } from '../shared';
import { RiskBox } from '.';

const riskData = [
  {
    title: 'RISK SCORE',
    score: 39,
    subtitle: 'OUT OF 100',
    label: 'Low',
  },
  {
    title: 'SCORE CHANGE',
    score: '5%',
    subtitle: 'PAST 30 DAYS',
    label: 'Decreased',
  },
];

const RiskInsights = () => {
  return (
    <Box>
      <Heading heading="Risk Insights" />
      <Box sx={{ color: '#fff', borderRadius: 3, position: 'relative' }}>
        <CardContent>
          {riskData.map((data, index) => (
            <RiskBox
              key={index}
              title={data.title}
              score={data.score}
              subtitle={data.subtitle}
              label={data.label}
            />
          ))}
        </CardContent>
      </Box>
    </Box>
  );
};

export default RiskInsights;
