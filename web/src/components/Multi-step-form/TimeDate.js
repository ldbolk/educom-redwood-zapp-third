import React from 'react'
import { Form, Label, Submit, SelectField, CheckboxField, FormError, DatetimeLocalField } from '@redwoodjs/forms'

const TimeDate = ({ nextStep, prevStep, handleChange, values }) => {
  console.log(values)

  const Continue = e => {
    e.preventDefault()
    nextStep()
  }

  const Previous = e => {
    e.preventDefault();
    prevStep()
  }

  return (
    <div>
      <Form>
      <Label name="start" key="startLabel">
        Start tijd
      </Label>

      <DatetimeLocalField key="dateStart" name="start" onChange={handleChange('start')}/>
      <br/>


      <Label name="end" key="endLabel">
        Eind tijd
      </Label>
      <DatetimeLocalField key="dateEnd" name="end" onChange={handleChange('end')}/>
      <br/>

      <button onClick={ Continue } key="continueButton">Next</button>
      <button onClick={ Previous } key="previousButton">Previous</button>
      </Form>
    </div>
  )
}

export default TimeDate