const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Scheema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileImage: {
        type: String
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;