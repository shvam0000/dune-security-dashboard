import { Box, CardContent } from '@mui/material';
import { Heading } from '../shared';
import { RiskBox } from '.';
import { riskData } from '../../util/constants/const';

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
