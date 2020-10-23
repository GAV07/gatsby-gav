import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import Motion from './HeroGSAP'

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

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
  }, []);

  return (
    <section id="hero" className="jumbotron">
        <div className="waves-container">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" stroke="rgba(255,255,255,0.7" fill="none" />
              <use xlinkHref="#gentle-wave" x="48" y="3" stroke="rgba(255,255,255,0.5)" fill="none" />
              <use xlinkHref="#gentle-wave" x="48" y="5" stroke="rgba(255,255,255,0.3)" fill="none" />
              <use xlinkHref="#gentle-wave" x="48" y="7" stroke="#fff" fill="none" />
            </g>
          </svg>
        </div>
      <Container id="hero-container">
          <div>
            <h1 className="hero-title">
             
              <span className="text-color-main"> {title || 'Hi, my name is'}</span>
            </h1>
            <p>
              {subtitle || "I'm a User Experience Designer and Researcher."}
            </p>
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="projects" smooth duration={1000}>
                  {'See My Work'}
                </Link>
              </span>
            </p>
          </div>
          <div id="logo">
            <svg width="515px" height="458px" viewBox="0 0 1030 917" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="V1-Fall-2020" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Home/Work" transform="translate(-1628.000000, -324.000000)">
                        <g id="The-G" transform="translate(1628.000000, 324.000000)">
                            <text id="G" fontFamily="Futura-Medium, Futura" fontSize="690.5783" fontWeight="400" fill="#F7F4F3">
                                <tspan x="0" y="717">G</tspan>
                            </text>
                            <polygon id="Fill-2" fill="#F7F4F3" points="519 520 1030 520 1030 446 519 446"></polygon>
                            <polygon id="Fill-3" fill="#191E27" points="85 679 94 679 94 218 85 218"></polygon>
                            <polygon id="Fill-4" fill="#191E27" points="87 483 497 483 497 474 87 474"></polygon>
                            <polygon id="Fill-5" fill="#191E27" points="86 222 496 222 496 213 86 213"></polygon>
                            <polygon id="Fill-6" fill="#191E27" points="86 684 496 684 496 675 86 675"></polygon>
                        </g>
                    </g>
                </g>
            </svg>
          </div>
      </Container>
    </section>
  );
};

export default Header;
