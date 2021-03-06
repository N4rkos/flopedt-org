import React, { useState, useEffect } from 'react'
import './faq.scss'
import API from '../../backend/API'
import ReactMarkdown from 'react-markdown'

const FAQ = () => {

    const [questions, setQuestions] = useState([])
    const [questionsTypes, setQuestionsTypes] = useState([])
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        API.getQuestions().then(questions => {
            setQuestions(questions)
            setFiltered(questions)
        })
        API.getQuestionsTypes().then(setQuestionsTypes)
    }, [])

    const handleFilterChanged = (e, q) => {
        setFiltered(q)
        const clicked = e.target
        const active = document.querySelector('.filter-active')
        active.classList.remove('filter-active')
        clicked.classList.add('filter-active')
    }

    return (
        <section className="faq my-5">
            <div className="container">
                <h1>Foire aux questions</h1>
                <p>Bienvenue sur la foire aux questions flop!EDT. Retrouvez toutes les questions que nous recevons fréquemment ainsi que leur réponse. Si votre question ne se trouve pas dans la FAQ, veuillez nous adressez un mail, nous vous répondrons et l'ajouterons.</p>
                <div className="row">
                    <div className="col-md-3 filters mb-3">
                        <div>
                            <h6>Recherche</h6>
                            <input type="text" className="search" placeholder="Rechercher une question..." />
                        </div>
                        <div className="mt-3">
                            <h6>Types</h6>
                            <ul>
                                <li className="filter-active" onClick={(e) => handleFilterChanged(e, questions)}>Toutes les questions ({questions.length})</li>
                                {questionsTypes.map(type => <li key={type.id} onClick={(e) => handleFilterChanged(e, type.questions)}>{type.type} ({type.questions.length})</li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="content">
                            {filtered.map(q => (
                                <div key={q.id} className="question-container">
                                    <span className="question"><i className="fas fa-question-circle"></i> {q.question}</span>
                                    <p className="mt-2 response"><ReactMarkdown source={q.responseMd} /></p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ