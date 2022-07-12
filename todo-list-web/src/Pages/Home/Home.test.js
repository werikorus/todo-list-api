import { render, screen } from '@testing-library/react';
import Home from './index';

test('render Home page', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Hello world!/i);
  expect(linkElement).toBeDefined();
});
 