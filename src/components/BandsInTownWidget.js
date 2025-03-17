import React, { useEffect } from 'react';

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
    const script = document.createElement('script');
    script.src = 'https://widgetv3.bandsintown.com/main.min.js';
    script.charset = 'utf-8';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a
      className="bit-widget-initializer"
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
      data-date-format={theme.dateFormat}
    />
  );
};

export default BandsInTownWidget; 