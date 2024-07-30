import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts';
import { Heading } from '../shared';
import { ComplianceItem } from '.';
import { complianceData } from '../../util/constants/const';

const ThirdRow: React.FC = () => {
  return (
    <Box sx={{ color: '#fff', pb: 5 }}>
      <Heading heading="Compliance" />
      <Box
        sx={{
          p: 2,
          backgroundColor: '#161615',
          border: '1px solid #424242',
          borderRadius: 5,
        }}
      >
        <Typography
          gutterBottom
          sx={{ pl: 2, pb: 2, color: '#A2A099', fontSize: 16 }}
        >
          TRAINING COMPLETION STATUS
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Grid container spacing={2} sx={{ px: 1 }}>
              {complianceData.map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <ComplianceItem
                    icon={item.icon}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ color: '#fff' }}>
              <BarChart
                sx={{
                  color: 'white',
                  '& .MuiChartsAxis-label': {
                    fill: 'white',
                  },
                  '& .MuiChartsBarLabel-label': {
                    fill: 'white',
                  },
                }}
                xAxis={[
                  {
                    scaleType: 'band',
                    data: [
                      'GDPR',
                      'GLBA',
                      'SOC2 Type 2',
                      'HIPAA',
                      'ISO 27001',
                      'NIST',
                      'PCI DSS',
                    ],
                  },
                ]}
                series={[
                  {
                    data: [20, 20, 20, 20, 20, 20, 20],
                    label: 'Not Started',
                    type: 'bar',
                    color: '#F03C1F', // Color for 'Not Started'
                  },
                  {
                    data: [46, 46, 46, 46, 46, 46, 46],
                    label: 'In Progress',
                    type: 'bar',
                    color: '#5F5F5F', // Color for 'In Progress'
                  },
                  {
                    data: [34, 34, 34, 34, 34, 34, 34],
                    label: 'Completed',
                    type: 'bar',
                    color: '#01FF82', // Color for 'Completed'
                  },
                ]}
                width={800}
                height={300}
                barLabel={(item) => `${item.value}%`}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ThirdRow;
