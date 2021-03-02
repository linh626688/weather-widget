import { screen, render } from '@testing-library/react';
import Temperature from './Temperature';

test('render Temperature', () => {
  render(<Temperature value={20} size={20} />);
  const spanTextContent = screen.getByTestId('current-temp').textContent;
  expect(spanTextContent).toEqual('20');
});
