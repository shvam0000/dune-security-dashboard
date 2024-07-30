import React from 'react';
import ReactFlow, { Background, Position } from 'reactflow';
import CustomEdge from './custom-edge';
import 'reactflow/dist/style.css';
import { Box, Typography } from '@mui/material';

const userInteractions = {
  links_clicked: 2735,
  qr_code_scanned: 2735,
  download_attachments: 2735,
  credentials_entered: 300,
  credentials_submitted: 44,
  mfa_entered: 44,
  tests_responded_to: 150,
  tests_ignored: 5577,
  reported_to_watchtower: 2021,
};

const nodes = [
  {
    id: 'source',
    data: { label: '' },
    position: { x: 0, y: 30 },
    sourcePosition: Position.Right,
    style: { width: 2, height: 300, background: 'white', border: 'none' },
  },
  {
    id: '1',
    data: { label: `${userInteractions.links_clicked} LINKS CLICKED` },
    position: { x: 100, y: 0 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    style: { background: '#333', color: '#fff', padding: 10, border: 'none' },
  },
  {
    id: '2',
    data: { label: `${userInteractions.qr_code_scanned} QR CODE SCANNED` },
    position: { x: 100, y: 60 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    style: { background: '#333', color: '#fff', padding: 10, border: 'none' },
  },
  {
    id: '3',
    data: {
      label: `${userInteractions.download_attachments} DOWNLOAD ATTACHMENTS`,
    },
    position: { x: 100, y: 120 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    style: { background: '#333', color: '#fff', padding: 10, border: 'none' },
  },
  {
    id: '4',
    data: {
      label: `${userInteractions.credentials_entered} CREDENTIALS ENTERED`,
    },
    position: { x: 350, y: 60 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    style: {
      background: '#ffc107',
      color: '#000',
      padding: 10,
      border: 'none',
    },
  },
  {
    id: '5',
    data: {
      label: `${userInteractions.credentials_submitted} CREDENTIALS SUBMITTED`,
    },
    position: { x: 600, y: 60 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    style: {
      background: '#ff9800',
      color: '#000',
      padding: 10,
      border: 'none',
    },
  },
  {
    id: '6',
    data: { label: `${userInteractions.mfa_entered} MFA ENTERED` },
    position: { x: 850, y: 60 },
    targetPosition: Position.Left,
    style: {
      background: '#f44336',
      color: '#000',
      padding: 10,
      border: 'none',
    },
  },
  {
    id: '7',
    data: {
      label: `${userInteractions.tests_responded_to} TESTS RESPONDED TO`,
    },
    position: { x: 100, y: 180 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    style: { background: '#333', color: '#fff', padding: 10, border: 'none' },
  },
  {
    id: '8',
    data: { label: `${userInteractions.tests_ignored} TESTS IGNORED` },
    position: { x: 100, y: 240 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    style: { background: 'white', color: 'black', padding: 10, border: 'none' },
  },
  {
    id: '9',
    data: {
      label: `${userInteractions.reported_to_watchtower} REPORTED TO WATCH TOWER`,
    },
    position: { x: 100, y: 300 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    style: {
      background: '#4caf50',
      color: '#fff',
      padding: 10,
      border: 'none',
    },
  },
];

const edges = [
  {
    id: 'e-source-1',
    source: 'source',
    target: '1',
    style: { strokeWidth: 2, sourceColor: 'white', targetColor: 'white' },
  },
  {
    id: 'e-source-2',
    source: 'source',
    target: '2',
    style: { strokeWidth: 2 },
  },
  {
    id: 'e-source-3',
    source: 'source',
    target: '3',
    style: { strokeWidth: 2 },
  },
  {
    id: 'e-source-7',
    source: 'source',
    target: '7',
    style: { strokeWidth: 2 },
  },
  {
    id: 'e-source-8',
    source: 'source',
    target: '8',
    style: { strokeWidth: 2 },
  },
  {
    id: 'e-source-9',
    source: 'source',
    target: '9',
    style: { strokeWidth: 2 },
  },
  {
    id: 'e1-4',
    source: '1',
    target: '4',
    type: 'custom',
    style: { sourceColor: '#333', targetColor: '#ffc107', strokeWidth: 2 },
  },
  {
    id: 'e2-4',
    source: '2',
    target: '4',
    type: 'custom',
    style: { sourceColor: '#333', targetColor: '#ffc107', strokeWidth: 2 },
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    type: 'custom',
    style: { sourceColor: '#ffc107', targetColor: '#ff9800', strokeWidth: 2 },
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    type: 'custom',
    style: { sourceColor: '#ff9800', targetColor: '#f44336', strokeWidth: 2 },
  },
];

const SecondRow = () => (
  <Box>
    <Typography variant="h6" gutterBottom sx={{ pl: 2, color: 'white' }}>
      User Interaction
    </Typography>
    <Box
      sx={{
        height: 600,
        width: '100%',
        bgcolor: '#161615',
        border: '2px solid #3C3B38',
        borderRadius: 5,
      }}>
      <Box>
        <Typography
          sx={{ color: 'white', px: 5, fontWeight: 'bold', pt: 2 }}
          variant="h3">
          10,000
        </Typography>
        <Box sx={{ color: 'white', px: 5 }}>TOTAL INTERACTIONS</Box>
      </Box>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        //@ts-ignore
        edgeTypes={{ custom: CustomEdge }}
        fitView></ReactFlow>
    </Box>
  </Box>
);

export default SecondRow;
