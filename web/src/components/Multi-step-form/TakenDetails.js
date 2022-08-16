import React from 'react'
import { Form, Label, CheckboxField} from '@redwoodjs/forms'

const TakenDetails = ({klant, nextStep, prevStep, values, taken, handleTaken, vasteTaken }) => {
  console.log(values)
  console.log('details - ', vasteTaken)
  var takenArray = []

  const addTaken = (e) => {
    if(e.target.checked){
      takenArray.push(e.target.value);
    } else {
      if(takenArray.includes(e.target.value)){
        takenArray.pop(e.target.value)
      }
    }
    console.log(takenArray)
  }

  const Continue = e => {
    console.log(takenArray)
    handleTaken(takenArray)
    e.preventDefault()
    nextStep()
  }

  const Previous = e => {
    handleTaken(takenArray)
    e.preventDefault();
    prevStep()
  }

  return (
    <div>
      <div>
        <p>
          {klant.naam} heeft als vaste taken:
          <br/>
          {vasteTaken.map((vast) => (
            <div>
              - {vast.taak}
            </div>
          ))}
        </p>
      </div>
      <Form>
      <Label name="taken" key="takenLabel">Taken</Label>
        {taken.map((num) => (
          <div>
          <CheckboxField key={num.id} name="taken" id={num.id} value={num.id} onChange={addTaken}/>
            <Label key={num.id+10} htmlFor={num.id}>{num.taak}</Label>
          </div>
        ))}
        <br/>

        <button onClick={ Continue } key="continueButton">Next</button>
        <button onClick={ Previous } key="previousButton">Previous</button>
      </Form>
    </div>
  )
}

export default TakenDetails