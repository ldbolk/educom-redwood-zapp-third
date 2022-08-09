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


const Bezoek = ({ bezoek }) => {
  var castEvent = [];
  castEvent.push({
        id: bezoek.id,
        title: bezoek.klant.naam,
        start: Date.parse(bezoek.start),
        end: Date.parse(bezoek.end)
  })
  console.log(bezoek)
  const [deleteKlant] = useMutation(DELETE_BEZOEK_MUTATION, {
    onCompleted: () => {
      toast.success('Bezoek deleted')
      navigate(routes.home())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete bezoek ' + id + '?')) {
      deleteKlant({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Bezoek nr. {bezoek.id}'s Details
          </h2>
        </header>
      </div>
      <div style={{width: "40%"}}>
        <FullCalendar
        headerToolbar={false}
        height="350px"
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={castEvent}
        />
      </div>

    </>
  )
}

export default Bezoek
