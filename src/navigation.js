import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Products from './pages/products'
import RegisterPage from './pages/register'
import LoginPage from './pages/login'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Products} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation