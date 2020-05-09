import React, { useState, useEffect } from 'react'
import '../app.scss'
import './users.scss'
import API from '../../backend/API'

const Users = () => {

    //State
    const [users, setUsers] = useState([])

    //Get all clients on load
    useEffect(() => {
        API.getClients().then(setUsers)
    }, [])

    return (
        <section className ="flop__users">
            <div className="container">
                <div className="top__content">
                    <h1>Ils utilisent flop!EDT</h1>
                    <p>Retrouvez ci-dessous les établissements qui utilisent flop!EDT au quotidien.</p>
                </div>
                <div className="row justify-content-center">
                {users.map(u => (
                    <div key={u.id} className="flop__users__card" onClick={() => window.open(`${u.url}`, '_blank')}>
                        <img src={API.getAsset(u.logo.url)} alt={u.name}/>
                        <div className="flop__users__card__text">
                            <h3>{u.name}</h3>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default Users