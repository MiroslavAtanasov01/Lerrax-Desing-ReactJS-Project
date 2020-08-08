const models = require('../models');

module.exports = {
    get: {
        getAllArticles: (req, res, next) => {
            models.article.find().sort('-created_at').limit(8).populate('creatorId')
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
        getBeds: (req, res, next) => {
            models.article.find({ category: 'Beds' })
                .then((beds) => res.send(beds))
                .catch(next);
        },
        getTables: (req, res, next) => {
            models.article.find({ category: 'Tables' })
                .then((table) => res.send(table))
                .catch(next);
        },
        getSectionals: (req, res, next) => {
            models.article.find({ category: 'Sectionals' })
                .then((sectionals) => res.send(sectionals))
                .catch(next);
        },
        getBenches: (req, res, next) => {
            models.article.find({ category: 'Benches' })
                .then((benches) => res.send(benches))
                .catch(next);
        },
        getNightstands: (req, res, next) => {
            models.article.find({ category: 'Nightstands' })
                .then((nightstands) => res.send(nightstands))
                .catch(next);
        },
        getWardrobes: (req, res, next) => {
            models.article.find({ category: 'Wardrobes' })
                .then((wardrobes) => res.send(wardrobes))
                .catch(next);
        },
        getBookcases: (req, res, next) => {
            models.article.find({ category: 'Bookcases' })
                .then((bookcases) => res.send(bookcases))
                .catch(next);
        },
        getDesks: (req, res, next) => {
            models.article.find({ category: 'Desks' })
                .then((desks) => res.send(desks))
                .catch(next);
        },
        getArticleDetails: (req, res, next) => {
            models.article.findById(req.params.id)
                .then((article) => res.send(article))
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