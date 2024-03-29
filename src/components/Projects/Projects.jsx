import React, { useContext, useEffect, useState } from 'react';
//import PortfolioContext from '../../context/context';
import { colors } from '../../mock/data';
import { Link } from '@reach/router';
import useProjects from '../Contentful/SetProjects';

const Projects = () => {
  //const { projects } = useContext(PortfolioContext);
  const [projects, isLoading] = useProjects();
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
          return (
            <div
              className="project-frame"
              style={{ backgroundImage: `url(${project.fields.mainImage.fields.file.url})` }}
              key={project.fields.slug}
            >
              <div className="project-wrapper__text">
                <h3 className="project-wrapper__text-title">{project.fields.title}</h3>
                <div>
                  <p>
                    {project.fields.subtitle ||
                      'A short blurb about the project to entice reading.'}
                  </p>
                </div>
              </div>
              <Link
                key={project.fields.slug}
                to={`/app/${project.fields.slug}`}
              ></Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
