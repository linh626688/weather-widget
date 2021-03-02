import { render, screen } from '@testing-library/react';
import SearchBox from './SearchBox';

test('render SearchBox', () => {
  render(<SearchBox value={'Hanoi'} onChange={() => {}} />);
  const element = screen.getByDisplayValue('Hanoi');
  expect(element).toBeInTheDocument();
});
