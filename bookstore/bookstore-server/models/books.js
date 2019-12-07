const mongoose = require("mongoose");

const bookSchema = new mongoose.Scheema({
    title: {
        type: String,
        required: true,
        maxlength: 120,
        match: /^[ A-Za-z0-9@”#&*!]*$/
    },
    description: {
        type: String,
        maxlength: 512,
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
        maxlength: 60,
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
    },
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    }]
});

const Book = mongoose.model("Books", bookSchema);

module.exports = Book;