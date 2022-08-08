import { render } from '@redwoodjs/testing/web'

import BezoekDetailsPage from './BezoekDetailsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BezoekDetailsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BezoekDetailsPage />)
    }).not.toThrow()
  })
})
