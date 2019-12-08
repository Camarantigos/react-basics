require("dotenv").config();
const jwt = require("jsonwebtoken");

// check if user is loged in
exports.loginRequired = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
            if (decoded) {
                return next();
            } else {
                return next({
                    status: 401,
                    message: "Stop trying to hack this... or just sign in... pretty please..."
                });
            }
        });
    } catch (err) {
        return next({
            status: 401,
            message: "Stop trying to hack this... or just sign in... pretty please..."
        });
    }
};
// check if this IS the correct user
//  /api/users/correctIDofUSER/messages
exports.ensureCorrectUser = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
            if (decoded && decoded.id === req.params.id) {
                return next();
            } else {
                return next({
                    status: 401,
                    message: "You are not authorized to do this"
                });
            }
        });
    } catch (err) {

    }
};