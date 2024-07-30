import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import FirstRow from './first-row';

jest.mock('@mui/material', () => ({
  Box: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="box">{children}</div>
  ),
}));

jest.mock('.', () => ({
  RiskInsights: () => <div data-testid="risk-insights">Risk Insights</div>,
  Trends: () => <div data-testid="trends">Trends</div>,
}));

describe('FirstRow', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<FirstRow />);

    const boxElement = getByTestId('box');
    expect(boxElement).toBeInTheDocument();

    const riskInsightsElement = getByTestId('risk-insights');
    expect(riskInsightsElement).toBeInTheDocument();

    const trendsElement = getByTestId('trends');
    expect(trendsElement).toBeInTheDocument();
  });
});
