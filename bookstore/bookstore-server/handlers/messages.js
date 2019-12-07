const bd = require("../models");

// path for message = /api/users/:id/messages
exports.createMessage = async function (req, res, next) {
    try {
        let message = await db.Message.create({
            text: req.body.text,
            user: req.params.id
        });
        let foundUser = await db.User.findById(req.params.id);
        foundUser.messages.push(message.id);
        await foundUser.save();
        let foundMessage = await db.Message.findById(message._id).populate("user", {
            username: true,
            profileImageUrl: true
        });
    } catch (err) {

    }
};

exports.getMessage = async function (req, res, next) {

};

exports.deleteMessage = async function (req, res, next) {

};