import { Position } from 'reactflow';
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';
import HouseSidingOutlinedIcon from '@mui/icons-material/HouseSidingOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import HourglassDisabledOutlinedIcon from '@mui/icons-material/HourglassDisabledOutlined';
import { dashboardData } from '../data/Dashboard_Dune_Security';

export const userInteractions = {
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

export const nodes = [
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
    style: {
      background: '#333',
      color: '#fff',
      padding: 10,
      border: 'none',
      width: 210,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  {
    id: '2',
    data: { label: `${userInteractions.qr_code_scanned} QR CODE SCANNED` },
    position: { x: 100, y: 60 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    style: {
      background: '#333',
      color: '#fff',
      padding: 10,
      border: 'none',
      width: 210,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  {
    id: '3',
    data: {
      label: `${userInteractions.download_attachments} DOWNLOAD ATTACHMENTS`,
    },
    position: { x: 100, y: 120 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    style: {
      background: '#333',
      color: '#fff',
      padding: 10,
      border: 'none',
      width: 210,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
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
      background: '#FFEC77',
      color: '#000',
      padding: 10,
      border: 'none',
      width: 210,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
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
      background: '#FFB55F',
      color: '#000',
      padding: 10,
      border: 'none',
      width: 210,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  {
    id: '6',
    data: { label: `${userInteractions.mfa_entered} MFA ENTERED` },
    position: { x: 850, y: 60 },
    targetPosition: Position.Left,
    style: {
      background: '#FF6D55',
      color: '#000',
      padding: 10,
      border: 'none',
      width: 210,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
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
    style: {
      background: '#333',
      color: '#fff',
      padding: 10,
      border: 'none',
      width: 210,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  {
    id: '8',
    data: { label: `${userInteractions.tests_ignored} TESTS IGNORED` },
    position: { x: 100, y: 240 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    style: {
      background: 'white',
      color: 'black',
      padding: 10,
      border: 'none',
      width: 210,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
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
      background: '#01FF82',
      color: 'black',
      padding: 10,
      border: 'none',
      width: 210,
      fontWeight: 600, // Set a fixed width for the node
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
];

export const edges = [
  {
    id: 'e-source-1',
    source: 'source',
    target: '1',
    style: { strokeWidth: 5, sourceColor: 'white', targetColor: 'white' },
  },
  {
    id: 'e-source-2',
    source: 'source',
    target: '2',
    style: { strokeWidth: 5 },
  },
  {
    id: 'e-source-3',
    source: 'source',
    target: '3',
    style: { strokeWidth: 5 },
  },
  {
    id: 'e-source-7',
    source: 'source',
    target: '7',
    style: { strokeWidth: 5 },
  },
  {
    id: 'e-source-8',
    source: 'source',
    target: '8',
    style: { strokeWidth: 5 },
  },
  {
    id: 'e-source-9',
    source: 'source',
    target: '9',
    style: { strokeWidth: 5 },
  },
  {
    id: 'e1-4',
    source: '1',
    target: '4',
    type: 'custom',
    style: { sourceColor: '#333', targetColor: '#ffc107', strokeWidth: 5 },
  },
  {
    id: 'e2-4',
    source: '2',
    target: '4',
    type: 'custom',
    style: { sourceColor: '#333', targetColor: '#ffc107', strokeWidth: 5 },
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    type: 'custom',
    style: { sourceColor: '#ffc107', targetColor: '#ff9800', strokeWidth: 5 },
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    type: 'custom',
    style: { sourceColor: '#ff9800', targetColor: '#f44336', strokeWidth: 5 },
  },
];

export const complianceData = [
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

export const riskScoreOverTimeData = {
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

export const pieData = {
  labels: ['Low Risk', 'Moderate Risk', 'High Risk', 'Severe Risk'],
  datasets: [
    {
      data: [
        dashboardData.risk_categories['Low risk'],
        dashboardData.risk_categories['Moderate risk'],
        dashboardData.risk_categories['High risk'],
        dashboardData.risk_categories['Severe risk'],
      ],
      backgroundColor: ['#01BB60', '#FFEA00', '#FFA201', '#FF2A00'], // Custom colors
      borderWidth: 0,
    },
  ],
};
