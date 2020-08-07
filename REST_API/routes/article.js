const controllers = require('../controllers/');
const router = require('express').Router();
const auth = require('../utils/auth')

router.get('/', controllers.article.get.getAllArticles);

router.get('/details/:id', controllers.article.get.getArticleDetails);

router.get('/sofas', controllers.article.get.getSofas);
router.get('/chairs', controllers.article.get.getChairs);
router.get('/beds', controllers.article.get.getChairs);
router.get('/tables', controllers.article.get.getChairs);
router.get('/sectionals', controllers.article.get.getChairs);
router.get('/benches', controllers.article.get.getChairs);
router.get('/nightstands', controllers.article.get.getChairs);
router.get('/wardrobes', controllers.article.get.getChairs);
router.get('/bookcases', controllers.article.get.getBookcases);
router.get('/desks', controllers.article.get.getDesks);

router.post('/', auth(), controllers.article.post);

router.put('/:id', auth(), controllers.article.put);

router.delete('/:id', auth(), controllers.article.delete);

module.exports = router;