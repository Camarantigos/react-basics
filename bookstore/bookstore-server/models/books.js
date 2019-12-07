const mongoose = require("mongoose");

const bookSchema = new mongoose.Scheema({
    title: {
        type: String,
        required: true,
        match: /^[ A-Za-z0-9@”#&*!]*$/
    },
    description: {
        type: String,
        required: true
    },
    category: [{
        type: String,
        required: true
    }],
    authorNames: [{
        type: String,
        required: true
        // console.log(typeof req.body.authorNames)
    }],
    publisher: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    numberOfPages: {
        type: Number,
        required: true,
        max: 9999
    },
    isbn10: {
        type: String,
        required: true,
        maxlength: 10
    },
    isbn13: {
        type: String,
        required: true,
        maxlength: 13
    }
});

const Book = mongoose.model("Books", bookSchema);

module.exports = Book;