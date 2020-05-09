import React, { useState, useEffect } from 'react'
import '../app.scss'
import './questions.scss'
import API from '../../backend/API'
import slugify from 'slugify'
import { Link } from 'react-router-dom'

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
                    {questions.map(q => (
                        <div class="card">
                            <div class="card-header" id={`heading${q.id}`}>
                                <h2 class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target={`#${slugify(q.question, { lower: true })}`} aria-expanded="true" aria-controls={q.id}>
                                        {q.question}
                                    </button>
                                </h2>
                            </div>
                            <div id={`${slugify(q.question, { lower: true })}`} class="collapse" aria-labelledby={`heading${q.id}`} data-parent="#accordionQuestions">
                                <div class="card-body">
                                    {q.response}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-center">
                    <Link to="/faq" className="flop__btn mt-3">Voir toutes les questions</Link>
                </div>
            </div>
        </section>
    )
}

export default Questions