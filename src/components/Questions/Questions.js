import React, { useState, useEffect } from 'react'
import '../app.scss'
import './questions.scss'
import API from '../../backend/API'
import { Link } from 'react-router-dom'
import Question from './Question'
import { Routes } from '../router'

const Questions = () => {

    //State
    const [questions, setQuestions] = useState([])

    //Get all questions on load
    useEffect(() => {
        API.getShowcaseQuestions().then(setQuestions)
    }, [])

    return (
        <section className="flop__questions">
            <div className="container">
                <h1>Foire aux questions</h1>
                <p>Nos questions les plus fréquentes.</p>
                <div class="accordion" id="accordionQuestions">
                    {questions.map(q => <Question key={q.id} question={q} />)}
                </div>
                <div className="d-flex justify-content-center">
                    <Link to={Routes.faq} className="flop__btn mt-3">Voir toutes les questions</Link>
                </div>
            </div>
        </section>
    )
}

export default Questions