import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Products from './pages/products'
import RegisterPage from './pages/register'
import LoginPage from './pages/login'
import ErrorPage from './pages/error'
import AboutUsPage from './pages/about'
import ContactsPage from './pages/contacts'
import ProfilePage from './pages/profile'
import SofasPage from './pages/articles/Sofas'
import DetailsArticle from './pages/detailsArticle'
import wishlistPage from './pages/wishlistPage'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Products} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/profile/:id" component={ProfilePage} />
                <Route path="/about" component={AboutUsPage} />
                <Route path="/contacts" component={ContactsPage} />
                <Route path="/details/:id" component={DetailsArticle} />
                <Route path="/sofas" component={SofasPage} />
                <Route path="/wishlist" component={wishlistPage} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation