import { Box, Grid, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts';
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';
import HouseSidingOutlinedIcon from '@mui/icons-material/HouseSidingOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import HourglassDisabledOutlinedIcon from '@mui/icons-material/HourglassDisabledOutlined';
import { Heading } from '../shared';

const ThirdRow = () => {
  const data = [
    {
      icon: PrivacyTipOutlinedIcon,
      title: 'GDPR',
      subtitle: '34% of users',
    },
    {
      icon: HouseSidingOutlinedIcon,
      title: 'GLBA',
      subtitle: '34% of users',
    },
    {
      icon: ShieldOutlinedIcon,
      title: 'SOC2 Type 2',
      subtitle: '34% of users',
    },
    {
      icon: LocalHospitalOutlinedIcon,
      title: 'HIPAA',
      subtitle: '34% of users',
    },
    {
      icon: SecurityOutlinedIcon,
      title: 'ISO 27001',
      subtitle: '34% of users',
    },
    {
      icon: FolderOpenOutlinedIcon,
      title: 'NIST',
      subtitle: '34% of users',
    },
    {
      icon: HourglassDisabledOutlinedIcon,
      title: 'PCI DSS',
      subtitle: '34% of users',
    },
  ];

  return (
    <Box sx={{ color: '#fff' }}>
      <Heading heading="Compliance" />
      <Box
        sx={{
          my: 2,
          p: 2,
          backgroundColor: '#212121',
          border: '1px solid #424242',
          borderRadius: 5,
        }}>
        <Typography variant="h6" gutterBottom sx={{ pl: 2 }}>
          Training Completion Status
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Grid container spacing={2} sx={{ px: 1 }}>
              {data.map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      py: 1,
                    }}>
                    <Box
                      sx={{
                        height: '50px',
                        width: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'black',
                        border: '1px solid white',
                        borderRadius: 2,
                        mr: 1,
                      }}>
                      <item.icon sx={{ fontSize: 40, color: 'green' }} />
                    </Box>
                    <Box sx={{ color: 'white' }}>
                      <Typography variant="body1">{item.title}</Typography>
                      <Typography
                        sx={{ color: 'white' }}
                        variant="body2"
                        color="textSecondary">
                        {item.subtitle}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ color: '#fff' }}>
              <BarChart
                sx={{
                  'color': 'white',
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
                  },
                  { data: [46, 46, 46, 46, 46, 46, 46], label: 'In Progress' },
                  { data: [34, 34, 34, 34, 34, 34, 34], label: 'Completed' },
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
