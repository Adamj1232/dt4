import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import logo from "./logo.svg";
import "./App.css";
import { ReactComponent as King } from "./images/dt4_king_noWhiteSpace2tone.svg";
import { ReactComponent as Fb } from "./images/facebookwhite.svg";
import { ReactComponent as FbB } from "./images/facebook.svg";
import { ReactComponent as Twit } from "./images/twitterwhite.svg";
import { ReactComponent as Ig } from "./images/instagramwhite.svg";
import { ReactComponent as IgB } from "./images/instagram.svg";
import { ReactComponent as Email } from "./images/mail.svg";

import particlesOptions from "./particle2.json";

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:200,400"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Titillium+Web:200"
        rel="stylesheet"
      />
      <section className="parallax-scrolling" id="header">
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
        </div>
        <div className="main-title-container">
          <Particles options={particlesOptions} init={particlesInit} />
          <King />
        </div>
      </section>

      <section className="parallax-scrolling" id="bio">
        <h2 id="bio-title">Bio</h2>
        <p className="bio-text">
          Dealer Takes Four is a whiskey-driven rock band hailing from Denver,
          Colorado. This six-piece powerhouse is known for their raucous live
          shows, blending elements of classic rock, country, and pop to create a
          sound that is uniquely their own. The band formed in 2022, quickly
          making a name for themselves in the Denver and Colorado Mountain music
          scene with their high-energy performances and catchy original songs.
          Their debut EP "Shots in the Dark" was released in 2018, showcasing
          their raw and unfiltered sound that has become their trademark.
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
      {/* <section className="parallax-scrolling" id="tour">
        <h2 id="tour-title">Shows</h2>
        <div className="widget_iframe widget-container">
          <iframe title="tour-dates" className="widget_iframe tour-widget" src="https://www.reverbnation.com/widget_code/html_widget/artist_515710?widget_id=52&pwc[design]=default&pwc[background_color]=%23333333&pwc[layout]=detailed&pwc[show_map]=0%2C1&pwc[size]=fit" width="100%" height="100%" frameborder="0" scrolling="no">
          </iframe>
        </div>
      </section> */}

      <section className="parallax-scrolling" id="music">
        <h2 id="music-title">Music</h2>
        <div id="music-spacer"></div>
        <section id="music-container"></section>
        <div className="iframe-container">
          <iframe
            width="100%"
            height="350"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1548224161&color=%23ae2727&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>
        <p className="music-text">
          <a
            className="music-links"
            href="https://soundcloud.com/user-433267577"
          >
            For more tunes click here
          </a>
        </p>
      </section>
      <section className="parallax-scrolling" id="videos">
        <h2 id="music-title">Videos</h2>
        <div className="video-container">
          {/* <iframe title="Lost My Head" className="music-videos" width="475" height="315" src="https://www.youtube.com/embed/Uirvehr3bG8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>        
          <iframe title="Poison" className="music-videos" width="475" height="315" src="https://www.youtube.com/embed/SGxHRHNoBCM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <iframe title="Old Car" className="music-videos" width="475" height="315" src="https://www.youtube.com/embed/N-rG8Dzwid4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <iframe title="Light Out There" className="music-videos" width="475" height="315" src="https://www.youtube.com/embed/OvMS95ZlFfw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
        </div>
        <p className="music-text"></p>
      </section>

      <section className="parallax-scrolling" id="contact">
        <h2 id="contact-title">Contact</h2>
        <p className="contact-text">
          For booking inquiries, comments, or tickets, contact
          <a className="contact-links" href="mailto:DealerTakesFour@gmail.com">
            {" "}
            DealerTakesFour@gmail.com
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
