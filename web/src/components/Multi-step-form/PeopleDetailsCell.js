import PeopleDetails from "./PeopleDetails"

export const QUERY = gql`
  query FindPeople {
    klanten: klants {
      id
      naam
      adres
      taken{id, taak, extra}
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

export const Success = ({ klanten, medewerkers, nextStep, handleChange, handleKlant, values }) => {
  return <PeopleDetails klanten={klanten} medewerkers={medewerkers} nextStep={nextStep} handleChange={handleChange} values={values} handleKlant={handleKlant}/>
}