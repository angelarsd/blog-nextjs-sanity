import { useRef } from 'react'

import {
  Footer,
  Meta,
  Nav,
  SectionAbout,
  SectionContact,
  SectionHome,
} from './'

export default function Home({ allPosts }) {
  const homeRef = useRef<HTMLElement>()
  const aboutRef = useRef<HTMLElement>()
  const contactRef = useRef<HTMLElement>()

  return (
    <>
      <Meta />
      <Nav refs={{ homeRef, aboutRef, contactRef }} />
      <section className="bg-home" id="home" ref={homeRef}>
        <SectionHome />
      </section>
      <section className="section" id="about" ref={aboutRef}>
        <SectionAbout />
      </section>
      <section
        className="section contact-wrapper bg-contact"
        id="contact"
        ref={contactRef}
      >
        <SectionContact />
      </section>
      <Footer />
    </>
  )
}
