import React, {useRef, useEffect} from 'react'
import { Link, useParams } from '@reach/router'
import setSingleProject from '../Contentful/SetSingleProject'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { INLINES, BLOCKS } from '@contentful/rich-text-types'
import ProjectFooter from '../Footer/ProjectFooter' 
//import Image from "gatsby-image";
//import { Link } from 'react-scroll';
import gsap from 'gsap'


export default function SingleProject() {
    let parse = require('html-react-parser')
    const { id } = useParams()
    const [project, isLoading] = setSingleProject(id)

    let options = {
        renderNode: {
            [INLINES.HYPERLINK]: (node) => { if((node.data.uri).includes("player.vimeo.com/video")) {
                console.log("hey erick")
                return `<iframe class="project__video" title="Project Video" src="${node.data.uri}" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`
                } else return `<a href="${node.data.uri}">${node.content[0].value}</a>`
            },
            [BLOCKS.EMBEDDED_ASSET]: (node) => { return `<img class="content-img" src="${node.data.target.fields.file.url}"/>`},
        },
    }
    let image = useRef(null)
    let cover = useRef(null)
    let left = useRef(null)
    let right = useRef(null)
    
    useEffect(() => {
        gsap.to(cover.current, {duration: 2.2, width: "0", ease: "power3.inOut"})
        gsap.from(left.current, {duration: 2.2, x: 300, opacity: 0, autoAlpha: 0, ease: "power3.inOut"})
        gsap.from(right.current, {duration: 2.2, x: -300, opacity: 0, autoAlpha: 0, ease: "power3.inOut"})
    }, [cover.current])
    
    
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
            </div>

            <div className="project__body"> 
                {parse(documentToHtmlString(project.body, options))} 
            </div>
        </>
      )
    }

    return (
        <>
            <div className="project">
                <Link className="project__back" to="/">
                {"< Back"}
                </Link>

                {renderProject()}
            </div>
            {ProjectFooter()}
        </>
    )
}