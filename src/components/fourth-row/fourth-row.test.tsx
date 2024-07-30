import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FourthRow from './fourth-row';

// Mock the dependencies
jest.mock('@mui/material', () => ({
  Box: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mui-box">{children}</div>
  ),
  Typography: ({
    children,
    variant,
  }: {
    children: React.ReactNode;
    variant?: string;
  }) => (
    <div data-testid={`mui-typography-${variant || 'default'}`}>{children}</div>
  ),
  Grid: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mui-grid">{children}</div>
  ),
}));

jest.mock('react-chartjs-2', () => ({
  Pie: () => <div data-testid="pie-chart">Pie Chart</div>,
  Line: () => <div data-testid="line-chart">Line Chart</div>,
}));

jest.mock('chart.js', () => ({
  Chart: {
    register: jest.fn(),
  },
  registerables: [],
}));

jest.mock('../shared', () => ({
  Heading: ({ heading }: { heading: string }) => (
    <h2 data-testid="heading">{heading}</h2>
  ),
}));

jest.mock('../../util/constants/const', () => ({
  pieData: {},
  riskScoreOverTimeData: {},
}));

describe('FourthRow', () => {
  it('renders correctly with all components', () => {
    render(<FourthRow />);

    const headings = screen.getAllByTestId('heading');
    expect(headings).toHaveLength(2);
    expect(headings[0]).toHaveTextContent('Risk Categories');
    expect(headings[1]).toHaveTextContent('Risk Score Comparison');

    expect(screen.getByTestId('pie-chart')).toBeInTheDocument();

    expect(screen.getByTestId('line-chart')).toBeInTheDocument();

    expect(screen.getByText('PERCENTAGE OF USERS')).toBeInTheDocument();

    expect(screen.getByText(/YOUR RISK SCORE IS/i)).toBeInTheDocument();
    expect(screen.getByText(/39 POINTS/i)).toBeInTheDocument();
    expect(screen.getByText(/HIGHER THAN AVERAGE/i)).toBeInTheDocument();

    const grids = screen.getAllByTestId('mui-grid');
    expect(grids.length).toBeGreaterThan(0);

    const boxes = screen.getAllByTestId('mui-box');
    expect(boxes.length).toBeGreaterThan(0);

    const typographies = screen.getAllByTestId(/mui-typography/);
    expect(typographies.length).toBeGreaterThan(0);
  });
});
