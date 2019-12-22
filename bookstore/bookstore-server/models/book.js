const mongoose = require("mongoose");
const User = require("./user");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 120,
        match: /^[ A-Za-z0-9@”#&*!]*$/,
    },
    description: {
        type: String,
        maxlength: 512,
        required: true,
    },
    category: [
        {
            type: String,
            required: true,
        },
    ],
    authorNames: [
        {
            type: String,
            required: true,
            // console.log(typeof req.body.authorNames)
        },
    ],
    publisher: {
        type: String,
        maxlength: 60,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    numberOfPages: {
        type: Number,
        required: true,
        max: 9999,
    },
    isbn10: {
        type: String,
        required: true,
        maxlength: 10,
    },
    isbn13: {
        type: String,
        required: true,
        maxlength: 13,
    },
    user: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
});
bookSchema.pre("remove", async function(next) {
    try {
        //find user
        let user = await User.findById(this.user);
        //remove id of book
        user.books.remove(this.id);
        //save user
        await user.save();
        //return next
        return next();
    } catch (err) {
        return next(err);
    }
});
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
