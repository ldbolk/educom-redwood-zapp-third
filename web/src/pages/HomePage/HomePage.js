import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
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
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={[
          {title: 'event1', date: '2022-08-04'}
        ]}
        dateClick={handleDateClick}
      />


    </>
  )
}

export default HomePage
