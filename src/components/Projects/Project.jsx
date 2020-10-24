import React, {useRef, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import setSingleProject from '../Contentful/SetSingleProject'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import CssRulePlugin from 'gsap/CSSRulePlugin'
import ImageReveal from 'ProjectGSAP'
import gsap from 'gsap'

export default function SingleProject() {
    let parse = require('html-react-parser')
    const { id } = useParams()
    const [project, isLoading] = setSingleProject(id)
    let container = useRef(null)
    let image = useRef(null)
    let imageReveal = CssRulePlugin.getRule('.project__intro__img:after')

    let tl = gsap.timeline({defaults: {duration: 1}})

    useEffect(() => {
        // tl.to(container, {duration: 1, css: {visibility: "visible"}}
        //     .to(imageReveal, {duration: 1.4, width: "0%"})
    })
    
    
    const renderProject = () => {
      if (isLoading) return <p>Loading...</p>
      
      return (
        <>
            <div className="project__intro" style={{backgroundColor: project.color}}>
                <div className="project__intro__img" ref={el => container = el}>
                    <img
                        ref={el => image = el}
                        className="project__intro__img__main"
                        src={project.secondaryImage.fields.file.url}
                    />
                </div>
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