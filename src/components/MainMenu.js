import { ReactComponent as Fb } from "../images/facebookwhite.svg";
import { ReactComponent as Ig } from "../images/instagramwhite.svg";

export default function MainMenu() {
  return (
    <section id="header">
      <nav id="main-menu">
        <a className="menu-links" href="#tour">tour</a>
        <a className="menu-links" href="#music">music</a>
        <a className="menu-links" href="#bio">bio</a>
        <a className="menu-links" href="#contact">contact</a>
        
        <div id="main-menu-social">
          <a
            className="main-social-links"
            href="https://www.facebook.com/DealerTakesFour"
            aria-label="Facebook"
          >
            <Fb className="menu-social-icon" />
          </a>
          <a
            className="main-social-links"
            href="https://www.instagram.com/dealertakes4/"
            aria-label="Instagram"
          >
            <Ig className="menu-social-icon" />
          </a>
        </div>
      </nav>
    </section>
  );
} 