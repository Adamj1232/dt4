import { ReactComponent as Fb } from '../images/facebookwhite.svg'
import { ReactComponent as Ig } from '../images/instagramwhite.svg'
import { ReactComponent as Spotify } from '../images/spotifywhite.svg'
import { ReactComponent as AppleMusic } from '../images/applemusicwhite.svg'
import { ReactComponent as YouTube } from '../images/youtubewhite.svg'

export default function MainMenu() {
  return (
    <section id="header">
      <nav id="main-menu">
        <a className="menu-links" href="#tour">
          tour
        </a>
        <a className="menu-links" href="#music">
          music
        </a>
        <a className="menu-links" href="#bio">
          bio
        </a>
        <a className="menu-links" href="#contact">
          contact
        </a>

        <div id="main-menu-social">
          <a
            className="main-social-links"
            href="https://www.facebook.com/DealerTakesFour"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Fb className="menu-social-icon" />
          </a>
          <a
            className="main-social-links"
            href="https://www.instagram.com/dealertakesfour/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Ig className="menu-social-icon" />
          </a>
          <a
            className="main-social-links"
            href="https://open.spotify.com/artist/44BPi8FlVI5gKq7DW7L0Xg"
            aria-label="Spotify"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Spotify className="menu-social-icon" />
          </a>
          <a
            className="main-social-links"
            href="https://music.apple.com/artist/1663002784"
            aria-label="Apple Music"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppleMusic className="menu-social-icon" />
          </a>
          <a
            className="main-social-links"
            href="https://www.youtube.com/@dealertakesfour"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTube className="menu-social-icon" />
          </a>
        </div>
      </nav>
    </section>
  )
}
