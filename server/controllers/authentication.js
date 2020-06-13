const User = require('../models/user');

function signup(req, res, next) {

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email }, function (err, existingUser) {
        if (err) {
            return next(err);
        }
        if (existingUser) {
            return res.status(422).send({
                error: 'Email is in use'
            });
        }

        const user = new User({
            email: email,
            password: password
        });

        user.save(function (err) {
            if (err) { return next(err); }
            res.json(user);
        });
    });

}


function logIn(req, res, next) {
    const email = req.body.email;
    User.findOne({ email: email }, function (err, existingUser) {
        if (err) {
            return next(err);
        }
        if (existingUser) {
            return res.status(422).send({
                user: existingUser
            });
        } else {
            return res.status(422).send({
                 user: null
            });
        }
    });
}

module.exports = { signup, logIn };



