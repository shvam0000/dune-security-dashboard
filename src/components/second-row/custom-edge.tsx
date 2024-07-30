import React from 'react';
import { getSmoothStepPath } from 'reactflow';
import { CustomEdgeProps } from '../../util/props/props';

const CustomEdge: React.FC<CustomEdgeProps> = ({
  id,
  sourceX,
  sourceY,
  sourcePosition,
  targetX,
  targetY,
  targetPosition,
  style = {},
  markerEnd,
}) => {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const gradientId = `gradient-${id}`;

  return (
    <>
      <defs>
        <linearGradient id={gradientId} gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={style.sourceColor} />
          <stop offset="100%" stopColor={style.targetColor} />
        </linearGradient>
      </defs>
      <path
        id={id}
        style={{
          ...style,
          stroke: `url(#${gradientId})`,
          strokeWidth: 4,
        }}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
    </>
  );
};

export default CustomEdge;
