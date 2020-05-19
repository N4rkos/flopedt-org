import React from 'react'
import './app.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './Footer/Footer'
import FAQ from './FAQ/FAQ'
import Contributors from './Contributors/Contributors'
import NotFound from './404/NotFound'
import { Routes } from './router'
import Navbar from './Navigation/Navbar'
import ScrollTop from './ScrollTop/ScrollTop'
import Legals from './Legals/Legals'
import Privacy from './Privacy/Privacy'
import Blog from './Blog/Blog'
import Donate from './Donate/Donate'
import Post from './Blog/Post'
import Index from './Index/Index'

const App = () => {
    return (
        <Router>
            <ScrollTop />
            <Navbar />
            <div style={{ marginTop: '70px' }}>
                <Switch>
                    <Route path={Routes.home} exact component={Index} />
                    <Route path={Routes.contributors} component={Contributors} />
                    <Route path={Routes.blog.faq.index} component={FAQ} />
                    <Route path={Routes.blog.index} exact component={Blog} />
                    <Route path={Routes.blog.show} component={Post} />
                    <Route path={Routes.legals} component={Legals} />
                    <Route path={Routes.privacy} component={Privacy} />
                    <Route path={Routes.donate} component={Donate} />
                    <Route path={Routes.notFound} component={NotFound} />
                </Switch>
            </div>
            <Footer />
        </Router>
    )
}

export default App