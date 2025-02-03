import { Helmet } from 'react-helmet';

export default function SEOHead() {
  return (
    <Helmet>
      <title>Dealer Takes Four - Rock Band</title>
      <meta name="description" content="Experience the greatest American rock n' roll story with Dealer Takes Four. Live shows, music, and more." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph tags */}
      <meta property="og:title" content="Dealer Takes Four" />
      <meta property="og:description" content="Rock band from Colorado" />
      <meta property="og:image" content="/images/WinterDTF-Clean_no_bg_compressed.webp" />
      
      {/* Preload critical assets */}
      <link rel="preload" href="/images/DT4_logo_initials.webp" as="image" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
    </Helmet>
  );
} 