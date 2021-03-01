import { render, screen } from '@testing-library/react';
import IconWeather from './IconWeather';
import { SIZE_IMAGE } from '../../constants/constants';

test('render Icon', () => {
  const data = [{ icon: '10d' }];
  render(<IconWeather size={SIZE_IMAGE.NORMAL} data={data} />);
  const linkElement = screen.getByAltText(/10d/i);
  expect(linkElement).toBeInTheDocument();
});
