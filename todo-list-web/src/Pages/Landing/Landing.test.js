import { render, screen } from '@testing-library/react';
import Landing from './index';

test('render Landing page', () => {
  render(<Landing />);
  const linkElement = screen.getByText(/Hello world!/i);
  expect(linkElement).toBeDefined();
});
 