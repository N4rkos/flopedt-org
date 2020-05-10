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

const App = () => {

    return (
        <Router>
            <Navbar />
            <div style={{marginTop: '80px'}}>
                <Switch>
                    <Route path={Routes.home} exact>
                        <Landing />
                        <Presentation />
                        <Slideshow />
                        <Users />
                        <Testimonials />
                        <Questions />
                    </Route>
                    <Route path={Routes.contributors} component={Contributors} />
                    <Route path={Routes.faq} component={FAQ} />
                    <Route path={Routes.notFound} component={NotFound} />
                </Switch>
            </div>
            <Footer />
        </Router>
    )
}

export default App