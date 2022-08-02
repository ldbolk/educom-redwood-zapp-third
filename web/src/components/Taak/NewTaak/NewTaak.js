import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TaakForm from 'src/components/Taak/TaakForm'

const CREATE_TAAK_MUTATION = gql`
  mutation CreateTaakMutation($input: CreateTaakInput!) {
    createTaak(input: $input) {
      id
    }
  }
`

const NewTaak = () => {
  const [createTaak, { loading, error }] = useMutation(CREATE_TAAK_MUTATION, {
    onCompleted: () => {
      toast.success('Taak created')
      navigate(routes.taken())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createTaak({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Taak</h2>
      </header>

      <div className="rw-segment-main">
        <TaakForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTaak
