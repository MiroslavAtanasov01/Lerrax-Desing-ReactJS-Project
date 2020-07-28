const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

module.exports = (app) => {
    app.use(cors({ exposedHeaders: 'Authorization' }))
    app.use(cookieParser())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    // app.use((req, res, next) => {
    //     res.locals.isLoggedIn = req.cookies[config.development.cookie] !== undefined;
    //     res.locals.username = req.cookies['username']

    //     next();
    // })
};