import React from 'react'

const Donate = () => {

    document.title = 'Soutenir le projet | flop!EDT'
    return (
        <iframe
            id="haWidget"
            title="Donate"
            allowtransparency="true"
            scrolling="auto"
            src="https://www.helloasso.com/associations/fondation-pour-des-logiciels-opensource-participatifs-d-emploi-du-temps/formulaires/1/widget"
            style={{ width: '100%', height:'100vh', border: 'none' }}
        ></iframe >
    )
}

export default Donate