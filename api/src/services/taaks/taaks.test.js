import { taaks, taak, createTaak, updateTaak, deleteTaak } from './taaks'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('taaks', () => {
  scenario('returns all taaks', async (scenario) => {
    const result = await taaks()

    expect(result.length).toEqual(Object.keys(scenario.taak).length)
  })

  scenario('returns a single taak', async (scenario) => {
    const result = await taak({ id: scenario.taak.one.id })

    expect(result).toEqual(scenario.taak.one)
  })

  scenario('creates a taak', async () => {
    const result = await createTaak({
      input: { taak: 'String' },
    })

    expect(result.taak).toEqual('String')
  })

  scenario('updates a taak', async (scenario) => {
    const original = await taak({ id: scenario.taak.one.id })
    const result = await updateTaak({
      id: original.id,
      input: { taak: 'String2' },
    })

    expect(result.taak).toEqual('String2')
  })

  scenario('deletes a taak', async (scenario) => {
    const original = await deleteTaak({ id: scenario.taak.one.id })
    const result = await taak({ id: original.id })

    expect(result).toEqual(null)
  })
})
