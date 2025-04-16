import React, { Suspense, lazy, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import CardPng from './images/DT4_logo_initials.webp'
import LogoPng from './images/WinterDTF-Clean_no_bg_compressed.webp'
import { ReactComponent as FbB } from './images/facebook.svg'
import { ReactComponent as IgB } from './images/instagram.svg'
import { ReactComponent as Email } from './images/mail.svg'
import { ReactComponent as SpotifyIcon } from './images/spotifywhite.svg'
import { ReactComponent as AppleMusicIcon } from './images/applemusicwhite.svg'
import { ReactComponent as YouTubeIcon } from './images/youtubewhite.svg'
import ParticleBackground from './components/ParticleBackground'
import MainMenu from './components/MainMenu'
import useViewport from './hooks/useViewport'
import OptimizedImage from './components/OptimizedImage'
import SEOHead from './components/SEOHead'
import { CloudinaryContext } from 'cloudinary-react'
import ImageGallery from './components/ImageGallery'
import SmoothScroll from './components/SmoothScroll'
import ScrollAnimatedLogo from './components/ScrollAnimatedLogo'

// Lazy load all major components
const LazyLoadedShows = lazy(() => import('./views/Shows.js'))
const LazyLoadedMusicPlayer = lazy(() => import('./views/MusicPlayer.js'))
const LazyLoadedMedia = lazy(() => import('./views/Media.js'))

// Basic Skeleton Loader Component
const SkeletonLoader = () => (
  <div className="section-loader">
    <div className="skeleton-block skeleton"></div>
    <div style={{ width: '90%' }}>
        <div className="skeleton-line skeleton"></div>
        <div className="skeleton-line skeleton" style={{width: '60%'}}></div>
    </div>
  </div>
);

function App() {
  const { width } = useViewport()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time (adjust as needed)
    const timer = setTimeout(() => setIsLoading(false), 500) // Increased delay slightly for spinner visibility
    return () => clearTimeout(timer)
  }, [])

  const MainLogo = () => (
    <ScrollAnimatedLogo>
      <OptimizedImage
        src={width < 800 ? CardPng : LogoPng}
        alt="Dealer Takes Four logo"
        className="card-logo"
        width={width < 800 ? '200' : '400'}
        height={width < 800 ? '100' : '200'}
        loading="eager"
      />
    </ScrollAnimatedLogo>
  )

  if (isLoading) {
    // Use the new CSS spinner for initial load
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
      </div>
    );
  }

  // Animation variants for lazy loaded sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <SmoothScroll>
      <SEOHead />
      <div>
        <div className="sneaky-background" />
        <div className="parallax-scrolling">
          <ParticleBackground />
        </div>

        <MainMenu />

        <div className="main-title-container">
          <div className="logo-container">
            <MainLogo />
          </div>
        </div>

        <section className="parallax-scrolling" id="bio">
          <h2 className="section-title">BIO</h2>
          <p className="bio-text">
            Experience the greatest American rock n' roll story ever told when Dealer Takes Four
            takes the stage. Bound by a love of rock music and the Rocky Mountains, this group of
            soldiers, business owners, tech workers, music industry professionals, and friends will
            bring you a one-of-a-kind mash up of rock and roll, country, groove, and Americana. With
            blazing fiddle, trumpet, and guitar harmonies layered on top of heavy drums, bass, and
            keys, DTF is on a mission to tell stories, inspire feelings, and make unforgettable
            memories together through rich and well-crafted songwriting. Dealer Takes Four is Brian
            Knapp, Adam Carpenter, Dave Ross, Matt Stoner, Marcus Spitz, and Brent Hannibal.
            <br />
            Dealer Takes Four is the second incarnation of a band that made waves throughout
            Colorado and the mid-west in the 2000's - 2010s named James and the Devil. They were
            packing houses and pleasing crowds until the lead singer passed at a tragically young
            age. After some time apart, the original guitarist, drummer, fiddle, and bass player
            joined back up and added keys and horns and they've been performing to sold out venues
            and recording regularly. They have a unique sound and show that will keep their audience
            on their feet and having fun all night.
            <br />
          </p>
        </section>

        <hr />

        <CloudinaryContext cloudName="dkf9qmqxa">
          <Suspense
            fallback={
              <div className="loading-skeleton">
                <div className="skeleton-image"></div>
                <div className="skeleton-thumbnails">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="skeleton-thumbnail"></div>
                  ))}
                </div>
              </div>
            }
          >
            <ImageGallery />
          </Suspense>
        </CloudinaryContext>

        <Suspense fallback={<SkeletonLoader />}>
          <motion.section
            className="parallax-scrolling"
            id="tour"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <LazyLoadedShows />
          </motion.section>

          <motion.section
            className="parallax-scrolling"
            id="music"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <LazyLoadedMusicPlayer />
          </motion.section>

          <motion.section
            className="parallax-scrolling"
            id="videos"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <LazyLoadedMedia />
          </motion.section>
        </Suspense>

        <section className="parallax-scrolling contact-section" id="contact">
          <h2 className="section-title">CONTACT</h2>
          <p className="contact-text">
            For booking inquiries, comments, or tickets, contact
            <a className="contact-links" href="mailto:music@dealertakesfour.com">
              {' '}
              Music@DealerTakesFour.com
            </a>
          </p>
          <div className="social-icon-container">
            <a
              className="contact-links"
              href="https://www.facebook.com/DealerTakesFour/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FbB className="social-icon" />
            </a>

            <a
              className="contact-links"
              href="https://www.instagram.com/dealertakesfour/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IgB className="social-icon" />
            </a>

            <a
              className="contact-links"
              href="https://open.spotify.com/artist/44BPi8FlVI5gKq7DW7L0Xg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
            >
              <SpotifyIcon className="social-icon" />
            </a>

            <a
              className="contact-links"
              href="https://music.apple.com/artist/1663002784"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apple Music"
            >
              <AppleMusicIcon className="social-icon" />
            </a>

            <a
              className="contact-links"
              href="https://www.youtube.com/@dealertakesfour"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <YouTubeIcon className="social-icon" />
            </a>

            <a className="contact-links" href="mailto:music@dealertakesfour.com">
              <Email className="social-icon" />
            </a>
          </div>
        </section>
      </div>
    </SmoothScroll>
  )
}

export default App
