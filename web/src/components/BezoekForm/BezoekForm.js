import {
  Form,
  Label,
  TextField,
  TextAreaField,
  Submit,
  SelectField,
  FormError
} from '@redwoodjs/forms'

const CREATE_BEZOEK_MUTATION = gql`
  mutation CreateBezoekMutation($input: CreateBezoekInput!) {
    createBezoek(input: $input) {
      id
      klant
      medewerker
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


klant-medewerker-start-end
const BezoekForm = ({taken, klanten, medewerkers}) => {
  const [createBezoek, {loading, error}] = useMutation(CREATE_BEZOEK_MUTATION)
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
        <SelectField name="medewerker" multiple={true} validation={{ required: true }}>
            {medewerkers.map((num) => (
              <option key={num.id}>{num.name}, {num.email}</option>
            ))}
        </SelectField>


        <Label name="start">
          Start tijd
        </Label>



        <Label name="end">
          Eind tijd
        </Label>


      </Form>
    </div>
  )
}

export default BezoekForm
