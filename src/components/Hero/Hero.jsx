import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
// import Fade from 'react-reveal/Fade';
import Waves from './waves';
import Header from '../Header/Header'
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Hero = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, question } = hero;
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  });

  return (
    <section id="hero" className="jumbotron">
      <Header />
      <Waves />
      <Container id="hero-container">
        <div>
          <p className="text-color-main">{question}</p>
          <h1 className="hero-title">
            {/* <span className="text-color-main"> {title}</span> */}
            {title}
          </h1>
        </div>
      </Container>
      <div id="menu">
        <Link to="projects" smooth duration={1000}>
          Projects
        </Link>
        <Link>Library</Link>
        <Link>Thoughts</Link>
      </div>
    </section>
  );
};

export default Hero;
