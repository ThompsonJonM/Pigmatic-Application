const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MuseumCollectionSchema  = new Schema({
    _id: {
        formType: String
    },

    collectionName: {
        formType: String
    },

    accessionID: {
        formType: String
    },

    accessions: [{
        type: Schema.Types.Object,
        ref: 'Accession'
    }]
});

const MuseumCollection = mongoose.model('MuseumCollection', MuseumCollectionSchema);

module.exports = MuseumCollection;
