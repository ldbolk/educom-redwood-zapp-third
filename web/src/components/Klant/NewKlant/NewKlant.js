import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import KlantForm from 'src/components/Klant/KlantForm'

const CREATE_KLANT_MUTATION = gql`
  mutation CreateKlantMutation($input: CreateKlantInput!) {
    createKlant(input: $input) {
      id
    }
  }
`

const NewKlant = () => {
  const [createKlant, { loading, error }] = useMutation(CREATE_KLANT_MUTATION, {
    onCompleted: () => {
      toast.success('Klant created')
      navigate(routes.klanten())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createKlant({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Klant</h2>
      </header>

      <div className="rw-segment-main">
        <KlantForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewKlant
