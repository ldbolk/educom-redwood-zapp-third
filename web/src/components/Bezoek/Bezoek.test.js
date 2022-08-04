import { render } from '@redwoodjs/testing/web'

import Bezoek from './Bezoek'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Bezoek', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Bezoek />)
    }).not.toThrow()
  })
})
