import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import BezoekCell from 'src/components/BezoekCell';

import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';

const handleDateClick = (arg) => {
  console.log('woo')
  alert(arg.title)
}

const HomePage = () => {

  return (
    <>
      <button>Bezoek toevoegen</button>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={[
          {title: 'event1', date: '2022-08-04'}
        ]}
        dateClick={handleDateClick}
      />
      <BezoekCell/>


    </>
  )
}

export default HomePage
