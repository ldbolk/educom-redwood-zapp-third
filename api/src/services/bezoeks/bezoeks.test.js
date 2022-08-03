import { bezoeks } from './bezoeks'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('bezoeks', () => {
  scenario('returns all bezoeks', async (scenario) => {
    const result = await bezoeks()

    expect(result.length).toEqual(Object.keys(scenario.bezoek).length)
  })
})
