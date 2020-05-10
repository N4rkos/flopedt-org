import React from 'react'
import './landing.scss'
//Images
import landingScreen from '../../assets/images/flop_landing_screen.png'
import laptop from '../../assets/images/laptop.png'
import landingWave from '../../assets/svg/landing.svg'

const Landing = () => {

    return (
        <section className="landing" style={{ marginTop: '-80px' }}>
            <img className="wave" src={landingWave}></img>
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <div className="outer row d-flex align-items-center">
                    <div className="col-md-8">
                        <div className="flop-laptop">
                            <img className="laptop" src={laptop}></img>
                            <img className="screen" src={landingScreen}></img>
                        </div>
                    </div>
                    <div className="col-md-4 right">
                        <h1><span className="logo-font">flop!EDT</span>, votre emploi du temps personnalisé</h1>
                        <div className="separator"></div>
                        <p>Vous en avez marre de passer des heures à réaliser un emploi du temps qui convient à tout le monde ?
                            Découvrez notre gestionnaire d'emploi du temps <strong><span className="flop__red">FL</span>exible</strong> et <strong><span className="flop__green">OP</span>en source</strong> qui fera le travail à votre place.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing