import React, { useEffect, useState } from 'react'
import API from '../../backend/API'
import ReactMarkdown from 'react-markdown'

import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon, EmailShareButton, EmailIcon } from 'react-share'
import { Redirect } from 'react-router-dom'

const Post = () => {

    const [post, setPost] = useState({})

    useEffect(() => {
        const slugger = window.location.pathname.split('/')
        const id = slugger[slugger.length - 2]
        API.getNewsById(id).then(setPost)
    }, [])

    document.title = `${post.title} | FlopEDT`
    const shareUrl = window.location.href
    return (
        <div className="container article">
            <img className="thumbnail" alt={`${post.title} thumbnail`} src={API.getAsset(post.thumbnail ? post.thumbnail.url : '')}></img>
            <h1 className="mt-3">{post.title}</h1>
            <hr></hr>
            <div className="row">
                <article className="col-md-9">
                    <ReactMarkdown source={post.content} />
                    {post.links && <div className="links">
                        <h2>Liens utiles</h2>
                        <ReactMarkdown source={post.links} />
                    </div>}
                </article>
                <div className="col-md-3 p-4">
                    <h6>Partager l'article</h6>
                    <div className="share">
                        <FacebookShareButton url={shareUrl}><FacebookIcon round size={40} /></FacebookShareButton>
                        <TwitterShareButton url={shareUrl}><TwitterIcon round size={40} /></TwitterShareButton>
                        <LinkedinShareButton url={shareUrl}><LinkedinIcon round size={40} /></LinkedinShareButton>
                        <EmailShareButton url={shareUrl}><EmailIcon round size={40} /></EmailShareButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post