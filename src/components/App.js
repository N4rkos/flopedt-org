import React from 'react'
import './app.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './Footer/Footer'
import Landing from './Landing/Landing'

const App = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Landing />
                    <Footer />
                </Route>
            </Switch>
        </Router>
    )
}

export default App