import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThirdRow from './third-row';

jest.mock('@mui/material', () => ({
  Box: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Grid: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Typography: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

jest.mock('@mui/x-charts', () => ({
  BarChart: () => <div data-testid="bar-chart">BarChart Mock</div>,
}));

jest.mock('../shared', () => ({
  Heading: ({ heading }: { heading: string }) => <h2>{heading}</h2>,
}));

jest.mock('.', () => ({
  ComplianceItem: ({
    title,
    subtitle,
  }: {
    title: string;
    subtitle: string;
  }) => (
    <div data-testid="compliance-item">
      <span>{title}</span>
      <span>{subtitle}</span>
    </div>
  ),
}));

jest.mock('../../util/constants/const', () => ({
  complianceData: [
    { title: 'Item 1', subtitle: 'Subtitle 1' },
    { title: 'Item 2', subtitle: 'Subtitle 2' },
  ],
}));

describe('ThirdRow', () => {
  it('renders main components and text', () => {
    render(<ThirdRow />);

    expect(screen.getByText('Compliance')).toBeInTheDocument();

    expect(screen.getByText('TRAINING COMPLETION STATUS')).toBeInTheDocument();

    const complianceItems = screen.getAllByTestId('compliance-item');
    expect(complianceItems.length).toBe(2);

    expect(screen.getByTestId('bar-chart')).toBeInTheDocument();
  });
});
