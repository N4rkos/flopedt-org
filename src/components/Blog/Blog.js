import React, { useState, useEffect } from 'react'
import './blog.scss'
import API from '../../backend/API'
import { Routes } from '../router'
import { Link } from 'react-router-dom'
import slugify from 'slugify'

const Blog = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        API.getNews().then(setArticles)
    }, [])

    document.title = 'Blog | flop!EDT'
    return (
        <section className="blog">
            <div className="blog-header shadow">
                <div className="container">
                    <h1>Blog</h1>
                    <p>Les dernières actualités sur flop!EDT, en temps réel.</p>
                </div>
            </div>
            <div className="container">
                <div className="row py-3">
                    {articles.map(article => (
                        <div className="col-md-4">
                            <div className="post shadow">
                                <img alt={`${article.title} thumbnail`} src={API.getAsset(article.thumbnail.url)}></img>
                                <h4 className="my-3">{article.title}</h4>
                                <small>{article.overview}</small>
                                <hr />
                                <Link className="flop__btn" to={Routes.blog.show.replace(':slug', slugify(article.title, { lower: true })).replace(':id', article.id)}>Lire l'article</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog