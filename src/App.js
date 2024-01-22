import React, { useCallback, Suspense } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import "./App.css";
import CardPng from "./images/DT4_logo_initials.webp";
import { ReactComponent as Fb } from "./images/facebookwhite.svg";
import { ReactComponent as FbB } from "./images/facebook.svg";
import { ReactComponent as Ig } from "./images/instagramwhite.svg";
import { ReactComponent as IgB } from "./images/instagram.svg";
import { ReactComponent as Email } from "./images/mail.svg";

import particlesOptions from "./particle_tunnel.json";
import Spotlight from "./views/Spotlight";
import Media from "./views/Media.js";

const LazyLoadedShows = React.lazy(() => import("./views/Shows.js"));
const LazyLoadedMusicPlayer = React.lazy(() =>
  import("./views/MusicPlayer.js")
);

const width = window.innerWidth;
function App() {
  const particlesInit = useCallback(async (main) => {
    await loadFull(main);
    width > 800 && loadPolygonMaskPlugin(main);
  }, []);

  const renderParticles = () => {
    if (width < 800) {
      return (
        <Particles
          id="parts"
          init={particlesInit}
          canvasClassName="particle-canvas"
          options={particlesOptions}
          width="100vw"
        />
      );
    }
  };

  const renderMainLogo = () => {
    if (width < 800) {
      return <img alt="king png" className="card-logo" src={CardPng} />;
    }
  };

  return (
    <div>
      <div className="sneaky-background" />
      <div className="parallax-scrolling">{renderParticles()}</div>
      <section id="header">
        <div id="main-menu">
          <a className="menu-links" id="main-menu-tour" href="#tour">
            tour
          </a>
          <a className="menu-links" id="main-menu-music" href="#music">
            music
          </a>
          <a className="menu-links" id="main-menu-bio" href="#bio">
            bio
          </a>
          <a className="menu-links" id="main-menu-contact" href="#contact">
            contact
          </a>
          <div id="main-menu-social">
            <a
              className="main-social-links"
              href="https://www.facebook.com/DealerTakesFour"
            >
              <Fb className="menu-social-icon" />
            </a>
            {/* <a
              className="main-social-links"
              href="https://twitter.com/horseysurprise"
              >
              <Twit className="menu-social-icon"/>
            </a> */}
            <a
              className="main-social-links"
              href="https://www.instagram.com/dealertakes4/"
            >
              <Ig className="menu-social-icon" />
            </a>
          </div>
        </div>
      </section>
      <div className="main-title-container">
        <div className="logo-container">
          {/* <King /> */}
          {renderMainLogo()}
        </div>
      </div>

      <section className="parallax-scrolling" id="bio">
        <h2 id="bio-title">Bio</h2>
        <p className="bio-text">
          Dealer Takes Four is a whiskey-driven rock band hailing from Denver,
          Colorado. This six-piece powerhouse is known for their raucous live
          shows, blending elements of classic rock, country, and pop to create a
          sound that is uniquely their own. The band formed in 2022, quickly
          making a name for themselves in the Denver and Colorado Mountain music
          scene with their high-energy performances and catchy original songs.
          Their debut EP "Burn It In" is slated to be released later this year
          and showcases their raw and unfiltered sound that has become their
          trademark.
          <br />
          The band's live shows are not to be missed, as they are known for
          their whiskey-fueled performances that leave audiences wanting more.
          With catchy hooks and anthemic choruses, Dealer Takes Four is a band
          that will have you singing and dancing along all night long.
          <br />
          With the release of their first hit single "When I Come Home" in 2023,
          DTF etched their names in the Denver scene as a band not to miss.
          Dealer Takes Four is poised to take their whiskey-driven rock music to
          new heights. The band is currently touring the country and making
          waves in the music scene, leaving audiences in awe with their
          high-energy performances and killer tunes.
          <br />
          Dealer Takes Four is a band that is not to be missed. They are a force
          to be reckoned with, and their whiskey-driven rock music is guaranteed
          to get your blood pumping. Keep an eye out for this Denver-based band,
          as they are sure to be making waves in the music scene for years to
          come.
        </p>
      </section>

      <hr></hr>
      <section className="parallax-scrolling" id="tour">
        <Suspense fallback={<div>Loading...</div>}>
          <LazyLoadedShows />
        </Suspense>
      </section>

      <section className="parallax-scrolling" id="music">
        <Suspense fallback={<div>Loading...</div>}>
          <LazyLoadedMusicPlayer />
        </Suspense>
      </section>
      <section className="parallax-scrolling" id="videos">
        <Media />
      </section>

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
