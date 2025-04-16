import React, { useEffect, useState } from 'react'
import BandsInTownWidget from '../components/BandsInTownWidget'
import EventStructuredData from '../components/EventStructuredData'

const APP_ID = process.env.REACT_APP_BANDSINTOWN_APP_ID || '5643833ab6e08c056beb536bd9262a2f'
const bandsInTownArtistId = 'id_15581154'

const Shows = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    // Fetch events from Bandsintown API
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `https://rest.bandsintown.com/artists/${bandsInTownArtistId}/events/?app_id=${APP_ID}`
        )
        const data = await response.json()

        // Transform the data to match our schema
        const formattedEvents = data.map(event => ({
          name: 'Dealer Takes Four Live at ' + event.venue.name,
          startDate: event.datetime,
          venue: event.venue.name,
          city: event.venue.city,
          state: event.venue.region || event.venue.country,
          ticketLink: event.offers[0]?.url
        }))

        setEvents(formattedEvents)
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    }

    fetchEvents()
  }, [])

  return (
    <>
      <EventStructuredData events={events} />
      <h2 id="tour-title">Tour</h2>
      <div id="tour-date-container">
        <BandsInTownWidget artistId={bandsInTownArtistId} />
      </div>
    </>
  )
}

export default Shows
