import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Question = ({ question }) => {

    const q = question
    const uid = uuidv4() 
    return (
        <div class="card">
            <div class="card-header" id={`heading${q.id}`}>
                <h2 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target={`#${uid}`}>
                        {q.question}
                    </button>
                </h2>
            </div>
            <div id={`${uid}`} class="collapse" data-parent="#accordionQuestions">
                <div class="card-body">
                    <p>{q.response}</p>
                </div>
            </div>
        </div>
    )
}

export default Question