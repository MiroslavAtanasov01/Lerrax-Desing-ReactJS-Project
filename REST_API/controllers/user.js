const models = require('../models');
const config = require('../config/config');
const jwt = require('../utils/jwt')

module.exports = {
    get: (req, res, next) => {
        models.user.findById(req.query.id)
            .then((user) => {
                res.send(user)
                console.log(user);
            })
            .catch((err) => res.status(500).send("Error"))
    },

    post: {
        register: (req, res, next) => {
            const { username, password } = req.body;
            models.user.create({ username, password })
                .then((createdUser) => res.send(createdUser))
                .catch(next)
        },

        login: (req, res, next) => {
            const { username, password } = req.body;
            models.user.findOne({ username })
                .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Invalid password');
                        return;
                    }

                    const token = jwt.createToken({ id: user._id });
                    res.cookie(config.development.cookie, token).send(user);
                })
                .catch(next);
        },

        logout: (req, res, next) => {
            res.clearCookie(config.authCookieName)
        }
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { username, password } = req.body;
        models.user.update({ _id: id }, { username, password })
            .then((updatedUser) => res.send(updatedUser))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.user.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    }
};