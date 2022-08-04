import { Form, Label, Submit, SelectField, FormError } from '@redwoodjs/forms'
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
      <h3>Plan een bezoek in</h3>
      <Form onSubmit={onSubmit}>
        <FormError error={error}/>

        <Label name="klant">
          Klant
        </Label>
        <SelectField name="klant" validation={{ required: true }}>
          {klanten.map((num) => (
            <option key={num.id}>{num.naam}, {num.adres}</option>
          ))}
        </SelectField>


        <Label name="medewerker">
          Medewerker
        </Label>
        <SelectField name="medewerker" validation={{ required: true }}>
            {medewerkers.map((num) => (
              <option key={num.id}>{num.email}</option>
            ))}
        </SelectField>


        <Label name="taken">
          Taken
        </Label>
        <SelectField name="taken" multiple={true} validation={{ required: true }}>
          {taken.map((num) => (
            <option key={num.id}>{num.taak}, {num.extra}</option>
          ))}
        </SelectField>


        <Label name="start">
          Start tijd
        </Label>
        <Datetime value={start} onChange={date => setStart(date)} />


        <Label name="end">
          Eind tijd
        </Label>
        <Datetime value={end} onChange={date => setEnd(date)} open={true}/>

        <button>Add bezoek</button>
      </Form>
    </div>
)}

export default BezoekForm
