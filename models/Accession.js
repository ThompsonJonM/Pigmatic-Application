// Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Accession = new Schema({
    acqNumber: {
        type: Number,
        required: true,

        /* Regex shall match 2010-2029.00-99.000-999a-z 
        with a max length of 12 characters*/
        match: [/([2][0][1-2][0-9])[.]([0-9]{2})[.]([0-9][0-9]?[0-9]?[a-z]?)/, 
        
        // Regex error message:
        "Please enter a valid accession number (ex. 2017.22.02a)"],

        validate: [
            function(input) {
                return input.length <=12;
            },

            // Validation error message:
            'Accession numbers should be less than or equal to twelve digits in length.'
        ]
    },

    acqMethod: {
        type: String,
        trim: true,
        required: true
    },

    acqName: {
        type: String,
        trim: true,
        required: true
    },

    acqCollection: {
        type: String,
        required: true
    },

    acqProv: {
        type: String,
        required: true
    },

    acqDonor: {
        type: String,
        required: true
    },

    acqDescribe: {
        type: String,
        required: true
    }

}, {
    collection: 'accessions'
});

module.exports = mongoose.model('Accession', Accession);
