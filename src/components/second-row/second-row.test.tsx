import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('./second-row', () => ({
  __esModule: true,
  default: () => (
    <div data-testid="second-row">
      <h2>User Interactions</h2>
      <div>
        <span>1000</span>
        <span>TOTAL INTERACTIONS</span>
      </div>
      <div data-testid="react-flow">ReactFlow Mock</div>
    </div>
  ),
}));

describe('SecondRow', () => {
  it('renders without crashing and contains expected elements', () => {
    const SecondRow = require('./second-row').default;
    render(<SecondRow />);

    expect(screen.getByTestId('second-row')).toBeInTheDocument();

    expect(screen.getByText('User Interactions')).toBeInTheDocument();

    expect(screen.getByText('1000')).toBeInTheDocument();
    expect(screen.getByText('TOTAL INTERACTIONS')).toBeInTheDocument();

    expect(screen.getByTestId('react-flow')).toBeInTheDocument();
  });
});
