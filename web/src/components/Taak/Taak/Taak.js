import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_TAAK_MUTATION = gql`
  mutation DeleteTaakMutation($id: Int!) {
    deleteTaak(id: $id) {
      id
    }
  }
`

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Taak = ({ taak }) => {
  const [deleteTaak] = useMutation(DELETE_TAAK_MUTATION, {
    onCompleted: () => {
      toast.success('Taak deleted')
      navigate(routes.taaks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete taak ' + id + '?')) {
      deleteTaak({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Taak {taak.id} Detail
          </h2>
        </header>

        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>

              <td>{taak.id}</td>
            </tr>
            <tr>
              <th>Taak</th>

              <td>{taak.taak}</td>
            </tr>
            <tr>
              <th>Extra</th>

              <td>{taak.extra}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <nav className="rw-button-group">
        <Link
          to={routes.editTaak({ id: taak.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>

        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(taak.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Taak
