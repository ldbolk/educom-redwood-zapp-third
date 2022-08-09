import { Link, routes, navigate } from '@redwoodjs/router'


import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';

import { formatDate } from '@fullcalendar/react'

const handleEventClick = (arg) => {
  navigate(routes.bezoekDetails({ id: arg.event.id }))
  console.log(arg.event.title)
  console.log(arg.event.id)
}

const Calendar = ({ bezoek }) => {
  var events = []
  bezoek.forEach(event => {
    // formatDate(Date.parse(event.start), {month: 'long', year: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'})
    // formatDate(Date.parse(event.end), {month: 'long', year: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'})
    events.push(
      {
        id: event.id,
        title: event.klant.naam,
        start: Date.parse(event.start),
        end: Date.parse(event.end)
      }
    )
  });
  // console.log(bezoek)
  // console.log(events)

  return (
    <>

    <button><Link to={routes.bezoek()}>Bezoek</Link></button>
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      eventClick={handleEventClick}
    />
    </>
  )
}

export default Calendar