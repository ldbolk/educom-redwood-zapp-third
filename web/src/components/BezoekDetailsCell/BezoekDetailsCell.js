import BezoekDetail from "../Bezoek/BezoekDetail/BezoekDetail"

export const QUERY = gql`
  query BezoekQuery($id: Int!) {
    bezoek: bezoek(id: $id) {
      id
      medewerker{name, email}
      klant{naam, adres, postcode}
      taken{id, taak, extra}
      start
      end
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Dit bezoek bestaat niet</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ bezoek }) => {
  console.log(bezoek)
  return <BezoekDetail bezoek={bezoek}/>
}
