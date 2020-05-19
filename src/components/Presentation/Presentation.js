import React from 'react'
import '../app.scss'
import './presentation.scss'
import { Link } from 'react-router-dom'
import { Routes } from '../router'

const Presentation = () => {

    return (
        <section id="presentation" className="flop__presentation">
            {/* <div className="wave"></div> */}
            <div className="container">
                <div className="flop__presentation__content">
                    <div className="top__content">
                        <h1>flop!EDT, outil de création et de gestion d’emplois du temps</h1>
                        <p>Définissez vos contraintes et préférences, flop!EDT se chargera de fabriquer automatiquement le
                        meilleur emploi du temps possible. Si par malheur il n’est pas parfait, il sera possible à
                    chacun⋅e de le modifier !</p>
                        <span className="flop__situation"><i class="fas fa-exclamation-triangle"></i> Logiciel en bêta, peut contenir certains bugs </span>
                    </div>
                    <div className="bottom__content row justify-content-center">
                        <i className="fab fa-modx"></i>
                        <div className="attribute col-sm">
                            <h4>Flexible</h4>
                            <p>Vous pourrez paramétrer l’outil en fonction de la structure de votre
                            établissement (salles, groupes, créneaux horaires,…). De plus, deux versions
                            sont possibles : gestion d’emplois du temps d’enseignement (lycée, IUT, école…)
                                    ou gestion de plannings de salarié⋅e⋅s de façon coopérative.</p>
                        </div>
                        <i className="fas fa-code-branch"></i>
                        <div className="attribute col-sm">
                            <h4>Open source</h4>
                            <p>Développé sous licence AGPLv3, le code de flop!EDT s’inscrit complètement dans la
                            philosophie du logiciel libre : logiciel 100 % gratuit et sans pub, le code est
                            accessible et modifiable sans autre contrainte que de rester libre, toutes les
                                    briques utilisées étant elles-même open source.</p>
                        </div>
                        <i className="fas fa-users"></i>
                        <div className="attribute col-sm">

                            <h4>Coopératif</h4>
                            <p>Le développement du logiciel est coopératif, à travers une communauté ouverte à
                            toutes et tous animée par deux des auteurs. Mais l’utilisation du logiciel est
                            coopérative également, chacun⋅e étant invité⋅e à définir ses propres
                                    préférences, et à améliorer l’emploi du temps généré.</p>
                        </div>
                    </div>
                    <div className="col align-center">
                        <div className="row justify-content-center">
                            <a className="flop__btn demo__btn mr-3"
                                rel="noopener noreferrer"
                                href="http://flopedt-dev.iut-blagnac.fr/edt/INFO/2019/45"
                                target="_blank">Démonstration</a>
                            <Link to={Routes.contributors} target="_blank" className="flop__btn contrib__btn">Contributeurs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Presentation