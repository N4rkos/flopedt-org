import React, { useEffect, useState } from 'react'
import API from '../../../backend/API'
import { Link } from 'react-router-dom'
import URLGenerator from '../../../services/URLGenerator'
import moment from 'moment'
import './tutoriels.scss'

const Tutoriels = () => {

    const [tutorials, setTutorials] = useState([])

    useEffect(() => {
        API.getTutorials().then(setTutorials)
    }, [])

    return (
        <section className="tutorials">
            <div className="top">
                <div className="container">
                    <h1>Tutoriels</h1>
                    <p>
                        Retrouvez dans cette section du blog plusieurs tutoriels vous permettant d'apprendre à installer, déployer, utiliser flop!EDT grâce à des articles écrits par nos contributeurs, des vidéos et bien plus encore.
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        {tutorials.map(tuto => (
                            <div className="tutorial">
                                <img alt={tuto.title} className="thumbnail" src={API.getAsset(tuto.thumbnail.url)}></img>
                                <h5>{tuto.title}</h5>
                                <p><small>{tuto.extract}</small></p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small>Publié le : {moment(tuto.updated_at).format('DD/MM/YYYY')}</small>
                                    <Link className="flop__btn" to={URLGenerator.generateTutorialUrl(tuto)}>Lire la suite</Link>
                                </div>
                                <hr></hr>
                            </div>
                        ))}
                    </div>
                    {/* <div className="col-md-3" style={{ height: '300px', backgroundColor: '#2a2a2a'}}></div> */}
                </div>
            </div>
        </section>
    )
}

export default Tutoriels