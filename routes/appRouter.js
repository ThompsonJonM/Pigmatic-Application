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
            User.findOneAndUpdate({}, { $push: { 'museumCollections': doc._id } }, function(error, doc) {
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
            MuseumCollection.findByIdAndUpdate({}, { $push: { 'accessions': doc._id } }, function(error, doc) {
                if (error) {
                    res.send(error);
                } else {
                    res.send(doc);
                }
            });
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

// appRouter.route('/edit/:id').get(function(req, res) {
//     const id = req.params.id;

//     User.findById(id, function(err, user) {
//         res.json(user);
//     });
// });

// appRouter.route('/update/:id').post(function(req, res) {
//     User.findById(req.params.id, function(err, user) {
//         if (!user) {
//             return next(new Error('Could not load the user.'));
//         } else {
//             user.user = req.body.user;

//             user.save().then(user => {
//                 res.json('Update completed.');
//             })

//             .catch(err => {
//                 res.status(400).send('Unable to update the user.');
//             });
//         }
//     });
// });

// appRouter.route('/delete/:id').get(function(req, res) {
//     User.findByIdAndRemove({ _id: req.params.id },
//         function(err, user) {
//             if (err) {
//                 res.json(err);
//             } else {
//                 res.json('Successfully removed the user.');
//             }
//         });
// });

module.exports = appRouter;