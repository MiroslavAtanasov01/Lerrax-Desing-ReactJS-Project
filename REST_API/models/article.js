const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000,
    },
    imageUrl: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
})

// ArticleSchema.path('imageUrl').validate(function (url) {
//     return url.startsWith('http://') || url.startsWith('https://')
// }, 'Image url is not valid')

module.exports = mongoose.model('Article', ArticleSchema)