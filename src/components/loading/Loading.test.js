import { render, screen } from '@testing-library/react';
import Loading from './Loading';

test('render Loading', () => {
  render(<Loading />);
  const linkElement = screen.getByTestId('spinner-element');
  expect(linkElement).toBeInTheDocument();
});
