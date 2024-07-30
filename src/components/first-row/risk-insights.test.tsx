import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RiskInsights from './risk-insights';

jest.mock('@mui/material', () => ({
  Box: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mui-box">{children}</div>
  ),
  CardContent: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mui-card-content">{children}</div>
  ),
}));

jest.mock('../shared', () => ({
  Heading: ({ heading }: { heading: string }) => (
    <h2 data-testid="heading">{heading}</h2>
  ),
}));

jest.mock('.', () => ({
  RiskBox: ({
    title,
    score,
    subtitle,
    label,
  }: {
    title: string;
    score: string;
    subtitle: string;
    label: string;
  }) => (
    <div data-testid="risk-box">
      <span>{title}</span>
      <span>{score}</span>
      <span>{subtitle}</span>
      <span>{label}</span>
    </div>
  ),
}));

jest.mock('../../util/constants/const', () => ({
  riskData: [
    { title: 'Risk 1', score: '10', subtitle: 'Sub 1', label: 'Label 1' },
    { title: 'Risk 2', score: '20', subtitle: 'Sub 2', label: 'Label 2' },
  ],
}));

describe('RiskInsights', () => {
  it('renders correctly with all components', () => {
    render(<RiskInsights />);

    const heading = screen.getByTestId('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Risk Insights');

    expect(screen.getByTestId('mui-card-content')).toBeInTheDocument();

    const riskBoxes = screen.getAllByTestId('risk-box');
    expect(riskBoxes).toHaveLength(2);

    expect(riskBoxes[0]).toHaveTextContent('Risk 1');
    expect(riskBoxes[0]).toHaveTextContent('10');
    expect(riskBoxes[0]).toHaveTextContent('Sub 1');
    expect(riskBoxes[0]).toHaveTextContent('Label 1');

    expect(riskBoxes[1]).toHaveTextContent('Risk 2');
    expect(riskBoxes[1]).toHaveTextContent('20');
    expect(riskBoxes[1]).toHaveTextContent('Sub 2');
    expect(riskBoxes[1]).toHaveTextContent('Label 2');
  });
});
