const controllers = require('../controllers/');
const router = require('express').Router();
const auth = require('../utils/auth')

router.get('/', controllers.article.get.getAllArticles);

router.get('/:type', controllers.article.get.getArticle);

router.get('/details/:id', controllers.article.get.getArticleDetails);

router.get(`/sortH/:type`, controllers.article.get.getSortedByPriceHigh);
router.get(`/sortL/:type`, controllers.article.get.getSortedByPriceLow);
router.get(`/likes/:type`, controllers.article.get.getSortedByLikes);

router.post('/', auth(), controllers.article.post);

router.put('/:id', auth(), controllers.article.put);

router.delete('/:id', auth(), controllers.article.delete);

module.exports = router;