import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Products from './pages/products'
import RegisterPage from './pages/register'
import LoginPage from './pages/login'
import ErrorPage from './pages/error'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Products} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation