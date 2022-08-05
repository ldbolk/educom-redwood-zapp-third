import { render } from '@redwoodjs/testing/web'

import BezoekPage from './BezoekPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BezoekPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BezoekPage />)
    }).not.toThrow()
  })
})
