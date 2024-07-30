import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Trends from './trends';

jest.mock('@mui/material', () => ({
  Box: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mui-box">{children}</div>
  ),
  CardContent: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mui-card-content">{children}</div>
  ),
  Container: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mui-container">{children}</div>
  ),
  List: ({ children }: { children: React.ReactNode }) => (
    <ul data-testid="mui-list">{children}</ul>
  ),
  ListItem: ({ children }: { children: React.ReactNode }) => (
    <li data-testid="mui-list-item">{children}</li>
  ),
  Typography: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mui-typography">{children}</div>
  ),
}));

jest.mock('../shared', () => ({
  Heading: ({ heading }: { heading: string }) => (
    <h2 data-testid="heading">{heading}</h2>
  ),
}));

jest.mock('recharts', () => ({
  LineChart: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="recharts-line-chart">{children}</div>
  ),
  CartesianGrid: () => <div data-testid="recharts-cartesian-grid" />,
  XAxis: () => <div data-testid="recharts-xaxis" />,
  YAxis: () => <div data-testid="recharts-yaxis" />,
  Tooltip: () => <div data-testid="recharts-tooltip" />,
  Legend: () => <div data-testid="recharts-legend" />,
  Line: () => <div data-testid="recharts-line" />,
  ReferenceLine: () => <div data-testid="recharts-reference-line" />,
}));

jest.mock('../../util/data/Dashboard_Dune_Security', () => ({
  dashboardData: {
    risk_score_over_time: [
      { timestamp: '2024-05-01', risk_score: 50 },
      { timestamp: '2024-05-15', risk_score: 77 },
    ],
    high_risk_areas: [{ name: 'Area 1' }, { name: 'Area 2' }],
  },
}));

describe('Trends', () => {
  it('renders correctly with all components', () => {
    render(<Trends />);

    const heading = screen.getByTestId('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Trends');

    expect(screen.getByTestId('recharts-line-chart')).toBeInTheDocument();

    const list = screen.getByTestId('mui-list');
    expect(list).toBeInTheDocument();

    const listItems = screen.getAllByTestId('mui-list-item');
    expect(listItems).toHaveLength(2);

    expect(screen.getByText('Learn about risk areas')).toBeInTheDocument();

    expect(screen.getByText('RISK SCORE OVER TIME')).toBeInTheDocument();

    expect(screen.getByText('HIGH RISK AREAS')).toBeInTheDocument();
  });
});
