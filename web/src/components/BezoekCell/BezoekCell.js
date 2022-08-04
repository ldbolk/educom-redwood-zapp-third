import Bezoek from "../Bezoek/Bezoek"

export const QUERY = gql`
  query BezoekQuery {
    bezoek: bezoeks {
      id
      klant{id, naam,
        taken{
          id,
          taak,
          extra
        }}
      medewerker{id, name}
      start
      end
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Nog geen geplande bezoeken</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ bezoek }) => {
  return (
    <div>
      {bezoek.map((bezoek) => (
        <Bezoek key={bezoek.id} bezoek={bezoek} />
      ))}
    </div>
  )
}
