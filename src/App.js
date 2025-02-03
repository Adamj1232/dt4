import React, { Suspense, lazy, useState, useEffect } from "react";
import "./App.css";
import CardPng from "./images/DT4_logo_initials.webp";
import LogoPng from "./images/WinterDTF-Clean_no_bg_compressed.webp";
import { ReactComponent as FbB } from "./images/facebook.svg";
import { ReactComponent as IgB } from "./images/instagram.svg";
import { ReactComponent as Email } from "./images/mail.svg";

import ParticleBackground from "./components/ParticleBackground";
import MainMenu from "./components/MainMenu";
import useViewport from "./hooks/useViewport";

// Lazy load all major components
const LazyLoadedShows = lazy(() => import("./views/Shows.js"));
const LazyLoadedMusicPlayer = lazy(() => import("./views/MusicPlayer.js"));
const LazyLoadedMedia = lazy(() => import("./views/Media.js"));

function App() {
  const { width } = useViewport();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add loading state management
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  const MainLogo = () => (
    <img 
      alt="Dealer Takes Four logo" 
      className="card-logo" 
      src={width < 800 ? CardPng : LogoPng}
      loading="eager"
      width={width < 800 ? "200" : "400"}
      height={width < 800 ? "100" : "200"}
    />
  );

  if (isLoading) {
    return <div className="loading-screen">Loading...</div>;
  }

  return (
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
        <h2 id="bio-title">Bio</h2>
        <p className="bio-text">
          Experience the greatest American rock n' roll story ever told when
          Dealer Takes Four takes the stage. Bound by a love of rock music and
          the Rocky Mountains, this group of soldiers, business owners, tech
          workers, music industry professionals, and friends will bring you a
          one-of-a-kind mash up of rock and roll, country, groove, and
          Americana. With blazing fiddle, trumpet, and guitar harmonies
          layered on top of heavy drums, bass, and keys, DTF is on
          a mission to tell stories, inspire feelings, and make unforgettable
          memories together through rich and
          well-crafted songwriting. Dealer Takes Four is Brian Knapp, Adam
          Carpenter, Dave Ross, Matt Stoner, Marcus Spitz, and Kurt Bradley.
          <br />
          Dealer Takes Four is the second incarnation of a band that made waves
          throughout Colorado and the mid-west in the 2000's - 2010s named
          James and the Devil. They were packing houses and pleasing crowds
          until the lead singer passed at a tragically young age. After some
          time apart, the original guitarist, drummer, fiddle, and bass player
          joined back up and added keys and horns and they've been performing to
          sold out venues and recording regularly. They have a unique sound and
          show that will keep their audience on their feet and having fun all
          night.
          <br />
        </p>
      </section>

      <hr />
      
      {/* Lazy loaded sections */}
      <Suspense fallback={<div className="section-loader">Loading...</div>}>
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
          '
          <a
            className="contact-links"
            href="https://www.facebook.com/tigrdenver/"
          >
            <FbB className="social-icon" />
          </a>
          {/* <a className="contact-links" href="https://twitter.com/horseysurprise">
              <img alt="twitter link" className="social-icon" src={require("./images/twitter.svg")}/>
            </a> */}
          <a
            className="contact-links"
            href="https://www.instagram.com/ghostrevue/"
          >
            <IgB className="social-icon" />
          </a>
          <a className="contact-links" href="mailto:ghostrevue@gmail.com">
            <Email className="social-icon" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
