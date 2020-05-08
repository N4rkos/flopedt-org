import React from 'react'
import './app.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './Footer/Footer'
import Users from './Users/Users'
import Presentation from './Presentation/Presentation'

const App = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Presentation />
                    <Users />
                    <Footer />
                </Route>
            </Switch>
        </Router>
    )
}

export default App