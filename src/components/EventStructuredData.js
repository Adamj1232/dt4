import React from 'react';
import { Helmet } from 'react-helmet-async';

const EventStructuredData = ({ events }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": events.map((event, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Event",
        "name": event.name,
        "startDate": event.startDate,
        "endDate": event.endDate || event.startDate, // If no specific end date, use same as start date
        "location": {
          "@type": "Place",
          "name": event.venue,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": event.city,
            "addressRegion": event.state,
            "addressCountry": "US"
          }
        },
        "performer": {
          "@type": "MusicGroup",
          "name": "Dealer Takes Four"
        },
        "offers": {
          "@type": "Offer",
          "url": event.ticketLink || "https://www.dealertakesfour.com/#tour",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default EventStructuredData; 