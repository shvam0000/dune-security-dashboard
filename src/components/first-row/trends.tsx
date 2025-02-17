import {
  Box,
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

import { dashboardData } from '../../util/data/Dashboard_Dune_Security';
import { Heading } from '../shared';
import { CustomTooltipProps } from '../../util/props/props';

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <div
          style={{
            backgroundColor: '#ffc107',
            color: 'black',
            padding: '5px',
            borderRadius: 5,
            position: 'relative',
            zIndex: 1,
            minWidth: '50px',
            textAlign: 'center',
          }}
        >
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
  const [boxHeight, setBoxHeight] = useState(350);
  const chartRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current && listRef.current) {
      setBoxHeight(
        Math.max(chartRef.current.clientHeight, listRef.current.clientHeight)
      );
    }
  }, [chartRef, listRef]);

  return (
    <Container sx={{ display: 'flex', height: '100%' }}>
      <Box
        sx={{
          color: '#fff',
          borderRadius: 5,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Heading heading="Trends" />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              border: '2px solid #212121',
              borderRadius: 5,
              p: 2,
              color: '#fff',
              bgcolor: '#161615',
            }}
            ref={chartRef}
          >
            <Typography
              gutterBottom
              sx={{ fontSize: 14, color: '#A2A099', py: '2px' }}
            >
              RISK SCORE OVER TIME
            </Typography>
            <LineChart
              width={600}
              height={boxHeight - 48}
              data={dashboardData.risk_score_over_time}
              margin={{ top: 5, bottom: 5 }}
            >
              <CartesianGrid horizontal={true} vertical={false} stroke="#555" />
              <XAxis
                dataKey="timestamp"
                tickFormatter={(tick) => moment(tick).format('D MMM')}
                tick={{ fill: '#aaa' }}
              />
              <YAxis tick={{ fill: '#aaa' }} domain={[0, 100]} />
              <Tooltip content={<CustomTooltip />} />
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
          <Box
            sx={{
              bgcolor: '#161615',
              border: '1px solid #272725',
              textAlign: 'center',
              width: 250,
              borderRadius: 5,
              ml: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: boxHeight + 18,
            }}
            ref={listRef}
          >
            <Box sx={{ bgcolor: 'transparent' }}>
              <Box
                sx={{
                  color: 'white',
                  bgcolor: '#161615',
                  py: 2,
                  borderRadius: 5,
                }}
              >
                HIGH RISK AREAS
              </Box>
              <List
                sx={{
                  color: 'white',
                  bgcolor: 'transparent',
                  position: 'relative',
                  flex: 1,
                  overflowY: 'auto',
                }}
              >
                {dashboardData.high_risk_areas.map((area, index) => (
                  <ListItem
                    sx={{
                      display: 'flex',
                      justifyContent: 'evenly',
                      bgcolor: '#161615',
                    }}
                    key={area.name}
                  >
                    <Typography
                      sx={{
                        bgcolor: 'transparent',
                        borderBottom: '2px solid #0BC567',
                        mr: 3,
                        ml: 2,
                        px: 1,
                      }}
                    >
                      {index + 1}
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
              }}
            >
              Learn about risk areas
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Container>
  );
};

export default Trends;
