import React from 'react'
import { Form, Label, Submit, SelectField, CheckboxField, FormError, DatetimeLocalField } from '@redwoodjs/forms'


const PeopleDetails = ({ nextStep, handleChange, values, medewerkers, klanten }) => {
  console.log(values)

  const Continue = e => {
    e.preventDefault()
    nextStep()
  }

  return (
    <div>
      <Form>
        <Label name="klantId">
          Klant
        </Label>
        <SelectField name="klantId" validation={{ required: true}} onChange={handleChange('klantId')} defaultValue={''}>
          <option value="" disabled>Selecteer de klant</option>
            {klanten.map((num) => (
              <option placeholder={"Select"} value={num.id} key={num.id} >{num.naam}</option>
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