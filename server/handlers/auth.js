const jwt = require('jsonwebtoken');

const db = require('../models');

exports.register = async (req, res, next) => {
    try {
        const user = await db.User.create(req.body);
        const { id, username } = user;

        const token = jwt.sign({id, username}, process.env.SECRET);

        res.status(201).json({ id, username, token });
    } catch(err) {
        if (err.code === 11000) {
            err.message = "That username is already taken";
        }
        next(err);
    }
};

exports.login = async (req, res, next) => {
    try {
        console.log("user ");
        const user = await db.User.findOne({ username: req.body.username });
        console.log(user);
        const { id, username } = user;
        const valid = await user.comparePassword(req.body.password);

        if (valid) {
            const token = jwt.sign({id, username}, process.env.SECRET);

            res.json({ id, username, token });
        } else {
            throw new Error();
        }
    } catch(error) {
        error.message = 'Invalid Username/Password';
        return next(error);
    }
};
