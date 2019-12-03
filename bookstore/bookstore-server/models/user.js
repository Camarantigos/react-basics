const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Scheema({
    email: {
        type: string,
        required: true,
        unique: true
    },
    username: {
        type: string,
        required: true,
        unique: true
    },
    password: {
        type: string,
        required: true
    },
    profileImage: {
        type: String
    }
});

const User = mongoose.model("User", userSchema);