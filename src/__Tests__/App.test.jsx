import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import App from '../components/App';
import '@testing-library/jest-dom';

test('renders App to DOM', () => {
  render(<App />);
  const appContainer = screen.getByTestId('app');
  expect(appContainer).toBeInTheDocument();
});
