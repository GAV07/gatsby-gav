import React, { useContext, useState, useEffect, useRef } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  let erick = useRef(null)
  let eBlock = useRef(null)
  let gavin = useRef(null)
  let gBlock = useRef(null)
  let container = useRef(null)

  let eMotion = gsap.timeline({defaults: {duration: 1, delay: .5}})
  let gMotion = gsap.timeline({defaults: {duration: 1}})

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);

    eMotion.from(erick.current, {scrollTrigger:container.current, y: -50, opacity: 0, autoAlpha: 0, ease: "power3.inOut"})
      .from(eBlock.current, {scrollTrigger:container.current, x: -300, opacity: 0, autoAlpha: 0, ease: "power3.inOut"})
      
    gMotion.from(gavin.current, {scrollTrigger:container.current, y: 50, opacity: 0, autoAlpha: 0, ease: "power3.inOut"})
      .from(gBlock.current, {scrollTrigger:container.current, x: 300, opacity: 0, autoAlpha: 0, ease: "power3.inOut"})

    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }

  }, []);

  const loadE = () => {
    if(isDesktop) {
      <div id="erick">
        <div id="e-block" ref={eBlock}></div>
        <h1 ref={erick}>Erick</h1>
      </div>
    } else if (isMobile) {
      return null
    }
    
  }

  const loadG = () => {
    if(isDesktop) {
      <div id="gavin">
        <div id="g-block" ref={gBlock}></div>
        <h1 ref={gavin}>Gavin</h1>
      </div>
    } else if (isMobile) {
      return null
    }
    
  }

  return (
    <section id="about">
      <Container>
        <Row className="about-wrapper" ref={container}>
          <Col className="about-text" md={6} sm={12}>
            {loadE()}
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
            {loadG()}
          </Col>
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
