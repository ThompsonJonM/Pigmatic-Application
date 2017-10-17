const express = require('express');
const app = express();
const appRouter = express.Router();

const MuseumCollection = require('../models/MuseumCollection');
const Accession = require('../models/Accession');

appRouter.post('/add-collection/post', (function(req, res) {
    const collection = new MuseumCollection(req.body);
    collection.save()

    .then(collection => {
        res.json('Collection added.');
    })

    .catch(err => {
        res.status(400).send('Unable to save collection.');
    });
}));

appRouter.post('/collections', function(req, res) {
    MuseumCollection.save(exampleCollection, function(error, doc) {
        if (error) {
            res.send(error);
        } else {
            res.send(doc);
        }
    })
})

appRouter.get('/collections', function(req, res) {
    MuseumCollection.find({}, function(error, doc) {
        if (error) {
            res.send(error);
        } else {
            res.send(doc);
        }
    });
});

appRouter.get('/add-accession/:id', function(req, res) {
    const id = req.params.id;

    MuseumCollection.findById(id, function(err, MuseumCollection) {
        res.json(MuseumCollection);
    });
});

appRouter.post('/update-accession/:id', function(req, res) {
    MuseumCollection.findById(req.params.id, function(err, collection) {
        if (!collection) {
            return next(new Error('Could not load doc'));
        } else {
            collection.accessions = [
                {
                    "acqNumber": req.body.acqNumber,
                    "acqMethod": req.body.acqMethod,
                    "acqName": req.body.acqName,
                    "acqCollection": req.body.acqCollection,
                    "acqProv": req.body.acqProv,
                    "acqDonor": req.body.acqDonor,
                    "acqDescribe": req.body.acqDescribe
                }
            ];

            collection.save().then(collection => {
                res.json('Update complete');
            })

            .catch(err => {
                res.status(400).send('Unable to update db');
            });
        }
    });
});

appRouter.route('/delete/:id').get(function(req, res) {
    MuseumCollection.findByIdAndRemove({ _id: req.params.id },
        function(err, user) {
            if (err) {
                res.json(err);
            } else {
                res.json('Collection removed');
            }
        });
});

appRouter.get('/', function(req, res) {
    MuseumCollection.find(function(err, collections) {
        if(err) {
            console.log(err);
        } else {
            res.json(collections);
        }
    });
});

module.exports = appRouter;