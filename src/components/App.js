import React from 'react'
import './app.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './Footer/Footer'

const App = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Footer />
                </Route>
            </Switch>
        </Router>
    )
}

export default App