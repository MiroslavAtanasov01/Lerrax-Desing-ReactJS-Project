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
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    creatorId: {
        type: "ObjectId",
        required: true
    },
}, { timestamps: { createdAt: 'created_at' } })

module.exports = mongoose.model('Article', ArticleSchema)