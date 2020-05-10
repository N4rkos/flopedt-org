import React from 'react'
var randomstring = require("randomstring");


const Question = ({ question }) => {

    const q = question
    const ustring = randomstring.generate({
        length: 12,
        charset: 'alphabetic'
    });
    return (
        <div class="card">
            <div class="card-header" id={`heading${q.id}`}>
                <h2 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target={`#${ustring}`} aria-expanded="true" aria-controls={q.id}>
                        {q.question}
                    </button>
                </h2>
            </div>
            <div id={`${ustring}`} class="collapse" aria-labelledby={`heading${q.id}`} data-parent="#accordionQuestions">
                <div class="card-body">
                    <p>{q.response}</p>
                </div>
            </div>
        </div>
    )
}

export default Question