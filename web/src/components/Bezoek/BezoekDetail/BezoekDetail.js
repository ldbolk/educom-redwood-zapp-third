import { Form, FormError, Label, SelectField } from '@redwoodjs/forms'
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {useState} from 'react'                                                            // TODO

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

const UPDATE_BEZOEK_KLANT_MUTATION = gql`
  mutation UpdateBezoekKlantMutation($id: Int!, $input: UpdateBezoekKlantInput!) {
    updateBezoekKlant(id: $id, input: $input) {
      id
    }
  }
`

const UPDATE_BEZOEK_MEDEWERKER_MUTATION = gql`
  mutation UpdateBezoekMedewerkerMutation($id: Int!, $input: UpdateBezoekMedewerkerInput!) {
    updateBezoekMedewerker(id: $id, input: $input) {
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


const Bezoek = ({ bezoek, taken, klanten, medewerkers }) => {
  var selectedTaak = 0;
  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)

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

  const [updateKlant, {loading, error}] = useMutation(UPDATE_BEZOEK_KLANT_MUTATION, {
    onCompleted: () => {
      toast.success('Klant veranderd')
      window.location.reload(false)
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  const [updateMedewerker, {loading2, error2}] = useMutation(UPDATE_BEZOEK_MEDEWERKER_MUTATION, {
    onCompleted: () => {
      toast.success('Medewerker veranderd')
      window.location.reload(false)
    },
    onError: (error2) => {
      toast.error(error2.message)
    }
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

  const onSubmitKlant = (input) => {
    const id = bezoek.id
    console.log(input.klantId)
    updateKlant({variables: {id, input:{klantId: parseInt(input.klantId)}}})
  }

  const onSubmitMedewerker = (input) => {
    const id = bezoek.id
    console.log(input.userId)
    updateMedewerker({variables: {id, input:{userId: parseInt(input.userId)}}})
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
          title={'Change Klant'}
          className="rw-button rw-button-small rw-button-blue"
          onClick={() => setVisible(!visible)}
          >
          Selecteer Klant
        </button>

        {visible &&
        <div>
          <Form onSubmit={onSubmitKlant}>
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

          <button>Klant veranderen</button>
          </Form>
        </div>
        }
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
          title={'Change Medewerker'}
          className="rw-button rw-button-small rw-button-blue"
          onClick={() => setVisible2(!visible2)}
          >
          Selecteer Medewerker
        </button>

        {visible2 &&
        <div>
          <Form onSubmit={onSubmitMedewerker}>
          <FormError error={error2}/>

          <Label name="userId">
            Medewerker
          </Label>
          <SelectField name="userId" validation={{ required: true}}>
            {medewerkers.map((num) => (
              <option value={num.id} key={num.id}>{num.name}</option>
            ))}
          </SelectField>
          <br/>

          <button>Medewerker veranderen</button>
          </Form>
        </div>
        }
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
