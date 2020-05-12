import React from 'react'
import './app.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './Footer/Footer'
import Landing from './Landing/Landing'
import Presentation from './Presentation/Presentation'
import Users from './Users/Users'
import Slideshow from './Slideshow/Slideshow'
import Testimonials from './Testimonials/Testimonials'
import Questions from './Questions/Questions'
import FAQ from './FAQ/FAQ'
import Contributors from './Contributors/Contributors'
import NotFound from './404/NotFound'
import { Routes } from './router'
import Navbar from './Navigation/Navbar'
import ScrollTop from './ScrollTop/ScrollTop'
// import Blog from './Blog/Blog'
import Tutoriels from './Blog/Tutoriels/Tutoriels'
import Tutorial from './Blog/Tutoriels/Tutorial'
import Legals from './Legals/Legals'
import Newsletter from './Newsletter/Newsletter'
const App = () => {
    //document.title = "FlopEDT | Gestionnaire d'emploi du temps flexible et open source"
    return (
        <Router>
            <ScrollTop />
            <Navbar />
            <div style={{ marginTop: '80px' }}>
                <Switch>
                    <Route path={Routes.home} exact>
                        <Landing />
                        <Presentation />
                        <Slideshow />
                        <Users />
                        <Testimonials />
                        <Questions />
                        <Newsletter />
                    </Route>
                    <Route path={Routes.contributors} component={Contributors} />
                    <Route path={Routes.blog.faq.index} component={FAQ} />
                    {/* <Route path={Routes.blog.index} exact component={Blog} /> */}
                    <Route path={Routes.blog.tutorials.index} exact component={Tutoriels} />
                    <Route path={Routes.blog.tutorials.view} component={Tutorial} />
                    <Route path={Routes.legals} component={Legals} />
                    <Route path={Routes.notFound} component={NotFound} />
                </Switch>
            </div>
            <Footer />
        </Router>
    )
}

export default App