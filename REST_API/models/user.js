const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: true,
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
    },
    picture: {
        // type: String,
    },
    wishlist: [{
        type: 'ObjectId',
        ref: 'Article'
    }],
    cart: [{
        type: 'ObjectId',
        ref: 'Article'
    }],
    orders: [{
        type: 'ObjectId',
        ref: 'Article'
    }],
    articles: [{
        type: 'ObjectId',
        ref: 'Article'
    }]
})


UserSchema.methods = {
    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    }
};

UserSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) {
                return next(err)
            }
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) {
                    return next(err)
                }
                this.password = hash;
                next();
            });
        });
        return;
    }
    next();
});

module.exports = mongoose.model('User', UserSchema)