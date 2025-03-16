import { Helmet } from 'react-helmet';

export default function SEOHead() {
  return (
    <Helmet>
      <title>Dealer Takes Four - High-Energy Rock Band from Denver, Colorado</title>
      <meta name="description" content="Experience the greatest American rock n' roll story with Dealer Takes Four. A unique blend of rock, country, and Americana featuring blazing fiddle, trumpet, and guitar harmonies. Book us for your next event!" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#0c0c0c" />
      
      {/* Keywords */}
      <meta name="keywords" content="Dealer Takes Four, Denver Rock Band, Live Music Colorado, Rock and Roll, Country Rock, Americana Music, Live Entertainment Denver" />
      
      {/* Open Graph tags */}
      <meta property="og:title" content="Dealer Takes Four - High-Energy Rock Band from Denver" />
      <meta property="og:description" content="Experience the unique sound of Dealer Takes Four - a powerful blend of rock, country, and Americana music from Denver, Colorado. Book us for your next event!" />
      <meta property="og:image" content="https://res.cloudinary.com/dkf9qmqxa/image/upload/q_auto:eco/v1705945336/AJ8A1852_uvau2o.jpg" />
      <meta property="og:url" content="https://www.dealertakesfour.com" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dealer Takes Four" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dealer Takes Four - Denver Rock Band" />
      <meta name="twitter:description" content="Experience the unique sound of Dealer Takes Four - a powerful blend of rock, country, and Americana music from Denver, Colorado." />
      <meta name="twitter:image" content="https://res.cloudinary.com/dkf9qmqxa/image/upload/q_auto:eco/v1705945336/AJ8A1852_uvau2o.jpg" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.dealertakesfour.com" />
      
      {/* Preload critical assets */}
      <link rel="preload" href="/images/DT4_logo_initials.webp" as="image" fetchpriority="high" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
      
      {/* PWA related tags */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "MusicGroup",
          "name": "Dealer Takes Four",
          "url": "https://www.dealertakesfour.com",
          "image": "https://res.cloudinary.com/dkf9qmqxa/image/upload/q_auto:eco/v1705945336/AJ8A1852_uvau2o.jpg",
          "description": "Experience the greatest American rock n' roll story with Dealer Takes Four. A unique blend of rock, country, and Americana featuring blazing fiddle, trumpet, and guitar harmonies.",
          "genre": ["Rock", "Country Rock", "Americana"],
          "sameAs": [
            "https://www.facebook.com/DealerTakesFour",
            "https://www.instagram.com/dealertakesfour",
            "https://open.spotify.com/artist/44BPi8FlVI5gKq7DW7L0Xg",
            "https://music.apple.com/artist/1663002784",
            "https://www.youtube.com/@dealertakesfour"
          ],
          "member": [
            {
              "@type": "Person",
              "name": "Brian Knapp"
            },
            {
              "@type": "Person",
              "name": "Adam Carpenter"
            },
            {
              "@type": "Person",
              "name": "Dave Ross"
            },
            {
              "@type": "Person",
              "name": "Matt Stoner"
            },
            {
              "@type": "Person",
              "name": "Marcus Spitz"
            },
            {
              "@type": "Person",
              "name": "Kurt Bradley"
            }
          ],
          "location": {
            "@type": "Place",
            "name": "Denver, Colorado",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Denver",
              "addressRegion": "CO",
              "addressCountry": "US"
            }
          },
          "event": {
            "@type": "MusicEvent",
            "name": "Live Shows",
            "description": "Live performances by Dealer Takes Four",
            "offers": {
              "@type": "Offer",
              "url": "mailto:DealerTakes4@gmail.com",
              "availability": "https://schema.org/InStock"
            }
          }
        })}
      </script>
    </Helmet>
  );
} 