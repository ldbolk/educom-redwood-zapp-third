import { render } from '@redwoodjs/testing/web'

import BezoekForm from './BezoekForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BezoekForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BezoekForm />)
    }).not.toThrow()
  })
})
