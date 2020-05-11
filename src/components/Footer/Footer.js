import React from 'react'
import './footer.scss'

const Footer = () => {

    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 footer-elem">
                            <h4>flop!EDT</h4>
                            <p>flop!EDT est un logiciel libre de génération automatique et de gestion coopérative des emplois du temps (scolaires ou planning de salarié⋅e⋅s). Il est distribué sous licence AGPLv3.</p>
                        </div>
                        <div className="col-md-4 footer-elem">
                            <h4>Liens rapides</h4>
                            <ul>
                                <li><a href="">flop!EDT</a></li>
                                <li><a href="">Contributeurs</a></li>
                                <li><a href="">Aperçu</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 footer-elem">
                            <h4>Contact</h4>
                            <a href="mailto:contact@flopedt.org"><i className="far fa-envelope"></i> contact@flopedt.org</a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="d-flex justify-content-center align-items-center footer-bottom">
                <span>flop!EDT Copyright &copy; 2020. Made with <i style={{ color: 'red' }} className="fas fa-heart"></i> by Hugo Amalric & Thomas Gouveia.</span>
            </div>
        </div>
    )
}

export default Footer