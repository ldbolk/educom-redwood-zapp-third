import { klants, klant, createKlant, updateKlant, deleteKlant } from './klants'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('klants', () => {
  scenario('returns all klants', async (scenario) => {
    const result = await klants()

    expect(result.length).toEqual(Object.keys(scenario.klant).length)
  })

  scenario('returns a single klant', async (scenario) => {
    const result = await klant({ id: scenario.klant.one.id })

    expect(result).toEqual(scenario.klant.one)
  })

  scenario('creates a klant', async () => {
    const result = await createKlant({
      input: {
        naam: 'String',
        adres: 'String',
        postcode: 'String',
        woonplaats: 'String',
      },
    })

    expect(result.naam).toEqual('String')
    expect(result.adres).toEqual('String')
    expect(result.postcode).toEqual('String')
    expect(result.woonplaats).toEqual('String')
  })

  scenario('updates a klant', async (scenario) => {
    const original = await klant({ id: scenario.klant.one.id })
    const result = await updateKlant({
      id: original.id,
      input: { naam: 'String2' },
    })

    expect(result.naam).toEqual('String2')
  })

  scenario('deletes a klant', async (scenario) => {
    const original = await deleteKlant({ id: scenario.klant.one.id })
    const result = await klant({ id: original.id })

    expect(result).toEqual(null)
  })
})
