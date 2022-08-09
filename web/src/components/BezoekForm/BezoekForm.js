import { Form, Label, Submit, SelectField, CheckboxField, FormError, DatetimeLocalField } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'

import React, { useState } from 'react'
import { toast } from '@redwoodjs/web/toast'
import Datetime from 'react-datetime'

const CREATE_BEZOEK_MUTATION = gql`
  mutation CreateBezoekMutation($input: CreateBezoekInput!) {
    createBezoek(input: $input) {
      id
      klantId
      userId
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
  console.log('vasteTaken = ', vasteTaken)
  // console.log(taken)

  const [createBezoek, {loading, error}] = useMutation(CREATE_BEZOEK_MUTATION, {
    onCompleted: () => {
      toast.success('Klant created')
      navigate(routes.home())
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })


  const onSubmit = (input) => { // Only send the id, or send the entire user/klant thing???
    var bezoekTaken = []
    input.taken.forEach(value => {
      bezoekTaken.push(parseInt(value))
    })
    var selfInsert = {create: bezoekTaken}

  // taken: {
  //   create: [{ name: 'Magic' }, { name: 'Butterflies' }],
  // }
    const castInput = Object.assign(input, {klantId: parseInt(input.klantId), userId: parseInt(input.userId), taken: bezoekTaken}) // Scaffolding didn't work properly so we have to manually cast the input
    console.log(castInput)
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
