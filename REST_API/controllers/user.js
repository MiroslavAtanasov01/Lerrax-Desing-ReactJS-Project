const models = require('../models');
const config = require('../config/config');
const jwt = require('../utils/jwt')

module.exports = {
    get: {
        getById: (req, res, next) => {
            models.user.findById(req.query.id)
                .then((user) => {
                    res.send(user)
                })
                .catch((err) => res.status(500).send("Error"))
        },
        user: (req, res, next) => {
            models.user.findById(req.params.id)
                .populate('wishlist')
                .populate('cart')
                .populate('orders')
                .then((user) => {
                    res.send(user)
                })
                .catch((err) => res.status(500).send("Error"))
        },
        getAll: (req, res, next) => {
            models.user.find().populate('wishlist')
                .then((user) => {
                    res.send(user)
                })
                .catch((err) => res.status(500).send("Error"))
        },
    },

    post: {
        register: (req, res, next) => {
            const { email, username, password, rePassword } = req.body;
            models.user.create({ email, username, password, rePassword })
                .then((createdUser) => {
                    const token = jwt.createToken({ id: createdUser._id })
                    res.header('Authorization', token).send(createdUser)
                })
                .catch(next)
        },

        verifyLogin: (req, res, next) => {
            const token = req.body.token || '';

            Promise.all([
                jwt.verifyToken(token),
            ])
                .then(([data, blacklistToken]) => {
                    if (blacklistToken) { return Promise.reject(new Error('blacklisted token')) }

                    models.user.findById(data.id)
                        .then((user) => {
                            return res.send({
                                status: true,
                                user
                            })
                        });
                })
                .catch(err => {
                    if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
                        res.status(401).send('UNAUTHORIZED!');
                        return;
                    }

                    res.send({
                        status: false
                    })
                })
        },

        login: (req, res, next) => {
            const { email, password } = req.body;
            models.user.findOne({ email })
                .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Invalid password');
                        return;
                    }

                    const token = jwt.createToken({ id: user._id });
                    // res.cookie(config.development.cookie, token).send(user);
                    res.header('Authorization', token).send(user);
                })
                .catch(next);
        },

        logout: (req, res, next) => {
            res.clearCookie(config.authCookieName)
        }
    },

    put: {
        wishlist: (req, res, next) => {
            const id = req.params.id;
            models.user.findByIdAndUpdate({ _id: id }, {
                $addToSet: {
                    wishlist: [req.body.id],
                },
            })
                .then((updatedUser) => res.send(updatedUser))
                .catch(next)
        },
        cart: (req, res, next) => {
            const id = req.params.id;
            models.user.findByIdAndUpdate({ _id: id }, {
                $addToSet: {
                    cart: [req.body.id],
                },
            })
                .then((updatedUser) => res.send(updatedUser))
                .catch(next)
        },
        orders: (req, res, next) => {
            const id = req.params.id;
            models.user.findByIdAndUpdate({ _id: id }, {
                $addToSet: {
                    orders: req.body.id,
                },
            })
                .then((updatedUser) => res.send(updatedUser))
                .catch(next)
        },
        removeCart: (req, res, next) => {
            const id = req.params.id;
            models.user.update({ _id: id }, {
                $pull: {
                    cart: req.body.id,
                },
            })
                .then((updatedUser) => res.send(updatedUser))
                .catch(next)
        },
        removeWishlist: (req, res, next) => {
            const id = req.params.id;
            models.user.update({ _id: id }, {
                $pull: {
                    wishlist: req.body.id,
                },
            })
                .then((updatedUser) => res.send(updatedUser))
                .catch(next)
        },
        removeAll: (req, res, next) => {
            const id = req.params.id;
            models.user.update({ _id: id }, {
                $set: {
                    cart: []
                },
            })
                .then((updatedUser) => res.send(updatedUser))
                .catch(next)
        },
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.user.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    }
};