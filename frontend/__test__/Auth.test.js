/* eslint-disable no-undef */
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
// import Fetch from './fetch'
import Auth from '../src/components/Auth/Auth'

test('loads and displays greeting', async () => {
  // ARRANGE
//   render(<Fetch url="/greeting" />)
  render(<Auth />)

  // ACT
  await userEvent.click(screen.getByText('Load Greeting'))
  await screen.findByRole('heading')

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toBeDisabled()
})