//@ts-nocheck
import React from 'react';
import { dashboardData } from '../../data/Dashboard_Dune_Security';
import { Box, Typography, Grid } from '@mui/material';
import { Pie, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
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
        display: true,
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
        display: true,
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
    <Box sx={{ color: '#fff', padding: 2 }}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
            Risk Categories
          </Typography>
          <Box
            sx={{
              textAlign: 'center',
              padding: 2,
              backgroundColor: '#212121',
              border: '1px solid #424242',
              borderRadius: 2,
            }}>
            <Typography variant="caption" sx={{ color: '#757575', py: 2 }}>
              PERCENTAGE OF USERS
            </Typography>
            <Pie data={data} options={options} plugins={[centerTextPlugin]} />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6" gutterBottom>
            Risk Score Comparison
          </Typography>
          <Typography variant="body2">
            Your risk score is <strong>39 points</strong> higher than average
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Line data={riskScoreOverTimeData} options={lineOptions} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
