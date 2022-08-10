import BezoekDetail from "../Bezoek/BezoekDetail/BezoekDetail"

export const QUERY = gql`
  query BezoekQuery($id: Int!) {
    bezoek: bezoek(id: $id) {
      id
      medewerker{id, name, email}
      klant{id, naam, adres, postcode, woonplaats}
      taken{id, taak, extra}
      start
      end
    }
    taken: taaks {
      id
      taak
      extra
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Dit bezoek bestaat niet</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ bezoek, taken }) => {
  console.log(bezoek)
  return <BezoekDetail bezoek={bezoek} taken={taken}/>
}
