import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import KlantForm from 'src/components/Klant/KlantForm'

export const QUERY = gql`
  query EditKlantById($id: Int!) {
    klant: klant(id: $id) {
      id
      naam
      adres
      postcode
      woonplaats
      taken{id, taak, extra}
    }
    taken: taaks {
      id
      taak
      extra
    }
  }
`
const UPDATE_KLANT_MUTATION = gql`
  mutation UpdateKlantMutation($id: Int!, $input: UpdateKlantInput!) {
    updateKlant(id: $id, input: $input) {
      id
      naam
      adres
      postcode
      woonplaats
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ klant, taken}) => {

  const [updateKlant, { loading, error }] = useMutation(UPDATE_KLANT_MUTATION, {
    onCompleted: () => {
      toast.success('Klant updated')
      navigate(routes.klanten())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateKlant({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit {klant.naam}
        </h2>
      </header>

      <div className="rw-segment-main">
        <KlantForm
          klant={klant}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
      <div>Vaste taken:</div>
      <br/>


      <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>#</th>

            <th>Taak</th>

            <th>Extra</th>

            <th>&nbsp;</th>
          </tr>
        </thead>

        <tbody>
          {klant.taken.map((taak) => (
            <tr key={taak.id}>
              <td>i++ basically</td>

              <td>{truncate(taak.taak)}</td>

              <td>{truncate(taak.extra)}</td>

              <td>
                <nav className="rw-table-actions">

                  <button
                    type="button"
                    title={'Delete taak ' + taak.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(klant.id, taak)}
                    >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
          <tr>
            <td>i+1 basically</td>
            <td>
              <select>
                {taken.map((num) => (
                  <option key={num.id}>{num.taak}</option>
                ))}
              </select>
              </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}
