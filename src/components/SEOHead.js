import { Helmet } from 'react-helmet-async';

export default function SEOHead() {
  const baseUrl = 'https://www.dealertakesfour.com';
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang="en" />
      <title>Dealer Takes Four - High-Energy Rock Band from Denver, Colorado</title>
      <meta name="description" content="Experience the greatest American rock n' roll story with Dealer Takes Four. A unique blend of rock, country, and Americana featuring blazing fiddle, trumpet, and guitar harmonies. Book us for your next event!" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#0c0c0c" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Dealer Takes Four" />
      <meta name="geo.region" content="US-CO" />
      <meta name="geo.placename" content="Denver" />
      
      {/* Keywords */}
      <meta name="keywords" content="Dealer Takes Four, Denver Rock Band, Live Music Colorado, Rock and Roll, Country Rock, Americana Music, Live Entertainment Denver, James and the Devil, Colorado Music" />
      
      {/* Open Graph tags */}
      <meta property="og:title" content="Dealer Takes Four - High-Energy Rock Band from Denver" />
      <meta property="og:description" content="Experience the unique sound of Dealer Takes Four - a powerful blend of rock, country, and Americana music from Denver, Colorado. Book us for your next event!" />
      <meta property="og:image" content={`${baseUrl}/images/WinterDTF-Clean_no_bg_compressed.webp`} />
      <meta property="og:image:alt" content="Dealer Takes Four band photo" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dealer Takes Four" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dealer Takes Four - Denver Rock Band" />
      <meta name="twitter:description" content="Experience the unique sound of Dealer Takes Four - a powerful blend of rock, country, and Americana music from Denver, Colorado." />
      <meta name="twitter:image" content={`${baseUrl}/images/WinterDTF-Clean_no_bg_compressed.webp`} />
      <meta name="twitter:image:alt" content="Dealer Takes Four band photo" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={baseUrl} />
      
      {/* Preload critical assets */}
      <link rel="preload" href="/images/DT4_logo_initials.webp" as="image" fetchpriority="high" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
      
      {/* Favicons and PWA */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" href="/images/DT4_logo_initials.webp" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="apple-mobile-web-app-title" content="Dealer Takes Four" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "MusicGroup",
          "name": "Dealer Takes Four",
          "url": baseUrl,
          "logo": `${baseUrl}/images/DT4_logo_initials.webp`,
          "image": `${baseUrl}/images/WinterDTF-Clean_no_bg_compressed.webp`,
          "description": "Experience the greatest American rock n' roll story with Dealer Takes Four. A unique blend of rock, country, and Americana featuring blazing fiddle, trumpet, and guitar harmonies.",
          "genre": ["Rock", "Country Rock", "Americana"],
          "foundingLocation": {
            "@type": "Place",
            "name": "Denver, Colorado"
          },
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
              "name": "Brian Knapp",
              "roleName": "Band Member"
            },
            {
              "@type": "Person",
              "name": "Adam Carpenter",
              "roleName": "Band Member"
            },
            {
              "@type": "Person",
              "name": "Dave Ross",
              "roleName": "Band Member"
            },
            {
              "@type": "Person",
              "name": "Matt Stoner",
              "roleName": "Band Member"
            },
            {
              "@type": "Person",
              "name": "Marcus Spitz",
              "roleName": "Band Member"
            },
            {
              "@type": "Person",
              "name": "Brent Hannibal",
              "roleName": "Band Member"
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
          },
          "potentialAction": {
            "@type": "BookAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "mailto:DealerTakes4@gmail.com",
              "inLanguage": "en-US",
              "actionPlatform": [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform"
              ]
            },
            "result": {
              "@type": "BookBand",
              "name": "Book Dealer Takes Four"
            }
          }
        })}
      </script>
    </Helmet>
  );
} 