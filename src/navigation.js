import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'

import Products from './pages/products'
import RegisterPage from './pages/register'
import LoginPage from './pages/login'
import ErrorPage from './pages/error'
import AboutUsPage from './pages/about'
import ContactsPage from './pages/contacts'
import ProfilePage from './pages/profile'
import SofasPage from './pages/articles/Sofas'
import DetailsArticle from './pages/detailsArticle'
import WishlistPage from './pages/wishlistPage'
import CartPage from './pages/cartPage'

import UserContext from './Context'

const Navigation = () => {
    const context = useContext(UserContext)
    const loggedIn = context.loggedIn

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Products} />
                <Route path="/register">
                    {loggedIn ? (<Redirect to="/" />) : (<LoginPage />)}
                </Route>
                <Route path="/login">
                    {loggedIn ? (<Redirect to="/" />) : (<LoginPage />)}
                </Route>
                <Route path="/profile/:id">
                    {loggedIn ? (<ProfilePage />) : (<Redirect to="/login" />)}
                </Route>
                {/* <Route path="/profile/:id" component={ProfilePage} /> */}
                <Route path="/wishlist">
                    {loggedIn ? (<WishlistPage />) : (<Redirect to="/login" />)}
                </Route>
                <Route path="/cartPage">
                    {loggedIn ? (<CartPage />) : (<Redirect to="/login" />)}
                </Route>
                <Route path="/about" component={AboutUsPage} />
                <Route path="/contacts" component={ContactsPage} />
                <Route path="/details/:id" component={DetailsArticle} />
                <Route path="/sofas" component={SofasPage} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation