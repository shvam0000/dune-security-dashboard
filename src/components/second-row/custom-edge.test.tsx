import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomEdge from './custom-edge';
import { Position } from 'reactflow';

jest.mock('reactflow', () => ({
  getSmoothStepPath: jest.fn(() => ['M0 0 L100 100']),
  Position: {
    Bottom: 'bottom',
    Top: 'top',
  },
}));

describe('CustomEdge', () => {
  const defaultProps = {
    id: 'edge1',
    sourceX: 0,
    sourceY: 0,
    sourcePosition: Position.Bottom,
    targetX: 100,
    targetY: 100,
    targetPosition: Position.Top,
    style: {
      sourceColor: 'red',
      targetColor: 'blue',
    },
    markerEnd: 'url(#arrow)',
    source: 'node1',
    target: 'node2',
  };

  it('renders without crashing', () => {
    const { container } = render(<CustomEdge {...defaultProps} />);
    expect(container).toBeTruthy();
  });

  it('contains the correct gradient ID', () => {
    const { container } = render(<CustomEdge {...defaultProps} />);
    expect(container.innerHTML).toContain(`gradient-${defaultProps.id}`);
  });

  it('contains the source and target colors', () => {
    const { container } = render(<CustomEdge {...defaultProps} />);
    expect(container.innerHTML).toContain(defaultProps.style.sourceColor);
    expect(container.innerHTML).toContain(defaultProps.style.targetColor);
  });

  it('contains a path element', () => {
    const { container } = render(<CustomEdge {...defaultProps} />);
    expect(container.innerHTML).toContain('<path');
  });

  it('applies the marker end', () => {
    const { container } = render(<CustomEdge {...defaultProps} />);
    expect(container.innerHTML).toContain(defaultProps.markerEnd);
  });
});
