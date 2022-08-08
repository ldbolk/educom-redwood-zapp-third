import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'

import BezoekCell from 'src/components/BezoekCell';
import BezoekForm from 'src/components/BezoekForm';
import BezoekFormCell from 'src/components/BezoekFormCell';
import CalendarCell from 'src/components/Calendar/CalendarCell';

import Modal from 'react-modal'
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';

const HomePage = () => {



  return (
    <>
      <CalendarCell/>
    </>
  )
}

export default HomePage
