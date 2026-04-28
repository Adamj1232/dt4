import { useEffect, useState } from 'react'
import { ReactComponent as Fb } from '../images/facebookwhite.svg'
import { ReactComponent as Ig } from '../images/instagramwhite.svg'
import { ReactComponent as Spotify } from '../images/spotifywhite.svg'
import { ReactComponent as AppleMusic } from '../images/applemusicwhite.svg'
import { ReactComponent as YouTube } from '../images/youtubewhite.svg'

const navItems = [
  { id: 'tour', label: 'TOUR' },
  { id: 'music', label: 'MUSIC' },
  { id: 'bio', label: 'BIO' },
  { id: 'contact', label: 'CONTACT' }
]

export default function MainMenu() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    let observer
    let retryId

    const setupObserver = () => {
      const sections = navItems.map(({ id }) => document.getElementById(id)).filter(Boolean)

      if (sections.length !== navItems.length) {
        retryId = window.setTimeout(setupObserver, 100)
        return
      }

      if (!('IntersectionObserver' in window)) {
        const updateActiveSection = () => {
          const offset = window.innerHeight * 0.35
          const currentSection = sections.reduce((active, section) => {
            const rect = section.getBoundingClientRect()
            return rect.top <= offset ? section : active
          }, sections[0])

          setActiveSection(currentSection.id)
        }

        updateActiveSection()
        window.addEventListener('scroll', updateActiveSection, { passive: true })
        window.addEventListener('resize', updateActiveSection)

        observer = {
          disconnect: () => {
            window.removeEventListener('scroll', updateActiveSection)
            window.removeEventListener('resize', updateActiveSection)
          }
        }
        return
      }

      observer = new IntersectionObserver(
        entries => {
          const visibleEntry = entries
            .filter(entry => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

          if (visibleEntry) {
            setActiveSection(visibleEntry.target.id)
          }
        },
        {
          rootMargin: '-30% 0px -55% 0px',
          threshold: [0.1, 0.25, 0.5, 0.75]
        }
      )

      sections.forEach(section => observer.observe(section))
    }

    setupObserver()

    return () => {
      window.clearTimeout(retryId)
      observer?.disconnect()
    }
  }, [])

  return (
    <section id="header">
      <nav id="main-menu">
        {navItems.map(({ id, label }) => (
          <a
            key={id}
            className={`menu-links ${activeSection === id ? 'active' : ''}`}
            href={`#${id}`}
            aria-current={activeSection === id ? 'location' : undefined}
          >
            {label}
          </a>
        ))}

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
