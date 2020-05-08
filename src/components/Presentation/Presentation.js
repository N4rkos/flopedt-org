import React, { useState, useEffect } from 'react'
import '../app.scss'
import './presentation.scss'

const Presentation = () => {

    return (
        <section class="flop__presentation">
            <div class="container">
                <div class="flop__presentation__content">
                    <div class="top__content">
                        <h1>flop!EDT, outil de création et de gestion d’emplois du temps</h1>
                        <p>Définissez vos contraintes et préférences, flop!EDT se chargera de fabriquer automatiquement le
                        meilleur emploi du temps possible. Si par malheur il n’est pas parfait, il sera possible à
                    chacun⋅e de le modifier !</p>
                        <span class="flop__situation">Logiciel en cours de développement.</span>
                    </div>
                    <div class="bottom__content col">
                        <div class="row justify-content-center">
                            <div class="col">
                                <div class="attribute">
                                    <i class="fab fa-modx"></i>
                                    <h4>Flexible</h4>
                                    <p>Vous pourrez paramétrer l’outil en fonction de la structure de votre
                                    établissement (salles, groupes, créneaux horaires,…). De plus, deux versions
                                    sont possibles : gestion d’emplois du temps d’enseignement (lycée, IUT, école…)
                                    ou gestion de plannings de salarié⋅e⋅s de façon coopérative.</p>
                                </div>
                            </div>
                            <div class="col">
                                <div class="attribute">

                                    <i class="fas fa-code-branch"></i>
                                    <h4>Open source</h4>
                                    <p>Développé sous licence AGPLv3, le code de flop!EDT s’inscrit complètement dans la
                                    philosophie du logiciel libre : logiciel 100 % gratuit et sans pub, le code est
                                    accessible et modifiable sans autre contrainte que de rester libre, toutes les
                                    briques utilisées étant elles-même open source.</p>
                                </div>
                            </div>
                            <div class="col">
                                <div class="attribute">
                                    <i class="fas fa-users"></i>
                                    <h4>Coopératif</h4>
                                    <p>Le développement du logiciel est coopératif, à travers une communauté ouverte à
                                    toutes et tous animée par deux des auteurs. Mais l’utilisation du logiciel est
                                    coopérative également, chacun⋅e étant invité⋅e à définir ses propres
                                    préférences, et à améliorer l’emploi du temps généré.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col align-center">
                            <div class="row justify-content-center">
                                <a class="flop__btn demo__btn"
                                    href="https://flopedt.iut-blagnac.fr/edt/INFO/">Démonstration</a>
                                <a class="flop__btn contrib__btn"
                                    href="#">Contributeurs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Presentation