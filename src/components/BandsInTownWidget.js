import React, { useEffect } from 'react'

const srOnlyStyle = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0,0,0,0)',
  border: '0'
}

/**
 * @typedef {Object} Theme
 * @property {string} [backgroundColor] - Background color in rgba format
 * @property {string} [separatorColor] - Separator color in rgba format
 * @property {string} [textColor] - Text color in rgba format
 * @property {string} [dateFormat] - Date format string
 */

/**
 * BandsInTown Widget Component
 * @param {Object} props
 * @param {string} props.artistId - The artist ID for BandsInTown
 * @param {Theme} [props.theme] - Theme configuration for the widget
 * @returns {JSX.Element}
 */
const BandsInTownWidget = ({
  artistId,
  theme = {
    backgroundColor: 'rgba(66,63,63,1)',
    separatorColor: 'rgba(192,36,36,1)',
    textColor: 'rgba(241,238,238,1)',
    dateFormat: 'MMM. D, YYYY'
  }
}) => {
  useEffect(() => {
    // Load the Bandsintown script dynamically
    const script = document.createElement('script')
    script.src = 'https://widgetv3.bandsintown.com/main.min.js'
    script.charset = 'utf-8'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup on unmount
      document.body.removeChild(script)
    }
  }, [])

  return (
    <a
      className="bit-widget-initializer"
      href={`https://www.bandsintown.com/${encodeURIComponent(artistId)}`}
      data-artist-name={artistId}
      data-background-color={theme.backgroundColor}
      data-separator-color={theme.separatorColor}
      data-text-color={theme.textColor}
      data-font="Helvetica"
      data-auto-style="true"
      data-button-label-capitalization="uppercase"
      data-header-capitalization="uppercase"
      data-location-capitalization="uppercase"
      data-venue-capitalization="uppercase"
      data-display-local-dates="true"
      data-local-dates-position="tab"
      data-display-past-dates="true"
      data-display-details="false"
      data-display-lineup="false"
      data-display-start-time="false"
      data-social-share-icon="true"
      data-display-limit="all"
      data-date-format="MMM. D, YYYY"
      data-date-orientation="horizontal"
      data-date-border-color="#4A4A4A"
      data-date-border-width="1px"
      data-date-capitalization="capitalize"
      data-date-border-radius="10px"
      data-event-ticket-cta-size="medium"
      data-event-custom-ticket-text=""
      data-event-ticket-text="TICKETS"
      data-event-ticket-icon="false"
      data-event-ticket-cta-text-color="rgba(255,255,255,1)"
      data-event-ticket-cta-bg-color="rgba(74,74,74,1)"
      data-event-ticket-cta-border-color="rgba(74,74,74,1)"
      data-event-ticket-cta-border-width="0px"
      data-event-ticket-cta-border-radius="2px"
      data-sold-out-button-text-color="rgba(255,255,255,1)"
      data-sold-out-button-background-color="rgba(74,74,74,1)"
      data-sold-out-button-border-color="rgba(74,74,74,1)"
      data-sold-out-button-clickable="true"
      data-event-rsvp-position="left"
      data-event-rsvp-cta-size="medium"
      data-event-rsvp-only-show-icon="false"
      data-event-rsvp-text="RSVP"
      data-event-rsvp-icon="false"
      data-event-rsvp-cta-text-color="rgba(74,74,74,1)"
      data-event-rsvp-cta-bg-color="rgba(255,255,255,1)"
      data-event-rsvp-cta-border-color="rgba(74,74,74,1)"
      data-event-rsvp-cta-border-width="1px"
      data-event-rsvp-cta-border-radius="2px"
      data-follow-section-position="top"
      data-follow-section-alignment="center"
      data-follow-section-header-text="Get updates on new shows, new music, and more"
      data-follow-section-cta-size="medium"
      data-follow-section-cta-text="FOLLOW"
      data-follow-section-cta-icon="false"
      data-follow-section-cta-text-color="rgba(255,255,255,1)"
      data-follow-section-cta-bg-color="rgba(74,74,74,1)"
      data-follow-section-cta-border-color="rgba(74,74,74,1)"
      data-follow-section-cta-border-width="0px"
      data-follow-section-cta-border-radius="2px"
      data-play-my-city-position="none"
      data-bit-logo-position="none"
      data-optin-font=""
      data-optin-text-color=""
      data-optin-bg-color=""
      data-optin-cta-text-color=""
      data-optin-cta-bg-color=""
      data-optin-cta-border-width=""
      data-optin-cta-border-radius=""
      data-optin-cta-border-color=""
      data-language="en"
      data-layout-breakpoint="700"
      data-app-id=""
      data-affil-code=""
    >
      <span style={srOnlyStyle}>View tour dates on Bandsintown</span>
    </a>
  )
}

export default BandsInTownWidget
