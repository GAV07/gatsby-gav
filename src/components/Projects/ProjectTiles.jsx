import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import ProjectImg from '../Image/ProjectImg';

const ProjectTiles = () => {
  const { projects } = useContext(PortfolioContext);

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
    <section id="projects">
        <div className="project-wrapper">
          {projects.map((project) => {
            const { title, info, info2, url, color, repo, img, id } = project;

            return (
              <div className="project-frame" style={{backgroundImage: `url(/images/${img})`}} key={id}>
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                  <div>
                    <p>
                      {info ||
                        'A short blurb about the project to entice reading.'}
                    </p>
                    <p className="mb-4">{info2 || ''}</p>
                  </div>
                </div>
                <a
                  href={url || '#!'}
                  target="_blank"
                  aria-label="Project Link"
                  rel="noopener noreferrer"
                  style={{backgroundColor: color}}
                ></a>
              </div>
            );
          })}
        </div>
    </section>
  );
};

export default ProjectTiles;
