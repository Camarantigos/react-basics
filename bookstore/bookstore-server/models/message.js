const mongoose = require("mongoose");
const User = require("./user");

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true,
        maxlength: 200
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

messageSchema.pre('remove', async function (next) {
    try {
        //find user
        let user = await User.findById(this.user);
        //remove id of message
        user.messages.remove(this.id);
        //save user
        await user.save();
        //return next
        return next();
    } catch (err) {
        return next(err);
    }
});
const Message = mongoose.model("Message", messageSchema);

module.exports = Message;