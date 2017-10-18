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
        res.status(400).send('Unable to save User.');
    });
}));

appRouter.get('/users', function(req, res) {
    User.find({}, function(error, doc) {
        if (error) {
            res.send(error);
        } else {
            res.send(doc);
        }
    });
});

appRouter.get('/add-collection/:id', function(req, res) {
    const id = req.params.id;

    User.findById(id, function(err, User) {
        res.json(User);
    });
});

appRouter.post('/update-collection/:id', function(req, res) {
    User.findByIdAndUpdate(req.params.id, { $push: { "collections": {
        "_id": req.params.id,
        "collectionName": req.body.collectionName,
        "accessionID": req.body.accessionID,
    } } }, function(error, user) {
        if (error) {
            console.log(error);
        } else {
            user.save(function(err, users) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(users);
                }
            })
        }
    });
});

appRouter.get('/add-accession/:accessionID', function(req, res) {
    const id = req.params.accessionID;

    MuseumCollection.findById(id, function(err, MuseumCollection) {
        res.json(MuseumCollection);
    });
});

appRouter.post('/update-accession/:accessionID', function(req, res) {
    const id = req.params.accessionID;
    
    MuseumCollection.findByIdAndUpdate(id, { $push: { "accessions": {
        "acqNumber": req.body.acqNumber,
        "acqMethod": req.body.acqMethod,
        "acqName": req.body.acqName,
        "acqCollection": req.body.acqCollection,
        "acqProv": req.body.acqProv,
        "acqDonor": req.body.acqDonor,
        "acqDescribe": req.body.acqDescribe
    } } }, function(error, MuseumCollection) {
        if (error) {
            console.log(error);
        } else {
            MuseumCollection.save(function(err, MuseumCollection) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(MuseumCollection);
                }
            })
        }
    });
});

appRouter.get('/view-collections/:id', function(req, res) {
    const id = req.params.id;

    User.findById(id, function(err, User) {
        res.json(User);
    });
});

appRouter.get('/collections/view-accessions/:id', function(req, res) {
    const id = req.params.id;

    MuseumCollection.findById(id, function(err, MuseumCollection) {
        res.json(MuseumCollection);
    });
});

appRouter.route('/collections/delete/:id').get(function(req, res) {
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
    User.find(function(err, users) {
        if(err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

module.exports = appRouter;