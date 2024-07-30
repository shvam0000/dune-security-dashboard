//@ts-nocheck
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Pie, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { Heading } from '../shared';
import { pieData, riskScoreOverTimeData } from '../../util/constants/const';

Chart.register(...registerables);

const Dashboard: React.FC = () => {
  const centerTextPlugin = {
    id: 'centerText',
    beforeDraw: (chart) => {
      const { ctx, chartArea } = chart;
      const { width, height } = chartArea;
      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#757575';
      const fontSize = (height / 200).toFixed(2);
      ctx.font = `bold ${fontSize}em Arial`;
      ctx.fillText('TOTAL USERS', width / 2, height / 2 + chart.legend.height);
      ctx.restore();
    },
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
        labels: {
          color: '#fff',
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    cutout: '60%',
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
        labels: {
          color: '#fff',
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          color: '#2D2C2B',
        },
        ticks: {
          color: '#A2A099',
        },
      },
      y: {
        grid: {
          display: true,
          color: '#757575',
        },
        ticks: {
          color: '#A2A099',
        },
      },
    },
  };

  return (
    <Box sx={{ color: '#fff', py: 2 }}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Heading heading="Risk Categories" />
          <Box
            sx={{
              textAlign: 'center',
              padding: 2,
              backgroundColor: '#161615',
              border: '1px solid #424242',
              borderRadius: 5,
              height: '85%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <Typography variant="caption" sx={{ color: '#A2A099', py: 2 }}>
              PERCENTAGE OF USERS
            </Typography>
            <Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <Pie
                data={pieData}
                options={pieOptions}
                plugins={[centerTextPlugin]}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Heading heading="Risk Score Comparison" />
          <Box
            sx={{
              textAlign: 'center',
              border: '1px solid #424242',
              p: 2,
              borderRadius: 5,
              backgroundColor: '#161615',
              height: '85%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <Typography
              sx={{
                px: 2,
                pb: 1,
                textAlign: 'left',
                display: 'flex',
                color: '#A2A099',
              }}
              variant="body2">
              YOUR RISK SCORE IS{' '}
              <Box sx={{ px: 1, color: '#BE331D' }}>
                <strong> 39 POINTS </strong>
              </Box>{' '}
              HIGHER THAN AVERAGE
            </Typography>
            <Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <Line data={riskScoreOverTimeData} options={lineOptions} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
