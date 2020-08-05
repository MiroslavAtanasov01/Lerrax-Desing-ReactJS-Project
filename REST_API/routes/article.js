const controllers = require('../controllers/');
const router = require('express').Router();
const auth = require('../utils/auth')

router.get('/', controllers.article.get.getAllArticles);
router.get('/details/:id', controllers.article.get.getArticleDetails);
router.get('/sofas', controllers.article.get.getSofas);
router.get('/chairs', controllers.article.get.getChairs);

router.post('/', auth(), controllers.article.post);

router.put('/:id', auth(), controllers.article.put);

router.delete('/:id', auth(), controllers.article.delete);

module.exports = router;