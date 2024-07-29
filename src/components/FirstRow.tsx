import { Card, CardContent, Typography, Box } from '@mui/material';

const FirstRow = () => {
  return (
    <Box sx={{ display: 'flex', py: 6 }}>
      <Box>
        <Card
          sx={{
            width: 300,
            bgcolor: '#333',
            color: '#fff',
            borderRadius: 3,
            position: 'relative',
          }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Risk Insights
            </Typography>
            <Box
              sx={{
                height: 150,
                width: 150,
                border: '1px solid #00b0f0',
                borderRadius: 2,
                p: 2,
                mb: 2,
                textAlign: 'center',
                position: 'relative',
              }}>
              <Typography sx={{ fontSize: 12 }}>RISK SCORE</Typography>
              <Box sx={{ pt: '10px' }}>
                <Box sx={{ fontWeight: 'bold', fontSize: 56 }}>39</Box>
                <Typography sx={{ fontSize: 12 }}>OUT OF 100</Typography>
              </Box>
              <Box
                sx={{
                  mx: 2,
                  bgcolor: '#00b0f0',
                  color: 'black',
                  fontWeight: 'medium',
                  borderRadius: '8px 8px 0 0', // Round the bottom corners
                  p: 0.01,
                  textAlign: 'center',
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}>
                Low
              </Box>
            </Box>
            <Box
              sx={{
                height: 150,
                width: 150,
                border: '1px solid #00b0f0',
                borderRadius: 2,
                p: 2,
                mb: 2,
                textAlign: 'center',
                position: 'relative',
              }}>
              <Typography sx={{ fontSize: 12 }}>SCORE CHANGE</Typography>
              <Box sx={{ pt: '10px' }}>
                <Box sx={{ fontWeight: 'bold', fontSize: 56 }}>5%</Box>
                <Typography sx={{ fontSize: 12 }}>PAST 30 DAYS</Typography>
              </Box>
              <Box
                sx={{
                  mx: 2,
                  bgcolor: '#00b0f0',
                  color: 'black',
                  fontWeight: 'medium',
                  borderRadius: '8px 8px 0 0', // Round the bottom corners
                  p: 0.01,
                  textAlign: 'center',
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}>
                Decreased
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box>
        <Card
          sx={{
            width: 300,
            bgcolor: '#333',
            color: '#fff',
            borderRadius: 3,
            position: 'relative',
          }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Trends
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default FirstRow;
