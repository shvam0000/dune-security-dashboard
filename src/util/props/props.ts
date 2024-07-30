import { SvgIconComponent } from '@mui/icons-material';
import { Position } from 'reactflow';

export interface RiskBoxProps {
  title: string;
  score: string | number;
  subtitle: string;
  label: string;
}

export interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
  }>;
  label?: string;
}

export interface CustomEdgeStyle extends React.CSSProperties {
  sourceColor?: string;
  targetColor?: string;
}

export interface CustomEdgeProps {
  id: string;
  sourceX: number;
  sourceY: number;
  sourcePosition: Position;
  targetX: number;
  targetY: number;
  targetPosition: Position;
  source: string;
  target: string;
  style?: CustomEdgeStyle;
  markerEnd?: string;
}

export interface HeadingProps {
  heading: string;
}

export interface ComplianceItemProps {
  icon: SvgIconComponent;
  title: string;
  subtitle: string;
}
