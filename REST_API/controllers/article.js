const models = require('../models');

module.exports = {
    get: {
        getAllArticles: (req, res, next) => {
            models.article.find().sort({ likes: -1 }).limit(8).populate('creatorId')
                .then((articles) => res.send(articles))
                .catch(next);
        },
        getArticle: (req, res, next) => {
            models.article.find({ category: req.params.type })
                .then((article) => res.send(article))
                .catch(next);
        },
        getArticleDetails: (req, res, next) => {
            models.article.findById(req.params.id)
                .then((article) => res.send(article))
                .catch(next);
        },
        getSortedByPriceHigh: (req, res, next) => {
            models.article.find({ category: req.params.type }).sort({ price: -1 })
                .then((articles) => res.send(articles))
                .catch(next);
        },
        getSortedByPriceLow: (req, res, next) => {
            models.article.find({ category: req.params.type }).sort({ price: +1 })
                .then((articles) => res.send(articles))
                .catch(next);
        },
        getSortedByLikes: (req, res, next) => {
            models.article.find({ category: req.params.type }).sort({ likes: -1 })
                .then((articles) => res.send(articles))
                .catch(next);
        },
    },

    post: (req, res, next) => {
        const { name, description, imageUrl, category, price } = req.body;
        const { _id } = req.user;

        models.article.create({ name, description, imageUrl, category, price, creatorId: _id })
            .then((createdArticle) => {
                return Promise.all([
                    models.user.updateOne({ _id }, { $push: { articles: createdArticle } }),
                    models.article.findOne({ _id: createdArticle._id })
                ]);
            })
            .then(([modifiedObj, articleObj]) => {
                res.send(articleObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        models.article.findByIdAndUpdate({ _id: id }, {
            $addToSet: {
                likes: [req.body.id],
            },
        })
            .then((updatedArticle) => res.send(updatedArticle))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.article.deleteOne({ _id: id })
            .then((removedArticle) => res.send(removedArticle))
            .catch(next)
    }
};