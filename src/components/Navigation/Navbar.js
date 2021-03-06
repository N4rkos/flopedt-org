import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Routes } from '../router'
import './navbar.scss'
import './menu-icon.scss'

const Navbar = () => {

    useEffect(() => {
        document.getElementById('menu-icon').addEventListener('click', function () {
            document.getElementById('menu-icon').classList.toggle('change');
            document.getElementById('navbar').classList.toggle('change');
        });
    })

    window.addEventListener('scroll', function () {
        addShadowToNavbar();
    });

    /**
     * Anime la barre de navigation en lui rajoutant les ombres lorsque l'utilisateur défile.
     */
    const addShadowToNavbar = () => {
        let navbar = document.getElementById('navbar')
        let y = window.scrollY;
        if (y === 0) {
            navbar.classList.remove('shadow');
        } else {
            navbar.classList.add('shadow');
        }
    }

    const setActive = e => {
        document.querySelector('.nav-active').classList.remove('nav-active')
        e.target.classList.add('nav-active')
        document.getElementById('menu-icon').click()
    }

    return (
        <div id="navbar" className="flop__navbar d-flex align-items-center justify-content-between">
            <div className="flop__navbar__brand">
                <Link to={Routes.home}><h1 className="flop__logo logo-font">
                    <span className="flop__green logo-font">flop</span>!<span className="flop__red logo-font">EDT</span>
                </h1></Link>
            </div>
            <div className="flop__navbar__links">
                <ul>
                    <li><Link onClick={setActive} to={Routes.home} className="nav-links nav-active">Accueil</Link></li>
                    <li><Link onClick={setActive} to={Routes.faq} className="nav-links">FAQ</Link></li>
                    {/* <li><a className="contact-link shadow">Contact</a></li> */}
                </ul>
            </div>
            <div id="menu-icon" className="menu-icon">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </div>
    )
}

export default Navbar