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
                        Cette Politique de confidentialité précise le type d’informations que nous recueillons lors de votre navigation sur notre site par voie de formulaire (I), et la façon dont nous les utilisons.<br/><br/>
                        L'équipe flop!EDT s’engage à ce que la collecte et le traitement de vos données, effectués à partir du site <a href="https://flopedt.org">flopedt.org</a> soient conformes aux lois et réglementations applicables tels que la loi Informatique et Libertés n° 78-17 du 6 janvier 1978 et la directive européenne 95/46/CE (Règlement Général sur la Protection des Données : RGPD).
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