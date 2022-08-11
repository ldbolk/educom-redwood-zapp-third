import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'

const DELETE_BEZOEK_MUTATION = gql`
  mutation DeleteBezoekMutation($id: Int!) {
    deleteBezoek(id: $id) {
      id
    }
  }
`

const UPDATE_BEZOEK_TAKEN_MUTATION = gql`
  mutation UpdateBezoekTakenMutation($id: Int!, $input: UpdateBezoekTakenInput!) {
    updateBezoekTaken(id: $id, input: $input) {
      id
    }
  }
`

const REMOVE_BEZOEK_TAKEN_MUTATION = gql`
  mutation RemoveBezoekTakenMutation($id: Int!, $input: RemoveBezoekTakenInput!) {
    removeBezoekTaken(id: $id, input: $input) {
      id
    }
  }
`


const Bezoek = ({ bezoek, taken }) => {
  var selectedTaak = 0;

  var castEvent = [];
  castEvent.push({
        id: bezoek.id,
        title: bezoek.klant.naam,
        start: Date.parse(bezoek.start),
        end: Date.parse(bezoek.end)
  })
  const [deleteBezoek] = useMutation(DELETE_BEZOEK_MUTATION, {
    onCompleted: () => {
      toast.success('Bezoek deleted')
      navigate(routes.home())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const [updateTaken] = useMutation(UPDATE_BEZOEK_TAKEN_MUTATION, {
    onCompleted: () => {
      toast.success('Taak toegevoegd')
      window.location.reload(false)
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const [removeTaken] = useMutation(REMOVE_BEZOEK_TAKEN_MUTATION, {
    onCompleted: () => {
      toast.success('Taak verwijderd')
      window.location.reload(false)
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete bezoek ' + id + '?')) {
      alert('deleted')
      deleteBezoek({ variables: { id } })
    }
  }

  const onDeleteTaakClick = (input) => {
    const id = bezoek.id
    // const input = 2
    removeTaken({variables: {id, input:{taken: input}}})
    // console.log(input)
  }


  const onAddTaak = () => {
    const id = bezoek.id
    const input = selectedTaak
    console.log(input)
    if (input != 0) {
      updateTaken({variables: {id, input:{taken: parseInt(input)}}})
    } else {
      toast.error("Please first select a taak")
    }
  }

  const onChangeKlant = () => {
    console.log(bezoek.klant.id)
  }

  const onChangeMedewerker = () => {
    console.log(bezoek.medewerker.id)
  }

  const handleChange = (e) => {
    selectedTaak = e.target.value
  }

  return (
    <>
      <div>
        <button
          type="button"
          title={'Delete boeking ' + bezoek.id}
          className="rw-button rw-button-small rw-button-red"
          onClick={() => onDeleteClick(bezoek.id)}
          >
          Delete
        </button>
      </div>


      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Bezoek nr. {bezoek.id}'s Details
          </h2>
        </header>
      <div style={{width: "40%"}}>
        <FullCalendar
        headerToolbar={false}
        height="350px"
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={castEvent}
        />
      </div>


      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Klant
          </h2>
        </header>
        <h2>
          {bezoek.klant.naam}
        </h2>
        <p>{bezoek.klant.adres}</p>
        <p>{bezoek.klant.postcode}</p>
        <p>{bezoek.klant.woonplaats}</p>
        <button
          type="button"
          title={'Add taak'}
          className="rw-button rw-button-small rw-button-blue"
          onClick={() => onChangeKlant()}
          >
          Selecteer Klant
        </button>
      </div>

      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Medewerker
          </h2>
        </header>
        <h2>
          {bezoek.medewerker.name}
        </h2>
        <p>{bezoek.medewerker.email}</p>
        <button
          type="button"
          title={'Add taak'}
          className="rw-button rw-button-small rw-button-blue"
          onClick={() => onChangeMedewerker(bezoek.medewerker.id)}
          >
          Selecteer medewerker
        </button>
      </div>

      <br/><br/>

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
          {bezoek.taken.map((taak) => (
            <tr key={taak.id}>
              <td>i++ basically</td>

              <td>{taak.taak}</td>

              <td>{taak.extra}</td>

              <td>
                <nav className="rw-table-actions">

                  <button
                    type="button"
                    title={'Delete taak ' + taak.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteTaakClick(taak.id)}
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
              <select onChange={handleChange}>
                {taken.map((num) => (
                  <option key={num.id} value={num.id}>{num.taak}</option>
                  ))}
              </select>
            </td>
            <td/>
            <td>
              <nav className="rw-table-actions">
                <button
                  type="button"
                  title={'Add taak'}
                  className="rw-button rw-button-small rw-button-blue"
                  onClick={() => onAddTaak()}
                  >
                  Add
                </button>
              </nav>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>

    </>
  )
}

export default Bezoek
