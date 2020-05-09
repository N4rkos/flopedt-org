import React, { useState, useEffect } from 'react'
import '../app.scss'
import './contributors.scss'
import API from '../../backend/API'

const Contributors = () => {

    //State
    const [contributors, setContributors] = useState([])

    //Get all clients on load
    useEffect(() => {
        API.getContributors()
    }, [])

    return (
        <section className="flop__contributors">
            <div className="container">
                <div className="contributors__header">
                    <h1>Contributeurs du projet</h1>
                    <p>Retrouvez ci-dessous la liste de toutes les personnes ayant participé de près ou de loin au développement de l'application.</p>
                </div>
                <div className="contributors__category">
                    <h3>Nom de la catégorie</h3>
                    <div className="row">
                        <div className="contributor__card">
                        Contributeur
                        </div>
                    </div>
                </div>
                <div className="contributors__tutorial">
                    <h1>Comment contribuer ?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis culpa cupiditate, dolorem dolores enim eos error harum, illum ipsa nam odit perspiciatis placeat repellat repellendus, soluta vel vero. Voluptate.</p>
                </div>
            </div>
        </section>
    )
}

export default Contributors