import { Form, Label, Submit, SelectField, CheckboxField, FormError, DatetimeLocalField } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

import React, { useState } from 'react'
import Datetime from 'react-datetime'

const CREATE_BEZOEK_MUTATION = gql`
  mutation CreateBezoekMutation($input: CreateBezoekInput!) {
    createBezoek(input: $input) {
      id
      klantId
      userId
      taken{id}
      start
      end
    }
  }
`

const BezoekForm = ({taken, klanten, medewerkers}) => {
  var vasteTaken = []
  klanten.forEach(element => {
    // console.log(element)
    vasteTaken.push(element.taken)
  });
  console.log(vasteTaken)
  console.log(taken)

  const [createBezoek, {loading, error}] = useMutation(CREATE_BEZOEK_MUTATION)


  const onSubmit = (input) => {
    const castInput = Object.assign(input, {klantId: parseInt(input.klantId), userId: parseInt(input.userId), taken: parseInt(input.taken[0], 10)})
    console.log(input)
    console.log(input.taken[0])
    createBezoek({variables: { input: castInput }})
  }

  return (

    <div>
      <Form onSubmit={onSubmit}>
        <FormError error={error}/>

        <Label name="klantId">
          Klant
        </Label>
        <SelectField name="klantId" validation={{ required: true}}>
          {klanten.map((num) => (
            <option value={num.id} key={num.id}>{num.naam}</option>
          ))}
        </SelectField>
        <br/>


        <Label name="userId">
          Medewerker
        </Label>
        <SelectField name="userId" validation={{ required: true }}>
            {medewerkers.map((num) => (
              <option value={num.id} key={num.id}>{num.email}</option>
            ))}
        </SelectField>
        <br/>


        <Label name="taken">
          Taken
        </Label>
        {taken.map((num) => (
          <>
          <CheckboxField key={num.id} name="taken" id={num.id} value={num.id}/>
          <Label htmlFor={num.id}>{num.taak}</Label>
          </>
        ))}
        {/* <SelectField name="taken" multiple={true}>
          {taken.map((num) => (
            <option key={num.id}>{num.taak} - {num.extra}</option>
          ))}
        </SelectField> */}
        <br/>


        <Label name="start">
          Start tijd
        </Label>
        <DatetimeLocalField key="dateStart" name="start"/>
        {/* <Datetime name="start" value={start} onChange={date => setStart(date)} /> */}
        <br/>


        <Label name="end">
          Eind tijd
        </Label>
        <DatetimeLocalField key="dateEnd" name="end"/>
        {/* <Datetime name="end" value={end} onChange={date => setEnd(date)} open={true}/> */}
        <br/>

        <button>Add bezoek</button>
      </Form>
    </div>
)}

export default BezoekForm
