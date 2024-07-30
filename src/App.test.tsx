import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

jest.mock('./App.css', () => ({}));

jest.mock('@mui/material', () => ({
  Container: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mui-container">{children}</div>
  ),
}));

jest.mock('./components/first-row', () => ({
  FirstRow: () => <div data-testid="first-row">First Row</div>,
}));

jest.mock('./components/second-row', () => ({
  SecondRow: () => <div data-testid="second-row">Second Row</div>,
}));

jest.mock('./components/third-row', () => ({
  ThirdRow: () => <div data-testid="third-row">Third Row</div>,
}));

jest.mock('./components/fourth-row', () => ({
  FourthRow: () => <div data-testid="fourth-row">Fourth Row</div>,
}));

describe('App', () => {
  it('renders without crashing and contains all row components', () => {
    render(<App />);

    expect(screen.getByTestId('mui-container')).toBeInTheDocument();

    expect(screen.getByTestId('first-row')).toBeInTheDocument();
    expect(screen.getByTestId('second-row')).toBeInTheDocument();
    expect(screen.getByTestId('third-row')).toBeInTheDocument();
    expect(screen.getByTestId('fourth-row')).toBeInTheDocument();
  });
});
