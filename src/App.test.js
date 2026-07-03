import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main portfolio sections', () => {
  render(<App />);

  expect(screen.getByText(/full-stack web development/i)).toBeInTheDocument();
  expect(screen.getByText(/ai agents/i)).toBeInTheDocument();
  expect(screen.getByText(/ai\/ml demos/i)).toBeInTheDocument();
});
