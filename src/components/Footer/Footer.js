import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'
import { Routes } from '../router'

const Footer = () => {

    return (
        <div>
            <footer className="shadow">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 footer-elem">
                            <h4>flop!EDT</h4>
                            <p>flop!EDT est un logiciel libre de génération automatique et de gestion coopérative des emplois du temps (scolaires ou planning de salarié⋅e⋅s). Il est distribué sous licence AGPLv3.</p>
                        </div>
                        <div className="col-md-4 footer-elem">
                            <h4>Liens rapides</h4>
                            <ul>
                                <li><Link to={Routes.home}>flop!EDT</Link></li>
                                <li><Link to={Routes.blog.faq.index}>FAQ</Link></li>
                                <li><Link to={Routes.blog.index}>Blog</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4 footer-elem">
                            <h4>Contact</h4>
                            <a href="mailto:contact@flopedt.org"><i className="far fa-envelope"></i> contact@flopedt.org</a>
                            <h4 className="mt-3">Infos pratiques</h4>
                            <ul>
                                <li>
                                    <Link to={Routes.legals}><small>Mentions légales</small></Link>
                                </li>
                                <li>
                                    <Link to={Routes.privacy}><small>Politique de confidentialité</small></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="d-flex justify-content-center align-items-center footer-bottom">
                <span>flop!EDT Copyleft <span style={{transform: 'rotate(180deg)', display: 'inline-block'}}>&copy;</span> 2020. Made with <i style={{ color: 'red' }} className="fas fa-heart"></i> by Hugo Amalric & Thomas Gouveia.</span>
            </div>
        </div>
    )
}

export default Footer