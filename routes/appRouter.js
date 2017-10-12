const express = require('express');
const app = express();
const appRouter = express.Router();

const User = require('../models/User');

appRouter.route('/add/post').post(function(req, res) {
    const user = new User(req.body);
    user.save()

    .then(user => {
        res.json('User added.');
    })

    .catch(err => {
        res.status(400).send('Unable to save user.');
    });
});

appRouter.route('/').get(function(req, res) {
    User.find(function(err, usrs) {
        if(err) {
            console.log(err);
        } else {
            res.json(usrs);
        }
    });
});

appRouter.route('/edit/:id').get(function(req, res) {
    const id = req.params.id;

    User.findById(id, function(err, user) {
        res.json(user);
    });
});

appRouter.route('/update/:id').post(function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (!user) {
            return next(new Error('Could not load the user.'));
        } else {
            user.user = req.body.user;

            user.save().then(user => {
                res.json('Update completed.');
            })

            .catch(err => {
                res.status(400).send('Unable to update the user.');
            });
        }
    });
});

appRouter.route('/delete/:id').get(function(req, res) {
    User.findByIdAndRemove({ _id: req.params.id },
        function(err, user) {
            if (err) {
                res.json(err);
            } else {
                res.json('Successfully removed the user.');
            }
        });
});

module.exports = appRouter;