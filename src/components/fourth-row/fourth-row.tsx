import React from 'react';
import { dashboardData } from '../../data/Dashboard_Dune_Security';
import { Box, Typography, Grid } from '@mui/material';
import { Pie, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Dashboard = () => {
  const riskCategoriesData = {
    labels: ['Low Risk', 'Moderate Risk', 'High Risk', 'Severe Risk'],
    datasets: [
      {
        data: [
          dashboardData.risk_categories['Low risk'],
          dashboardData.risk_categories['Moderate risk'],
          dashboardData.risk_categories['High risk'],
          dashboardData.risk_categories['Severe risk'],
        ],
        backgroundColor: ['#8BC34A', '#FFEB3B', '#FFC107', '#F44336'],
      },
    ],
  };

  const riskScoreOverTimeData = {
    labels: dashboardData.risk_score_over_time.map((item) =>
      new Date(item.timestamp).toLocaleDateString()
    ),
    datasets: [
      {
        label: 'Your Risk Score',
        data: dashboardData.risk_score_over_time.map((item) => item.risk_score),
        borderColor: '#FF5722',
        fill: false,
      },
      {
        label: 'Average Risk Score',
        data: dashboardData.risk_score_over_time.map(
          () =>
            // Calculate average risk score as needed
            60 // Placeholder value
        ),
        borderColor: '#FFC107',
        fill: false,
      },
    ],
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
      },
      tooltip: {
        enabled: true,
      },
    },
    cutout: '50%',
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  return (
    <Box sx={{ color: '#fff', padding: 2 }}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Typography variant="h6" sx={{ color: '#fff' }}>
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
            <Pie data={data} options={options} />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6">Risk Score Comparison</Typography>
            <Typography variant="body2">
              Your risk score is <strong>39 points</strong> higher than average
            </Typography>
            <Line data={riskScoreOverTimeData} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
