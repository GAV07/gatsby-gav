import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
// import ProjectTiles from './Projects/ProjectTiles';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, contactData, footerData } from '../mock/data';

function Landing() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, contact, footer }}>
      <Hero />
      <About />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default Landing;
