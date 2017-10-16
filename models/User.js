const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String
    },

    password: {
        type: String
    },

    museumCollections: [{
        type: Schema.Types.ObjectId,
        ref: 'MuseumCollection'
    }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;