import React from 'react'
import Event from '../components/Event'
import EventNav from '../components/EventNav'
import UpcomingEvent from '../components/UpcomingEvent'

const event = () => {
  return (
    <div>
        <EventNav/>
        <Event/>
        <UpcomingEvent />
    </div>
  )
}

export default event