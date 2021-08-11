import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './components/Header'
import HomePage from './components/HomePage'
import Apply from './components/Apply'



export default function MainRouter() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/apply" component={Apply} />
                </Switch>
            </Router>
        </div>
    )
}
