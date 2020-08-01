const models = require('../models');

module.exports = {
    get: {
        getAllArticles: (req, res, next) => {
            models.article.find().populate('creatorId')
                .then((articles) => res.send(articles))
                .catch(next);
        },
        getSofas: (req, res, next) => {
            models.article.find({ category: 'Sofas' })
                .then((sofas) => res.send(sofas))
                .catch(next);
        },
        getChairs: (req, res, next) => {
            models.article.find({ category: 'Chairs' })
                .then((chairs) => res.send(chairs))
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
        const { name, description, imageUrl } = req.body;
        models.article.updateOne({ _id: id }, { name, description, imageUrl })
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