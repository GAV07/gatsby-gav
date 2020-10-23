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
            <div className="project__intro" style={{backgroundColor: project.color}}>
                <img
                    className="project__intro__img"
                    src={project.secondaryImage.fields.file.url}
                />
                <div className="project__intro__text">
                    <h2 id="left" className="project__intro__text__title" >{project.title}</h2>
                    <h2 id="right" className="project__intro__text__title">{project.title}</h2>
                </div>
            </div>

            <div className="project__body"> 
                {parse(documentToHtmlString(project.body))} 
            </div>
        </>
      )
    }

    return (
        <div className="project">
            <Link className="project__back" to="/">
            {"< Back"}
            </Link>

            {renderProject()}
        </div>
    )
}