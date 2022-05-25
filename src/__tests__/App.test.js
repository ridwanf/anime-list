import { render, screen } from '@testing-library/react';
import {createMemoryHistory} from 'history'
import React from 'react'
import {Router} from 'react-router-dom'

import '@testing-library/jest-dom'
import '@testing-library/jest-dom'

import App from '../App';




test('full app rendering/navigating', async () => {
  const history = createMemoryHistory()
  render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>,
  )
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument()
})