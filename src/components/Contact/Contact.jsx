import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
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
      <Container>
        <div className="contact-wrapper">
          <p className="contact-wrapper__text">
            {cta || 'Have a cool project that we can collaborate on?'}
          </p>
          <h1>{email}</h1>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
