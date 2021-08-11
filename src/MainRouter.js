import React from 'react'
import { Router as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './components/Header'
import HomePage from './components/HomePage'
import Application from './components/Application'



export default function MainRouter() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/application" component={Application} />
                </Switch>
            </Router>
        </div>
    )
}
