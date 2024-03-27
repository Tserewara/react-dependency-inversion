import React from 'react'
import { test, expect } from 'vitest';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/presentation/App';


test.skip('loads and displays tasks', async () => {
  // ARRANGE
  const { findByTestId } = render(<App />);
  const task1 = await findByTestId("task-1")
  expect(task1.textContent).toBe("delectus aut autem ❌")
})