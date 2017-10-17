const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MuseumCollectionSchema  = new Schema({
    collectionName: {
        type: String
    },

    accessionID: {
        type: String
    },

    accessions: [{
        type: Schema.Types.Object,
        ref: 'Accession'
    }]
});

const MuseumCollection = mongoose.model('MuseumCollection', MuseumCollectionSchema);

module.exports = MuseumCollection;
