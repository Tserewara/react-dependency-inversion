import React from 'react'
import { test, expect } from 'vitest';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AppDI from '../src/presentation/AppDI';
import HttpClient from '../src/infra/HttpClient';

class FakeHttpClient implements HttpClient {
  get (url: string): Promise<any> {
    return Promise.resolve([
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
    ])
  }
}


test('loads and displays tasks', async () => {
  // ARRANGE
  const { findByTestId } = render(<AppDI httpClient={new FakeHttpClient()} />);
  const task1 = await findByTestId("task-1")
  expect(task1.textContent).toBe("delectus aut autem ❌")
})