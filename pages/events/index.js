import React from 'react'
import Events from '../../components/Events';
import EventsHeader from '../../components/EventsHeader';
import Footer from '../../components/Footer';


const events = () => {
  return (
    <>
    <EventsHeader/>
    <Events/>
    <Footer/>
    </>
  );
}

export default events