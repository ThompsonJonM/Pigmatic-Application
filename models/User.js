const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const MuseumCollectionSchema = require('./MuseumCollection');

const UserSchema  = new Schema({
    username: {
        type: String
    },

    password: {
        type: String
    },

    collections: [{
        _id: true,
        type: Schema.Types.Object,
        ref: 'MuseumCollection'
    }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
