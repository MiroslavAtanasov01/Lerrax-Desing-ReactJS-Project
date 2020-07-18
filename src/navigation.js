import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Products from './pages/products'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Products} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation