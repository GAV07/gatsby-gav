import React from 'react'
import { Link, useParams } from 'react-router-dom'
import SetSingleProject from '../Contentful/SetSingleProject'


export default function SingleProject() {
    const { id } = useParams()
    const [project, isLoading] = SetSingleProject(id)
  
    const renderProject = () => {
      if (isLoading) return <p>Loading...</p>
  
      return (
        <>
          <div className="project__intro">
            <h2 className="project__intro__title">{project.name}</h2>
            <p className="project__intro__desc">{project.description}</p>
  
            <img
              className="project__intro__img"
              src={project.featuredImage.fields.file.url}
              alt={project.name}
            />
          </div>
  
          <div className="project__body">
            {project.body}
          </div>
        </>
      )
    }
}