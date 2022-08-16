import TakenDetailsCell from './TakenDetailsCell'

export const QUERY = gql`
  query FindKlantById($id: Int!) {
    klant: klant(id: $id) {
      naam
      taken{id, taak}
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Klant not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ klant, nextStep, prevStep, handleChange, handleTaken, values }) => {
  return <TakenDetailsCell klant={klant} nextStep={nextStep} prevStep={prevStep} handleTaken={handleTaken} handleChange={handleChange} values={values}/>
}
