import { useOnClickOutside } from 'hooks'
import { CMS_URL } from 'lib/constants'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'

export default function Nav({ refs }) {
  const refMenu = useRef()
  const refButton = useRef()

  const [scroll, setScroll] = useState(false)
  const [active, setActive] = useState('home')
  const [showMenu, setShowMenu] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useOnClickOutside(refMenu, refButton, () => setShowMenu(false))

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 990)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50)
      if (
        refs.aboutRef.current &&
        window.scrollY < refs.aboutRef.current.offsetTop - 60
      ) {
        setActive('home')
        setScroll(true)
      }
      if (
        refs.aboutRef.current &&
        window.scrollY >= refs.aboutRef.current.offsetTop - 60 &&
        window.scrollY < refs.contactRef.current.offsetTop - 60
      ) {
        setActive('about')
        setScroll(true)
      }
      if (
        refs.contactRef.current &&
        window.scrollY >= refs.contactRef.current.offsetTop - 60
      ) {
        setActive('contact')
        setScroll(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [refs.aboutRef, refs.contactRef])

  const handleClick = (to: string) => {
    setActive(to)
    window.history.pushState(null, '', `#${to}`)
  }

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark ${
        scroll ? 'nav-sticky' : ''
      }`}
    >
      <div className="container">
        <a className="navbar-brand logo text-uppercase" href="#home">
          Susana Dallal
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref={refButton}
          onClick={() => setShowMenu(!showMenu)}
        >
          <i className="mdi mdi-menu"></i>
        </button>
        <div
          className={`navbar-collapse ${!showMenu && isMobile ? 'collapse' : 'show'}`}
          id="navbarCollapse"
          ref={refMenu}
        >
          <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
            <li className={`nav-item ${active === 'home' ? 'active' : ''}`}>
              <Link
                to="home"
                className="nav-link"
                onClick={() => handleClick('home')}
                smooth={true}
                duration={500}
              >
                Inicio
              </Link>
            </li>
            <li className={`nav-item ${active === 'about' ? 'active' : ''}`}>
              <Link
                to="about"
                className="nav-link"
                onClick={() => handleClick('about')}
                smooth={true}
                duration={500}
              >
                Acerca de mí
              </Link>
            </li>

            <li className="nav-item">
              <a href={`https://${CMS_URL}`} className="nav-link">
                Blog
              </a>
            </li>

            <li className={`nav-item ${active === 'contact' ? 'active' : ''}`}>
              <Link
                to="contact"
                className="nav-link"
                onClick={() => handleClick('contact')}
                smooth={true}
                duration={500}
              >
                Contáctame
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
