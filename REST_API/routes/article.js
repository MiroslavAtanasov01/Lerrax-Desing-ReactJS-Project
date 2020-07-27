const controllers = require('../controllers/');
const router = require('express').Router();
const auth = require('../utils/auth')

router.get('/', controllers.article.get);

router.post('/', auth(), controllers.article.post);

router.put('/:id', auth(), controllers.article.put);

router.delete('/:id', auth(), controllers.article.delete);

module.exports = router;