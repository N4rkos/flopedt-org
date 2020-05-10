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

const App = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Landing />
                    <Presentation />
                    <Slideshow />
                    <Users />
                    <Testimonials />
                    <Questions />
                </Route>
                <Route path="/contributeurs" component={Contributors} />
                <Route path="/faq" component={FAQ} />
                <Route path="*" component={NotFound} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default App