import { Form, Label, Submit, SelectField, CheckboxField, FormError, DatetimeLocalField } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

import React, { useState } from 'react'
import Datetime from 'react-datetime'

const CREATE_BEZOEK_MUTATION = gql`
  mutation CreateBezoekMutation($input: CreateBezoekInput!) {
    createBezoek(input: $input) {
      id
      klant
      medewerker
      taken
      start
      end
    }
    taken: taaks {
      id
      taak
      extra
    }
    klanten: klants {
      id
      naam
      taken
      adres
    }
    medewerkers: users {
      id
      name
      email
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
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const onSubmit = (input) => {
    console.log(input)
    // createBezoek({variables: { input }})
  }

  return (

    <div>
      <Form onSubmit={onSubmit}>
        <FormError error={error}/>

        <Label name="klant">
          Klant
        </Label>
        <SelectField name="klant" validation={{ required: true}}>
          {klanten.map((num) => (
            <option key={num.id} value={num}>{num.naam}</option>
          ))}
        </SelectField>
        <br/>


        <Label name="medewerker">
          Medewerker
        </Label>
        <SelectField name="medewerker" validation={{ required: true }}>
            {medewerkers.map((num) => (
              <option value={num} key={num.id}>{num.email}</option>
            ))}
        </SelectField>
        <br/>


        <Label name="taken">
          Taken
        </Label>
        {taken.map((num) => (
          <>
          <CheckboxField key={num.id} name="taken" id={num.id} value={num}/>
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
