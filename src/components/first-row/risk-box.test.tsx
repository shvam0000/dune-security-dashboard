import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RiskBox from './risk-box';

jest.mock('@mui/material', () => ({
  Box: ({
    children,
    sx,
  }: {
    children: React.ReactNode;
    sx?: Record<string, unknown>;
  }) => <div data-testid="mui-box">{children}</div>,
  Typography: ({
    children,
    sx,
  }: {
    children: React.ReactNode;
    sx?: Record<string, unknown>;
  }) => <div data-testid="mui-typography">{children}</div>,
}));

describe('RiskBox', () => {
  const mockProps = {
    title: 'Test Title',
    score: '85',
    subtitle: 'Test Subtitle',
    label: 'Test Label',
  };

  it('renders with all props correctly', () => {
    render(<RiskBox {...mockProps} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();

    expect(screen.getByText('85')).toBeInTheDocument();

    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();

    expect(screen.getByText('Test Label')).toBeInTheDocument();

    const boxes = screen.getAllByTestId('mui-box');
    expect(boxes.length).toBe(5);

    const typographies = screen.getAllByTestId('mui-typography');
    expect(typographies.length).toBe(2); // Title and subtitle
  });
});
