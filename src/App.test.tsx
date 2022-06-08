import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { RecoilRoot } from 'recoil';

test('render quay app', () => {
  render(<RecoilRoot><App /></RecoilRoot>);
  // const linkElement = screen.getByText(/quay/i);
  // expect(linkElement).toBeInTheDocument();
});
