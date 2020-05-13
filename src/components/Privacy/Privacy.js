import React, { useState, useEffect } from 'react'
import API from '../../backend/API'
import ReactMarkdown from 'react-markdown'
import './privacy.scss'

const Privacy = () => {

    const [privacy, setPrivacy] = useState({})

    useEffect(() => {
        API.getPrivacy().then(setPrivacy)
    }, [])

    return (
        <section className="privacy">
            <div className="top">
                <div className="container">
                    <h1>Politique de confidentialité</h1>
                    <p>
                    </p>
                </div>
            </div>
            <div className="container mt-4">
                <ReactMarkdown source={privacy.content} />
            </div>
        </section>
    )
}

export default Privacy