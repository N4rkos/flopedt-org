import React, { useEffect, useState } from 'react'
import API from '../../../backend/API'
import ReactMarkdown from 'react-markdown'
import './tutoriels.scss'
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon, EmailShareButton, EmailIcon, FacebookMessengerShareButton, FacebookMessengerIcon } from 'react-share'

const Tutorial = () => {

    const [tutorial, setTutorial] = useState({})

    useEffect(() => {
        const slug = window.location.pathname.split('/').pop()
        API.getTutorialBySlug(slug).then(setTutorial)
    }, [])
    
    document.title = `${tutorial.title} | FlopEDT`
    const shareUrl = window.location.href
    return (
        <div className="container article">
            <img alt={`${tutorial.title} thumbnail`} src={API.getAsset(tutorial.thumbnail ? tutorial.thumbnail.url : '')}></img>
            <h1>{tutorial.title}</h1>
            <hr></hr>
            <div className="row">
                <article className="col-md-9">
                    <ReactMarkdown source={tutorial.content} />
                    {tutorial.links && <div className="links">
                        <h2>Liens utiles</h2>
                        <ReactMarkdown source={tutorial.links} />
                    </div>}
                </article>
                <div className="col-md-3 p-4">
                    <h6>Partager l'article</h6>
                    <div className="share">
                        <FacebookShareButton url={shareUrl}><FacebookIcon round size={40} /></FacebookShareButton>
                        <TwitterShareButton url={shareUrl}><TwitterIcon round size={40} /></TwitterShareButton>
                        <LinkedinShareButton url={shareUrl}><LinkedinIcon round size={40} /></LinkedinShareButton>
                        <FacebookMessengerShareButton url={shareUrl}><FacebookMessengerIcon round size={40} /></FacebookMessengerShareButton>
                        <EmailShareButton url={shareUrl}><EmailIcon round size={40} /></EmailShareButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tutorial