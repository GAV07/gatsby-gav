import React from 'react'
import { Link, useParams } from 'react-router-dom'
import setSingleProject from '../Contentful/SetSingleProject'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default function SingleProject() {
    var parse = require('html-react-parser');
    const { id } = useParams()
    const [project, isLoading] = setSingleProject(id)
    
    
    const renderProject = () => {
      if (isLoading) return <p>Loading...</p>

      
      return (
        <>
            <div className="project__intro">
            <h2 className="project__intro__title">{project.title}</h2>
            <p className="project__intro__desc">{project.description}</p>
            <img
                className="project__intro__img"
                src={project.mainImage.fields.file.url}
            />
            </div>

            <div className="project__body"> 
                {parse(documentToHtmlString(project.body))} 
            </div>
        </>
      )
    }

    return (
        <div className="project">
            <p>Hello Erick</p>
            <Link className="post__back" to="/">
            {"< Back"}
            </Link>

            {renderProject()}
        </div>
    )
}