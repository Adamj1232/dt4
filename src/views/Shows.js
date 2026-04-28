import React, { useEffect, useRef, useState } from 'react'
import BandsInTownWidget from '../components/BandsInTownWidget'
import EventStructuredData from '../components/EventStructuredData'

const APP_ID = process.env.REACT_APP_BANDSINTOWN_APP_ID || '5643833ab6e08c056beb536bd9262a2f'
const bandsInTownArtistId = 'id_15581154'

const Shows = () => {
  const containerRef = useRef(null)
  const [events, setEvents] = useState([])
  const [shouldLoadShows, setShouldLoadShows] = useState(false)

  useEffect(() => {
    if (shouldLoadShows || !containerRef.current) return undefined

    if (!('IntersectionObserver' in window)) {
      setShouldLoadShows(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadShows(true)
          observer.disconnect()
        }
      },
      { rootMargin: '600px 0px' }
    )

    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [shouldLoadShows])

  useEffect(() => {
    if (!shouldLoadShows) return undefined

    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `https://rest.bandsintown.com/artists/${bandsInTownArtistId}/events/?app_id=${APP_ID}`
        )
        const data = await response.json()

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
    return undefined
  }, [shouldLoadShows])

  return (
    <>
      {shouldLoadShows && <EventStructuredData events={events} />}
      <h2 id="tour-title">TOUR</h2>
      <div id="tour-date-container" ref={containerRef}>
        {shouldLoadShows ? (
          <BandsInTownWidget artistId={bandsInTownArtistId} />
        ) : (
          <div className="tour-widget-placeholder" aria-live="polite">
            Tour dates are loading.
          </div>
        )}
      </div>
    </>
  )
}

export default Shows
