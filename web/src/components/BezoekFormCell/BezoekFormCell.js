import BezoekForm from "../BezoekForm/BezoekForm"

export const QUERY = gql`
  query FindEverything {
    klanten: klants {
      id
      naam
      adres
      taken{id, taak, extra}
    }
    taken: taaks {
      id
      taak
      extra
    }
    medewerkers: users {
      id
      name
      email
    }

  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Something wasn't found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ klanten, taken, medewerkers }) => {
  return <BezoekForm klanten={klanten} taken={taken} medewerkers={medewerkers}/>
}
