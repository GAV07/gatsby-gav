import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from '@reach/router';
import PortfolioContext from '../../context/context';
import useProjects from '../Contentful/SetProjects'

const ProjectFooter = () => {
  const [projects, isLoading] = useProjects()  

  return (
    <footer className="footer project-footer navbar-static-bottom">
      <Container>
        <h1>See other projects</h1>
        <hr />
        <div className="project-links">
          {projects.map((project) => {
              return (
                <Link
                  key={project.fields.slug}
                  to={`/app/${project.fields.slug}`}
                >{project.fields.title}</Link>
              )
            })}
        </div>
        <hr />
        <p>Made with 💛 and patience by Gav</p>
      </Container>
    </footer>
  );
};

export default ProjectFooter;
