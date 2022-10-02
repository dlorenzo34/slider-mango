import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('App view loads', () => {
  render(<App />);
  const linkElement = screen.getByText(/Set maximum slider value:/i);
  expect(linkElement).toBeInTheDocument();
});
test('Check if number input has been loaded successfully', () => {
  const utils = render(<App />);
  const input = utils.getByLabelText('max-price')
  expect(input.value).toBe("10");
});
test('Check if number input has changed correctly', () => {
  const utils = render(<App />);
  const input = utils.getByLabelText('max-price')
  fireEvent.change(input, {target: {value: '20'}})
  expect(input.value).toBe("20");
});