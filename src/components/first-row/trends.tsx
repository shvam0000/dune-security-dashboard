import {
  Box,
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ReferenceLine,
} from 'recharts';
import { dashboardData } from '../../data/Dashboard_Dune_Security';

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
  }>;
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <div
          style={{
            backgroundColor: '#ffc107',
            color: 'black',
            padding: '5px',
            borderRadius: '4px',
            position: 'relative',
            zIndex: 1,
            minWidth: '50px',
            textAlign: 'center',
          }}>
          {Math.floor(payload[0].value)}%
        </div>
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderTop: '5px solid #ffc107',
            margin: '0 auto',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: '-5px',
          }}
        />
      </div>
    );
  }

  return null;
};

const Trends = () => {
  const [count, setCount] = useState(1);
  const [chartHeight, setChartHeight] = useState(365);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      setChartHeight(boxRef.current.clientHeight - 48); // Subtracting padding
    }
  }, []);

  return (
    <Container sx={{ display: 'flex', height: '100%' }}>
      <Card
        sx={{
          color: '#fff',
          borderRadius: 3,
          position: 'relative',
          bgcolor: '#161615',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Trends
          </Typography>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid #00b0f0',
              borderRadius: 2,
              p: 2,
            }}
            ref={boxRef}>
            <LineChart
              width={600}
              height={chartHeight}
              data={dashboardData.risk_score_over_time}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid horizontal={true} vertical={false} stroke="#555" />
              <XAxis
                dataKey="timestamp"
                tickFormatter={(tick) => moment(tick).format('D MMM')}
                tick={{ fill: '#aaa' }}
              />
              <YAxis tick={{ fill: '#aaa' }} domain={[0, 100]} />
              <Tooltip
                content={
                  <CustomTooltip
                    active={undefined}
                    payload={undefined}
                    label={undefined}
                  />
                }
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="risk_score"
                stroke="#ffc107"
                dot={{ fill: '#ffc107' }}
              />
              <ReferenceLine
                x="2024-05-15"
                stroke="yellow"
                label={{
                  value: '77%',
                  position: 'insideTopRight',
                  fill: 'yellow',
                  fontSize: 12,
                }}
              />
            </LineChart>
          </Box>
        </CardContent>
      </Card>
      <Box
        sx={{
          bgcolor: '#161615',
          border: '1px solid #272725',
          textAlign: 'center',
          width: 250,
          borderRadius: 5,
          mx: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: 448,
        }}>
        <Box sx={{ bgcolor: 'transparent' }}>
          <Box
            sx={{
              color: 'white',
              bgcolor: '#161615',
              py: 2,
              borderRadius: 5,
            }}>
            HIGH RISK AREAS
          </Box>
          <List
            sx={{
              color: 'white',
              bgcolor: 'transparent',
              position: 'relative',
              flex: 1,
              overflowY: 'auto',
            }}>
            {dashboardData.high_risk_areas.map((area) => (
              <ListItem
                sx={{
                  display: 'flex',
                  justifyContent: 'evenly',
                  bgcolor: '#161615',
                }}
                key={area.name}>
                <Typography
                  sx={{
                    bgcolor: 'transparent',
                    borderBottom: '2px solid green',
                    mr: 3,
                    ml: 2,
                  }}>
                  {count}
                </Typography>
                <Typography sx={{ bgcolor: 'transparent' }}>
                  {area.name}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
        <Typography
          sx={{
            bgcolor: 'transparent',
            color: '#00b0f0',
            p: 2,
          }}>
          Learn about risk areas
        </Typography>
      </Box>
    </Container>
  );
};

export default Trends;
