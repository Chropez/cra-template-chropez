import React from 'react';
import { render, screen } from '@testing-library/react';
import RootRoute from './RootRoute';

test('renders root route', () => {
  render(<RootRoute />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
