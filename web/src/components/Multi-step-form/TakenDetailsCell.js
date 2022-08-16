import TakenDetails from "./TakenDetails"

export const QUERY = gql`
  query FindTaken {
    taken: taaks {
      id
      taak
      extra
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Something wasn't found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({klant, taken, nextStep, prevStep, handleChange, values, handleTaken }) => {
  const klantTaken = []
  const vasteTaken = []

  klant.taken.forEach(taak => {
    klantTaken.push(taak.id)
  })

  taken.forEach(taak => {
    if(klantTaken.includes(taak.id)) {
      vasteTaken.push(taak)
    }
  })

  console.log('vasteTaken - ', vasteTaken)

  return <TakenDetails klant={klant} taken={taken} vasteTaken={vasteTaken} nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={values} handleTaken={handleTaken}/>
}