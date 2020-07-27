const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.article.find().populate('creatorId')
            .then((articles) => res.send(articles))
            .catch(next);
    },

    post: (req, res, next) => {
        const { name, description, imageUrl } = req.body;
        const { _id } = req.user;

        models.article.create({ name, description, imageUrl, creatorId: _id })
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