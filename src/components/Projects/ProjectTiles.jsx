import React, { useContext, useEffect, useState } from 'react';
//import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
//import ProjectImg from '../Image/ProjectImg';
import { Link } from 'react-router-dom'
import useProjects from '../Contentful/SetProjects'

const ProjectTiles = () => {
  //const { projects } = useContext(PortfolioContext);
  const [projects, isLoading] = useProjects()

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
            //const { title, info, info2, url, color, repo, img, id } = project;

            return (
              <div className="project-frame" style={{backgroundImage: `url(${project.fields.featuredImage.fields.file.url})`}} key={project.fields.id}>
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">{project.fields.name || 'Project Title'}</h3>
                  <div>
                    <p>
                      {info ||'A short blurb about the project to entice reading.'}
                    </p>
                  </div>
                </div>
                <Link
                  key={project.fields.name}
                  href={project.fields.name}
                  style={{backgroundColor: color}}
                ></Link>
              </div>
            );
          })}
        </div>
    </section>
  );
};

export default ProjectTiles;
