import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from './Context'

import Products from './pages/products'
import RegisterPage from './pages/register'
import LoginPage from './pages/login'
import ErrorPage from './pages/error'
import AboutUsPage from './pages/about'
import ContactsPage from './pages/contacts'
import ProfilePage from './pages/profile'
import DetailsArticle from './pages/detailsArticle'
import WishlistPage from './pages/wishlistPage'
import CartPage from './pages/cartPage'
import OrdersPage from './pages/ordersPage'

import SofasPage from './pages/articles/sofas'
import ChairsPage from './pages/articles/chairs'
import BedsPage from './pages/articles/beds'
import BenchesPage from './pages/articles/benches'
import BookcasesPage from './pages/articles/bookcases'
import DesksPage from './pages/articles/desks'
import NightstandsPage from './pages/articles/nightstands'
import SectionalsPage from './pages/articles/sectionals'
import TablesPage from './pages/articles/tables'
import WardrobesPage from './pages/articles/wardrobes'


const Navigation = () => {
    const context = useContext(UserContext)
    const loggedIn = context.loggedIn

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Products} />
                <Route path="/register">
                    {loggedIn ? (<Redirect to="/" />) : (<RegisterPage />)}
                </Route>
                <Route path="/login">
                    {loggedIn ? (<Redirect to="/" />) : (<LoginPage />)}
                </Route>
                <Route path="/profile/:id">
                    {loggedIn ? (<ProfilePage />) : (<Redirect to="/login" />)}
                </Route>
                <Route path="/wishlist">
                    {loggedIn ? (<WishlistPage />) : (<Redirect to="/login" />)}
                </Route>
                <Route path="/cartPage">
                    {loggedIn ? (<CartPage />) : (<Redirect to="/login" />)}
                </Route>
                <Route path="/ordersPage">
                    {loggedIn ? (<OrdersPage />) : (<Redirect to="/login" />)}
                </Route>
                <Route path="/about" component={AboutUsPage} />
                <Route path="/contacts" component={ContactsPage} />
                <Route path="/details/:id" component={DetailsArticle} />

                <Route path="/sofas" component={SofasPage} />
                <Route path="/chairs" component={ChairsPage} />
                <Route path="/beds" component={BedsPage} />
                <Route path="/benches" component={BenchesPage} />
                <Route path="/bookcases" component={BookcasesPage} />
                <Route path="/desks" component={DesksPage} />
                <Route path="/nightstands" component={NightstandsPage} />
                <Route path="/sectionals" component={SectionalsPage} />
                <Route path="/tables" component={TablesPage} />
                <Route path="/wardrobes" component={WardrobesPage} />

                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation