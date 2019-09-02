const User = require('../models/user.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.user_create = function (req, res) {
    let user = new user(
        {
           
            firstname: req.body.firstname,
		    lastname: req.body.lastname,
		    email: req.body.email,
		    password: req.body.password
    });

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('user Created successfully')
    })
};

exports.user_details = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};