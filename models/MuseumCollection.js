const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MuseumCollection  = new Schema({
    name: {
        type: String
    }
}, {
    collection: 'collections'
});

module.exports = mongoose.model('MuseumCollection', MuseumCollection);
