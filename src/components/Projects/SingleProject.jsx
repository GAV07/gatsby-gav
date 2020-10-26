import React, {useRef, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import setSingleProject from '../Contentful/SetSingleProject'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
//import { Link } from 'react-scroll';
import gsap from 'gsap'

export default function SingleProject() {
    let parse = require('html-react-parser')
    const { id } = useParams()
    const [project, isLoading] = setSingleProject(id)
    //let container = useRef(null)
    let image = useRef(null)
    let cover = useRef(null)
    let left = useRef(null)
    let right = useRef(null)
    

    let iMotion = gsap.timeline({defaults: {duration: 1}})

    useEffect(() => {
        iMotion.to(cover.current, {width: "0", ease: "power3.inOut"})
            //.from(image.current, {y: 100, scale: .9})

        gsap.from(left.current, {duration: 2.2, x: 300, opacity: 0, autoAlpha: 0, ease: "power3.inOut"})
        gsap.from(right.current, {duration: 2.2, x: -300, opacity: 0, autoAlpha: 0, ease: "power3.inOut"})
    }, [])
    
    
    const renderProject = () => {
      if (isLoading) return <p>Loading...</p>
      
      return (
        <>
            <div className="project__intro" style={{backgroundColor: project.color}}>
                <div className="project__intro__img" >
                    <div className="project__intro__img__cover" style={{backgroundColor: project.color}} ref={cover}></div>
                    <img
                        ref={image}
                        className="project__intro__img__main"
                        src={project.secondaryImage.fields.file.url}
                    />
                </div>
                <div className="project__intro__text">
                    <h2 id="left" className="project__intro__text__title" ref={left}>{project.title}</h2>
                    <h2 id="right" className="project__intro__text__title" ref={right}>{project.title}</h2>
                </div>
                {/* <span className="down-to-project">
                    <Link to="project__body" smooth duration={1000}>
                        <i className="fa fa-angle-down fa-2x" aria-hidden="true" />
                    </Link>
                </span> */}
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