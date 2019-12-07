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

userSchema.pre("save", async function (next) {
    try {
        if (!this.isModified("password")) {
            return next();
        }
        // Hash diff each time and wait until it finishes
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        // then save it
        return next();
    } catch (err) {
        return next(err);
    }
});

// check is correct password is given
userSchema.method.comparePassword = async function (candidatePassword, next) {
    try {
        let isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (err) {
        return next(err);
    }
}

const User = mongoose.model("User", userSchema);

module.exports = User;