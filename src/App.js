import React, { Suspense, lazy, useState, useEffect, memo } from "react";
import "./App.css";
import CardPng from "./images/DT4_logo_initials.webp";
import LogoPng from "./images/WinterDTF-Clean_no_bg_compressed.webp";
import { ReactComponent as FbB } from "./images/facebook.svg";
import { ReactComponent as IgB } from "./images/instagram.svg";
import { ReactComponent as Email } from "./images/mail.svg";
import { ReactComponent as SpotifyIcon } from "./images/spotifywhite.svg";
import { ReactComponent as AppleMusicIcon } from "./images/applemusicwhite.svg";
import { ReactComponent as YouTubeIcon } from "./images/youtubewhite.svg";

import ParticleBackground from "./components/ParticleBackground";
import MainMenu from "./components/MainMenu";
import useViewport from "./hooks/useViewport";
import OptimizedImage from "./components/OptimizedImage";
import SEOHead from "./components/SEOHead";
import { CloudinaryContext } from "cloudinary-react";
import ImageGallery from "./components/ImageGallery";

// Lazy load all major components with preload hints
const LazyLoadedShows = lazy(() => import(/* webpackChunkName: "shows" */ "./views/Shows.js"));
const LazyLoadedMusicPlayer = lazy(() => import(/* webpackChunkName: "music-player" */ "./views/MusicPlayer.js"));
const LazyLoadedMedia = lazy(() => import(/* webpackChunkName: "media" */ "./views/Media.js"));

// Memoize MainLogo component to prevent unnecessary re-renders
const MainLogo = memo(({ width }) => (
  <OptimizedImage
    src={width < 800 ? CardPng : LogoPng}
    alt="Dealer Takes Four logo"
    className="card-logo"
    width={width < 800 ? "200" : "400"}
    height={width < 800 ? "100" : "200"}
    loading="eager"
    fetchpriority="high"
  />
));

function App() {
  const { width } = useViewport();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Optimize loading state with requestIdleCallback
    const timer = window.requestIdleCallback(() => setIsLoading(false), { timeout: 2000 });
    return () => window.cancelIdleCallback(timer);
  }, []);

  if (isLoading) {
    return <div className="loading-screen" aria-label="Loading content">Loading...</div>;
  }

  return (
    <>
      <SEOHead />
      <div>
        <div className="parallax-scrolling">
          <ParticleBackground />
        </div>

        <MainMenu />

        <div className="main-title-container">
          <div className="logo-container">
            <MainLogo width={width} />
          </div>
        </div>

        <section className="parallax-scrolling" id="bio">
          <h2 id="bio-title">Bio</h2>
          <p className="bio-text">
            Experience the greatest American rock n' roll story ever told when
            Dealer Takes Four takes the stage. Bound by a love of rock music and
            the Rocky Mountains, this group of soldiers, business owners, tech
            workers, music industry professionals, and friends will bring you a
            one-of-a-kind mash up of rock and roll, country, groove, and
            Americana. With blazing fiddle, trumpet, and guitar harmonies
            layered on top of heavy drums, bass, and keys, DTF is on a mission
            to tell stories, inspire feelings, and make unforgettable memories
            together through rich and well-crafted songwriting. Dealer Takes
            Four is Brian Knapp, Adam Carpenter, Dave Ross, Matt Stoner, Marcus
            Spitz, and Kurt Bradley.
            <br />
            Dealer Takes Four is the second incarnation of a band that made
            waves throughout Colorado and the mid-west in the 2000's - 2010s
            named James and the Devil. They were packing houses and pleasing
            crowds until the lead singer passed at a tragically young age. After
            some time apart, the original guitarist, drummer, fiddle, and bass
            player joined back up and added keys and horns and they've been
            performing to sold out venues and recording regularly. They have a
            unique sound and show that will keep their audience on their feet
            and having fun all night.
          </p>
        </section>

        <hr />

        <CloudinaryContext cloudName="dkf9qmqxa">
          <Suspense
            fallback={
              <div className="loading-skeleton" aria-label="Loading gallery">
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

        <Suspense fallback={<div className="section-loader" aria-label="Loading section">Loading...</div>}>
          <section className="parallax-scrolling" id="tour">
            <LazyLoadedShows />
          </section>

          <section className="parallax-scrolling" id="music">
            <LazyLoadedMusicPlayer />
          </section>

          <section className="parallax-scrolling" id="videos">
            <LazyLoadedMedia />
          </section>
        </Suspense>

        <section className="parallax-scrolling" id="contact">
          <h2 id="contact-title">Contact</h2>
          <p className="contact-text">
            For booking inquiries, comments, or tickets, contact
            <a className="contact-links" href="mailto:DealerTakes4@gmail.com">
              {" "}
              DealerTakes4@gmail.com
            </a>
          </p>
          <div id="social-icon-container">
            <a
              className="contact-links"
              href="https://www.facebook.com/DealerTakesFour/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <FbB className="social-icon" />
            </a>

            <a
              className="contact-links"
              href="https://www.instagram.com/dealertakesfour/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <IgB className="social-icon" />
            </a>

            <a
              className="contact-links"
              href="https://open.spotify.com/artist/44BPi8FlVI5gKq7DW7L0Xg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Listen on Spotify"
            >
              <SpotifyIcon className="social-icon" />
            </a>

            <a
              className="contact-links"
              href="https://music.apple.com/artist/1663002784"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Listen on Apple Music"
            >
              <AppleMusicIcon className="social-icon" />
            </a>

            <a
              className="contact-links"
              href="https://www.youtube.com/@dealertakesfour"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch on YouTube"
            >
              <YouTubeIcon className="social-icon" />
            </a>

            <a 
              className="contact-links" 
              href="mailto:dealertakes4@gmail.com"
              aria-label="Email us"
            >
              <Email className="social-icon" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
