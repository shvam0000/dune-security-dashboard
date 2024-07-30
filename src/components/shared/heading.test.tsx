import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Heading } from '.';

jest.mock('@mui/material', () => ({
  Box: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Typography: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));
jest.mock('@mui/icons-material/Help', () => () => (
  <div data-testid="help-icon" />
));

describe('Heading', () => {
  it('renders without crashing', () => {
    render(<Heading heading="Test Heading" />);
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
  });
});
