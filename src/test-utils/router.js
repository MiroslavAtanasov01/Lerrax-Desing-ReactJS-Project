import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import UserContext from '../Context'


const TestingEnvironment = ({ value, children }) => {
    return (
        <BrowserRouter>
            <Route>
                <UserContext.Provider value={value}>
                    {children}
                </UserContext.Provider>
            </Route>
        </BrowserRouter>
    )
}

export default TestingEnvironment