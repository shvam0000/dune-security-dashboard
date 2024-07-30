//@ts-nocheck
import React from 'react';
import { dashboardData } from '../../data/Dashboard_Dune_Security';
import { Box, Typography, Grid } from '@mui/material';
import { Pie, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { Heading } from '../shared';
Chart.register(...registerables);

const Dashboard = () => {
  const riskScoreOverTimeData = {
    labels: dashboardData.risk_score_over_time.map((item) =>
      new Date(item.timestamp).toLocaleDateString()
    ),
    datasets: [
      {
        label: 'Your Risk Score',
        data: dashboardData.risk_score_over_time.map((item) => item.risk_score),
        borderColor: '#FF5722',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Average Risk Score',
        data: dashboardData.risk_score_over_time.map(() => 60), // Placeholder value
        borderColor: '#FFC107',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

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

  const data = {
    labels: ['Low Risk', 'Moderate Risk', 'High Risk', 'Severe Risk'],
    datasets: [
      {
        data: [
          dashboardData.risk_categories['Low risk'],
          dashboardData.risk_categories['Moderate risk'],
          dashboardData.risk_categories['High risk'],
          dashboardData.risk_categories['Severe risk'],
        ],
        backgroundColor: ['#4CAF50', '#FFEB3B', '#FF9800', '#F44336'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
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
          color: '#fff',
        },
      },
      y: {
        grid: {
          display: true,
          color: '#757575',
        },
        ticks: {
          color: '#fff',
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
              backgroundColor: '#212121',
              border: '1px solid #424242',
              borderRadius: 5,
              height: '85%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <Typography variant="caption" sx={{ color: '#757575', py: 2 }}>
              PERCENTAGE OF USERS
            </Typography>
            <Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <Pie data={data} options={options} plugins={[centerTextPlugin]} />
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
              backgroundColor: '#212121',
              height: '85%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <Typography
              sx={{ px: 2, pb: 1, textAlign: 'left' }}
              variant="body2">
              Your risk score is <strong>39 points</strong> higher than average
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
