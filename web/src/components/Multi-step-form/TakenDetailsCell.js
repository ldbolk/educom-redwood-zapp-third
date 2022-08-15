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

export const Success = ({ taken, nextStep, prevStep, handleChange, values, handleTaken, vasteTaken }) => {
  console.log(taken)
  return <TakenDetails taken={taken} nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={values} handleTaken={handleTaken} vasteTaken={vasteTaken}/>
}