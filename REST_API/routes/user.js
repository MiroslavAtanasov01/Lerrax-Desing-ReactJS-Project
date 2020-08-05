const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/', controllers.user.get.getById)

router.get('/user/:id', controllers.user.get.user)

router.get('/all', controllers.user.get.getAll)


router.post('/register', controllers.user.post.register);

router.post('/login', controllers.user.post.login);

router.post('/verify', controllers.user.post.verifyLogin);

router.post('/logout', controllers.user.post.logout);


router.put('/wishlist/:id', controllers.user.put.wishlist);

router.put('/cart/:id', controllers.user.put.cart);

router.put('/orders/:id', controllers.user.put.orders);


router.delete('/:id', controllers.user.delete);

module.exports = router;