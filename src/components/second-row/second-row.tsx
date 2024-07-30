import ReactFlow from 'reactflow';
import CustomEdge from './custom-edge';
import 'reactflow/dist/style.css';
import { Box, Typography } from '@mui/material';
import { Heading } from '../shared';
import { userInteractions, nodes, edges } from '../../util/constants/const';

const total =
  userInteractions.links_clicked +
  userInteractions.qr_code_scanned +
  userInteractions.download_attachments +
  userInteractions.credentials_entered +
  userInteractions.credentials_submitted +
  userInteractions.mfa_entered +
  userInteractions.tests_responded_to +
  userInteractions.tests_ignored +
  userInteractions.reported_to_watchtower;

const SecondRow = () => (
  <Box sx={{ pb: 5 }}>
    <Heading heading="User Interactions" />
    <Box
      sx={{
        height: 600, // Set the height for the container
        width: '100%',
        bgcolor: '#161615',
        border: '2px solid #3C3B38',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography sx={{ color: 'white' }} variant="h3">
          {total.toLocaleString()}
        </Typography>
        <Box sx={{ fontSize: 16, color: '#A2A099' }}>TOTAL INTERACTIONS</Box>
      </Box>
      <Box sx={{ flex: 1, position: 'relative' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          draggable={false}
          fitView
          fitViewOptions={{ padding: 0.1 }}
          //@ts-ignore
          edgeTypes={{ custom: CustomEdge }}
          style={{ width: '100%', height: '100%' }}
        />
      </Box>
    </Box>
  </Box>
);

export default SecondRow;
