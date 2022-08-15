import React from 'react'
import { Form, Label, Submit, SelectField, CheckboxField, FormError, DatetimeLocalField } from '@redwoodjs/forms'
import { useQuery } from '@redwoodjs/web'


const PeopleDetails = ({ nextStep, handleChange, values, medewerkers, klanten }) => {
  console.log(values)

  const Continue = e => {
    e.preventDefault()
    nextStep()
  }

  const e = (f) => {
    console.log(f.target.value)
    // TODO: Query for klant to send vastetaken to taken to autocheck the vastetaken
  }

  return (
    <div>
      <Form>
        <Label name="klantId">
          Klant
        </Label>
        <SelectField name="klantId" validation={{ required: true}} onChange={e} defaultValue={''}>
          <option value="" disabled>Selecteer de klant</option>
            {klanten.map((num) => (
              <option onChange={e} placeholder={"Select"} value={num.id} key={num.id} >{num.naam}</option>
            ))}
        </SelectField>
        <br/>

        <Label name="userId">Medewerker</Label>
         <SelectField name="userId" validation={{ required: true }} onChange={handleChange('userId')} defaultValue={''}>
          <option value='' disabled>Selecteer medewerker</option>
             {medewerkers.map((num) => (
              <option value={num.id} key={num.id}>{num.email}</option>
            ))}
        </SelectField>
        <br/>

        <button onClick={ Continue }>Next</button>
      </Form>
    </div>
  )
}

export default PeopleDetails