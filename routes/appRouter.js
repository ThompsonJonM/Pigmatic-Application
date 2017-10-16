const express = require('express');
const app = express();
const appRouter = express.Router();

const User = require('../models/User');
const MuseumCollection = require('../models/MuseumCollection');
const Accession = require('../models/Accession');

appRouter.post('/add-user/post', (function(req, res) {
    const user = new User(req.body);
    user.save()

    .then(user => {
        res.json('User added.');
    })

    .catch(err => {
        res.status(400).send('Unable to save user.');
    });
}));

appRouter.post('/add-collection/post', function(req, res) {
    const museumCollection = new MuseumCollection(req.body);
    museumCollection.save(function(err, doc) {
        if (err) {
            res.send(err)
        } else {
            User.findOneAndUpdate({_id: '59e4d2e1b8059c19d4795cc8'}, { $push: { 'museumCollections': doc } }, function(error, doc) {
                if (error) {
                    res.send(error);
                } else {
                    res.send(doc);
                }
            });
        }
    });
});

appRouter.post('/add-accession/post', function(req, res) {
    const accession = new Accession(req.body);
    accession.save(function(err, doc) {
        if (err) {
            res.send(err);
        } else {
            MuseumCollection.findByIdAndUpdate({ _id: '59e4d2e1b8059c19d4795cc8' }, { $push: { 'accessions': doc._id } }, function(error, doc) {
                if (error) {
                    res.send(error);
                } else {
                    res.send(doc);
                }
            });
        }
    });
});

appRouter.get('/users/collections', function(req, res) {
    User.find({_id: '59e4d2e1b8059c19d4795cc8'}).populate('museumCollections').exec(function(error, doc) {
        if (error) {
            res.send(error);
        } else {
            res.send(doc);
        }
    });
});

appRouter.get('/', function(req, res) {
    User.find(function(err, usrs) {
        if(err) {
            console.log(err);
        } else {
            res.json(usrs);
        }
    });
});

module.exports = appRouter;