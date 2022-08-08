import Calendar from 'src/components/Calendar/Calendar'

export const QUERY = gql`
  query FindBezoekById {
    bezoek: bezoeks {
      id
      start
      end
      klant{naam, adres}
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Nog geen bezoeken ingepland</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ bezoek }) => {
  return <Calendar bezoek={bezoek} />
}
