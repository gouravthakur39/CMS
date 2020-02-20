const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'public'
    },
    description: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    // assuming one post belongs to only one category
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category'
    },
    // Array
    comments: [
        {
        type: Schema.Types.ObjectId,
        ref: 'comment'
        }
    ],
    allowComments: {
        type: Boolean,
        default: false
    }
});

module.exports = {Post: mongoose.model('post', PostSchema )};
