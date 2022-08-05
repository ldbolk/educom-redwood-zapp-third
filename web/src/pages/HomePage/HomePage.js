import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'

import BezoekCell from 'src/components/BezoekCell';
import BezoekForm from 'src/components/BezoekForm';
import BezoekFormCell from 'src/components/BezoekFormCell';

import Modal from 'react-modal'
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';



const handleDateClick = (arg) => {
  console.log(arg)
}

const HomePage = () => {

  const onEventAdded = event => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent(event)
  }

  return (
    <>
      <button><Link to={routes.bezoek()}>Bezoek</Link></button>
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
