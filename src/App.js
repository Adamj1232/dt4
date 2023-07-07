import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import "./App.css";
import KingPng from "./images/dt4_king_noWhiteSpace-w.png";
import CardPng from "./images/DT4_logo_initials.png";
import { ReactComponent as Fb } from "./images/facebookwhite.svg";
import { ReactComponent as FbB } from "./images/facebook.svg";
import { ReactComponent as Twit } from "./images/twitterwhite.svg";
import { ReactComponent as Ig } from "./images/instagramwhite.svg";
import { ReactComponent as IgB } from "./images/instagram.svg";
import { ReactComponent as Email } from "./images/mail.svg";

import particlesOptions from "./particle_tunnel.json";

const width = window.innerWidth;
function App() {
  const particlesInit = useCallback(async (main) => {
    await loadFull(main);
    width > 800 && loadPolygonMaskPlugin(main);
  }, []);

  const renderParticles = () => {
    if (width > 800) {
      return (
        <Particles
          id="parts"
          options={{
            autoPlay: true,
            background: {
              color: {
                value: "#000000",
              },
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
              opacity: 1,
            },
            backgroundMask: {
              composite: "destination-out",
              cover: {
                color: {
                  value: "#fff",
                },
                opacity: 1,
              },
              enable: false,
            },
            defaultThemes: {},
            delay: 0,

            detectRetina: false,
            duration: 0,
            fpsLimit: 60,
            interactivity: {
              detectsOn: "window",
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onDiv: {
                  selectors: "#repulse-div",
                  enable: false,
                  mode: "repulse",
                  type: "circle",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                  parallax: {
                    enable: false,
                    force: 20,
                    smooth: 10,
                  },
                },
                resize: {
                  delay: 0.5,
                  enable: true,
                },
              },
              modes: {
                attract: {
                  distance: 200,
                  duration: 0.4,
                  easing: "ease-out-quad",
                  factor: 1,
                  maxSpeed: 30,
                  speed: 1,
                },
                bounce: {
                  distance: 200,
                },
                bubble: {
                  distance: 40,
                  duration: 2,
                  mix: false,
                  opacity: 8,
                  size: 6,
                  divs: {
                    distance: 200,
                    duration: 0.4,
                    mix: false,
                    selectors: [],
                  },
                },
                connect: {
                  distance: 80,
                  links: {
                    opacity: 0.7,
                  },
                  radius: 60,
                },
                grab: {
                  distance: 280,
                  links: {
                    blink: false,
                    consent: false,
                    opacity: 0.3,
                  },
                },
                push: {
                  default: true,
                  groups: [],
                  quantity: 4,
                },
                remove: {
                  quantity: 2,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                  factor: 100,
                  speed: 1,
                  maxSpeed: 5,
                  easing: "ease-out-quad",
                  divs: {
                    distance: 200,
                    duration: 0.4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 20,
                    easing: "ease-out-quad",
                    selectors: [],
                  },
                },
                slow: {
                  factor: 1,
                  radius: 0,
                },
                trail: {
                  delay: 1,
                  pauseOnStop: false,
                  quantity: 80,
                },
                light: {
                  area: {
                    gradient: {
                      start: {
                        value: "#ffffff",
                      },
                      stop: {
                        value: "#000000",
                      },
                    },
                    radius: 1000,
                  },
                  shadow: {
                    color: {
                      value: "#000000",
                    },
                    length: 2000,
                  },
                },
              },
            },
            manualParticles: [],
            particles: {
              bounce: {
                horizontal: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
                vertical: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
              },
              collisions: {
                absorb: {
                  speed: 0.1,
                },
                bounce: {
                  horizontal: {
                    random: {
                      enable: false,
                      minimumValue: 0.1,
                    },
                    value: 1,
                  },
                  vertical: {
                    random: {
                      enable: false,
                      minimumValue: 0.1,
                    },
                    value: 1,
                  },
                },
                enable: true,
                mode: "bounce",
                overlap: {
                  enable: true,
                  retries: 0,
                },
              },
              color: {
                value: "#ffffff",
                animation: {
                  h: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    decay: 0,
                    sync: true,
                  },
                  s: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    decay: 0,
                    sync: true,
                  },
                  l: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    decay: 0,
                    sync: true,
                  },
                },
              },
              groups: {},
              move: {
                angle: {
                  offset: 0,
                  value: 90,
                },
                attract: {
                  distance: 200,
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
                center: {
                  x: 50,
                  y: 50,
                  mode: "percent",
                  radius: 0,
                },
                decay: 0,
                distance: {},
                direction: "none",
                drift: 0,
                enable: true,
                gravity: {
                  acceleration: 9.81,
                  enable: false,
                  inverse: false,
                  maxSpeed: 10,
                },
                path: {
                  clamp: true,
                  delay: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 0,
                  },
                  enable: false,
                  options: {},
                },
                outModes: {
                  default: "bounce",
                  bottom: "bounce",
                  left: "bounce",
                  right: "bounce",
                  top: "bounce",
                },
                random: false,
                size: false,
                speed: 0.2,
                spin: {
                  acceleration: 0,
                  enable: false,
                },
                straight: false,
                trail: {
                  enable: false,
                  length: 10,
                  fillColor: {
                    value: "#000000",
                  },
                },
                vibrate: false,
                warp: false,
              },
              number: {
                density: {
                  enable: false,
                  width: 1920,
                  height: 1080,
                },
                limit: 0,
                value: 1000,
              },
              opacity: {
                random: {
                  enable: false,
                  minimumValue: 0.3,
                },
                value: {
                  min: 0.2,
                  max: 0.6,
                },
                animation: {
                  count: 0,
                  enable: true,
                  speed: 1,
                  decay: 0,
                  sync: false,
                  destroy: "none",
                  startValue: "random",
                  minimumValue: 0.05,
                },
              },
              reduceDuplicates: false,
              shadow: {
                blur: 0,
                color: {
                  value: "#000",
                },
                enable: false,
                offset: {
                  x: 0,
                  y: 0,
                },
              },
              shape: {
                options: {},
                type: "circle",
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 1,
                },
                value: 1.4,
                animation: {
                  count: 0,
                  enable: false,
                  speed: 20,
                  decay: 0,
                  sync: false,
                  destroy: "none",
                  startValue: "random",
                  minimumValue: 0.1,
                },
              },
              stroke: {
                width: 0,
              },
              zIndex: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                opacityRate: 1,
                sizeRate: 1,
                velocityRate: 1,
              },
              life: {
                count: 0,
                delay: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                  sync: false,
                },
                duration: {
                  random: {
                    enable: false,
                    minimumValue: 0.0001,
                  },
                  value: 0,
                  sync: false,
                },
              },
              rotate: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                animation: {
                  enable: false,
                  speed: 0,
                  decay: 0,
                  sync: false,
                },
                direction: "clockwise",
                path: false,
              },
              destroy: {
                bounds: {},
                mode: "none",
                split: {
                  count: 1,
                  factor: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 3,
                  },
                  rate: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: {
                      min: 4,
                      max: 9,
                    },
                  },
                  sizeOffset: true,
                  particles: {},
                },
              },
              roll: {
                darken: {
                  enable: false,
                  value: 0,
                },
                enable: false,
                enlighten: {
                  enable: false,
                  value: 0,
                },
                mode: "vertical",
                speed: 25,
              },
              tilt: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                animation: {
                  enable: false,
                  speed: 0,
                  decay: 0,
                  sync: false,
                },
                direction: "clockwise",
                enable: false,
              },
              twinkle: {
                lines: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
                particles: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
              },
              wobble: {
                distance: 5,
                enable: false,
                speed: {
                  angle: 50,
                  move: 10,
                },
              },
              orbit: {
                animation: {
                  count: 0,
                  enable: false,
                  speed: 1,
                  decay: 0,
                  sync: false,
                },
                enable: false,
                opacity: 1,
                rotation: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 45,
                },
                width: 1,
              },
              links: {
                blink: false,
                color: {
                  value: "#ffffff",
                },
                consent: false,
                distance: 30,
                enable: false,
                frequency: 1,
                opacity: 0.2,
                shadow: {
                  blur: 5,
                  color: {
                    value: "#000",
                  },
                  enable: false,
                },
                triangles: {
                  enable: false,
                  frequency: 1,
                },
                width: 1,
                warp: false,
              },
              repulse: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                enabled: false,
                distance: 1,
                duration: 1,
                factor: 1,
                speed: 1,
              },
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
            responsive: [
              {
                maxWidth: 950,
                mode: "screen", //"canvas" | "screen" (it could default to "canvas")
                options: {
                  particles: {
                    number: {
                      value: 300,
                    },
                  },
                },
              },
            ],
            smooth: false,
            style: {},
            themes: [],
            zLayers: 100,

            polygon: {
              draw: {
                enable: true,
                stroke: {
                  color: {
                    value: "rgba(255,255,255,0.2)",
                  },
                  width: 0.5,
                  opacity: 0.2,
                },
              },
              enable: true,
              move: {
                radius: 8,
              },
              position: {
                y: width < 1300 ? 25 : 36,
                x: 50,
                mode: "percent",
              },
              inline: {
                arrangement: "equidistant",
              },

              scale: width < 1300 ? 2.6 : 4.2,
              type: "inline",
              data: `<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='296' height='117'>
          <path d='m9.9 94.5h11.1v-68.1h-11.1v-20.7h47.5c26.4 0 45.4 16 45.4 54.7 0 38.6-17.5 56.4-44.1 56.4h-48.8zm49.2 0c15.8 0 19.9-10.8 19.9-34.1 0-23-5.3-34-21.1-34h-15v68.1zm52.2-88.8h93.4v43.2h-14.6v-22.5h-21.2v68.3h14v22.3h-49.5v-22.3h13.7v-68.3h-21.2v22.5h-14.6zm101.9 88.9h11v-68.3h-11v-20.6h82.8v43.1h-14.6v-22.5h-35.2v23.2h24.1v20.7h-24.1v24.4h11.4v22.3h-44.4z'/>
      </svg>`,
            },
            fullScreen: {
              enable: false,
            },
          }}
          init={particlesInit}
          canvasClassName="particle-canvas"
          width="100vw"
        />
      );
    } else {
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
    if (width > 800) {
      return <img alt="king png" className="king-logo" src={KingPng} />;
    } else {
      return <img alt="king png" className="card-logo" src={CardPng} />;
    }
  };
  return (
    <div>
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
        <h2 id="tour-title">Shows</h2>
        <div className="widget_iframe widget-container">
          <iframe
            title="tour-dates"
            className="widget_iframe tour-widget"
            src="https://www.reverbnation.com/widget_code/html_widget/artist_8523411?widget_id=52&pwc[design]=default&pwc[background_color]=%23333333&pwc[layout]=detailed&pwc[show_map]=0%2C1&pwc[size]=fit"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </section>

      <section className="parallax-scrolling" id="music">
        <h2 id="music-title">Music</h2>
        <div id="music-spacer"></div>
        <section id="music-container"></section>
        <div className="iframe-container">
          <iframe
            width="100%"
            height="350"
            title="Audio player for DT4 Songs"
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
          <iframe
            className="music-videos"
            width="475"
            height="315"
            src="https://youtube.com/embed/fCEgYGMSTD8?feature=share"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <iframe
            className="music-videos"
            width="475"
            height="315"
            src="https://youtube.com/embed/Oi03rAOF3Cs?feature=share"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <iframe
            className="music-videos"
            width="475"
            height="315"
            src="https://www.youtube.com/embed/tpSz-eiYtYQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <iframe
            className="music-videos"
            width="475"
            height="315"
            src="https://www.youtube.com/embed/2aRTKgbAo1c?feature=share"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <iframe
            className="music-videos"
            width="475"
            height="315"
            src="https://www.youtube.com/embed/tpSz-eiYtYQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <iframe
            className="music-videos"
            width="475"
            height="315"
            src="https://www.youtube.com/embed/R5zlBwYO1HQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <iframe
            className="music-videos"
            width="475"
            height="315"
            src="https://www.youtube.com/embed/VgvotBMszUc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
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
