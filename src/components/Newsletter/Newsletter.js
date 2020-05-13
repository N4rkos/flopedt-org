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
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email !== '' && re.test(email)) {
            const response = await API.addToNewsletter(email)
            if (response != 'ERROR') {
                setStatus({ isError: false, payload: 'Votre mail a bien été enregistré dans notre newsletter !' })
            } else {
                setStatus({ isError: true, payload: "Vous êtes déjà inscrit à notre newsletter." })
            }
        } else {
            setStatus({ isError: true, payload: "Merci d'entrer une adresse mail valide." })
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
                <small><i className="fas fa-lock"></i> Votre email sera stocké dans un espace sécurisé.</small><br></br>
                {status.isError !== null && <small className={status.isError ? 'flop__red' : 'flop__green'}>{status.payload}</small>}
            </div>
        </section>
    )

}

export default Newsletter