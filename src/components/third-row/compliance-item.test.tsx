import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ComplianceItem from './compliance-item';
import { SvgIcon } from '@mui/material';

jest.mock('@mui/material', () => ({
  Box: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Typography: ({ children }: { children: React.ReactNode }) => (
    <span>{children}</span>
  ),
  SvgIcon: () => <div data-testid="mock-icon" />,
}));

describe('ComplianceItem', () => {
  it('renders title and subtitle', () => {
    const mockProps = {
      icon: SvgIcon,
      title: 'Test Title',
      subtitle: 'Test Subtitle',
    };

    render(<ComplianceItem {...mockProps} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });
});
