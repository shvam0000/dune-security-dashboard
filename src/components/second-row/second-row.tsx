import React from 'react';
import ReactFlow, { Background, Controls, Position } from 'reactflow';
import CustomEdge from './custom-edge'; // Import the custom edge component
import 'reactflow/dist/style.css';

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
    id: '1',
    data: { label: `${userInteractions.links_clicked} LINKS CLICKED` },
    position: { x: 0, y: 0 },
    sourcePosition: Position.Right,
    style: { background: '#333', color: '#fff', padding: 10, borderRadius: 5 },
  },
  {
    id: '2',
    data: { label: `${userInteractions.qr_code_scanned} QR CODE SCANNED` },
    position: { x: 0, y: 60 },
    sourcePosition: Position.Right,
    style: { background: '#333', color: '#fff', padding: 10, borderRadius: 5 },
  },
  {
    id: '3',
    data: {
      label: `${userInteractions.download_attachments} DOWNLOAD ATTACHMENTS`,
    },
    position: { x: 0, y: 120 },
    sourcePosition: Position.Right,
    style: { background: '#333', color: '#fff', padding: 10, borderRadius: 5 },
  },
  {
    id: '4',
    data: {
      label: `${userInteractions.credentials_entered} CREDENTIALS ENTERED`,
    },
    position: { x: 250, y: 60 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    style: {
      background: '#ffc107',
      color: '#000',
      padding: 10,
      borderRadius: 5,
    },
  },
  {
    id: '5',
    data: {
      label: `${userInteractions.credentials_submitted} CREDENTIALS SUBMITTED`,
    },
    position: { x: 500, y: 60 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    style: {
      background: '#ff9800',
      color: '#000',
      padding: 10,
      borderRadius: 5,
    },
  },
  {
    id: '6',
    data: { label: `${userInteractions.mfa_entered} MFA ENTERED` },
    position: { x: 750, y: 60 },
    targetPosition: Position.Left,
    style: {
      background: '#f44336',
      color: '#000',
      padding: 10,
      borderRadius: 5,
    },
  },
  {
    id: '7',
    data: {
      label: `${userInteractions.tests_responded_to} TESTS RESPONDED TO`,
    },
    position: { x: 0, y: 180 },
    sourcePosition: Position.Right,
    style: { background: '#333', color: '#fff', padding: 10, borderRadius: 5 },
  },
  {
    id: '8',
    data: { label: `${userInteractions.tests_ignored} TESTS IGNORED` },
    position: { x: 0, y: 240 },
    sourcePosition: Position.Right,
    style: { background: '#333', color: '#fff', padding: 10, borderRadius: 5 },
  },
  {
    id: '9',
    data: {
      label: `${userInteractions.reported_to_watchtower} REPORTED TO WATCH TOWER`,
    },
    position: { x: 0, y: 300 },
    sourcePosition: Position.Right,
    style: {
      background: '#4caf50',
      color: '#fff',
      padding: 10,
      borderRadius: 5,
    },
  },
];

const edges = [
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
    id: 'e3-4',
    source: '1',
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

const UserInteractionsFlow = () => (
  <div style={{ height: 500, width: '100%' }}>
    <ReactFlow
      nodes={nodes}
      edges={edges}
      //@ts-ignore
      edgeTypes={{ custom: CustomEdge }}
      fitView
      nodesConnectable={false}
      nodesDraggable={false}
      panOnScroll={true}
      panOnDrag={true}>
      <Background />
      {/* <Controls /> */}
    </ReactFlow>
  </div>
);

export default UserInteractionsFlow;
