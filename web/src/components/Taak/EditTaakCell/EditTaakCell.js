import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TaakForm from 'src/components/Taak/TaakForm'

export const QUERY = gql`
  query EditTaakById($id: Int!) {
    taak: taak(id: $id) {
      id
      taak
      extra
    }
  }
`
const UPDATE_TAAK_MUTATION = gql`
  mutation UpdateTaakMutation($id: Int!, $input: UpdateTaakInput!) {
    updateTaak(id: $id, input: $input) {
      id
      taak
      extra
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ taak }) => {
  const [updateTaak, { loading, error }] = useMutation(UPDATE_TAAK_MUTATION, {
    onCompleted: () => {
      toast.success('Taak updated')
      navigate(routes.taken())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateTaak({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Taak {taak.id}</h2>
      </header>

      <div className="rw-segment-main">
        <TaakForm taak={taak} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
