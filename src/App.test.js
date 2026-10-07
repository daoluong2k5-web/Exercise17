import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Render and Commit Demo Tests', () => {
  test('renders header and initial count of 0', () => {
    render(<App />);
    const headingElement = screen.getByRole('heading', { name: /render and commit demo/i });
    expect(headingElement).toBeInTheDocument();

    const countElement = screen.getByText(/count:\s*0/i);
    expect(countElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button', { name: /increment/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('clicking increment button updates count and triggers re-render', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /increment/i });

    // Click once
    fireEvent.click(buttonElement);
    expect(screen.getByText(/count:\s*1/i)).toBeInTheDocument();

    // Click again
    fireEvent.click(buttonElement);
    expect(screen.getByText(/count:\s*2/i)).toBeInTheDocument();
  });
});
