import React from 'react'
import { Link } from 'react-router-dom'
import './not-found.scss'

const NotFound = () => {

    const path = window.location.pathname
    console.error('[ERROR] HTTP 404 - Page not found. Expected : ' + path)
    return (
        <section className="not-found">
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h1>Oops !</h1>
                    <span className="my-5">404 - Page non trouvée</span>
                    <p>Nous sommes désolés, mais il semble que la page à laquelle vous tentez d'accéder ({path}) ne soit pas trouvée.</p>
                </div>
                <center className="mt-5">
                    <Link to="/" className="flop__btn">Retourner à l'accueil</Link>
                </center>
            </div>
        </section>
    )
}

export default NotFound