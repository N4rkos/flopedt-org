import React, { useState } from 'react'
import './newsletter.scss'
import API from '../../backend/API'

const Newsletter = () => {

    const [email, setEmail] = useState('')
    const [status, setStatus] = useState({
        isError: null,
        payload: '',
    })

    const createEntry = async e => {
        if (email !== '') {
            const response = await API.addToNewsletter(email)
            if (response != 'ERROR') {
                setStatus({ isError: false, payload: 'Votre mail a bien été enregistré dans notre newsletter !' })
            } else {
                setStatus({ isError: true, payload: "Il y a eu un problème lors de l'enregistrement de votre adresse. Veuillez réessayer, si le problème persiste, contactez-nous." })
            }
        }
    }

    return (
        <section className="newsletter-subscription">
            <div className="container">
                <h1>Inscrivez-vous à la newsletter !</h1>
                <p>Pour rester informer des différentes évolutions, articles sur flopEDT, inscrivez-vous à notre newsletter !</p>
                <div className="form row">
                    <input className="col-md-10" onChange={e => setEmail(e.target.value)} type="email" placeholder="Votre mail" />
                    <button className="col-md-2" onClick={createEntry} type="submit">
                        S'inscrire
                    </button>
                </div>
                <small>Votre email sera stocké dans un espace sécurisé.</small><br></br>
                {status.isError !== null && <span className={status.isError ? 'flop__red' : 'flop__green'}>{status.payload}</span>}
            </div>
        </section>
    )

}

export default Newsletter