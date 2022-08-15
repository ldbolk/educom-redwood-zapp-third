import React from 'react'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'


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

const Confirmation = ({ prevStep, nextStep, values }) => {
  console.log(values);
  const { klantId, userId, taken, start, end } = values

  const [createBezoek, {loading, error}] = useMutation(CREATE_BEZOEK_MUTATION, {
    onCompleted: () => {
      toast.success('Bezoek created')
      nextStep();
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  const Continue = e => {
    e.preventDefault();
    var bezoekTaken = []
    values.taken.forEach(value => {
      bezoekTaken.push(parseInt(value))
    })
    values.start = new Date(values.start).toISOString()
    values.end = new Date(values.end).toISOString()
    const castInput = Object.assign(values, {klantId: parseInt(values.klantId), userId: parseInt(values.userId), taken: bezoekTaken}) // Scaffolding didn't work properly so we have to manually cast the input
    console.log(castInput)
    createBezoek({variables: { input: castInput }})
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
      <div>
        <ul>
          <li>{klantId}</li>
          <li>{userId}</li>
          <li>{taken}</li>
          <li>{start}</li>
          <li>{end}</li>
        </ul>
        <br/>

        <button onClick={Continue}>Confirm</button>
        <button onClick={Previous}>Previous</button>

      </div>
  )
}

export default Confirmation