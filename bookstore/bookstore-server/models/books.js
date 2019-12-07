const mongoose = require("mongoose");

const bookSchema = new mongoose.Scheema({
    title: {
        type: string,
        required: true,
        match: /^[ A-Za-z0-9@”#&*!]*$/
    },
    description: {
        type: string,
        required: true
    },
    category: [{
        type: string,
        required: true
    }],
    authorNames: [{
        type: String,
        required: true
        // console.log(typeof req.body.authorNames)
    }],
    publisher: {
        type: string,
        required: true
    },
    year: {
        type: string,
        required: true
    },
    numberOfPages: {
        type: number,
        required: true,
        max: 9999
    },
    isbn10: {
        type: string,
        required: true,
        maxlength: 10
    },
    isbn13: {
        type: string,
        required: true,
        maxlength: 13
    }
});

const User = mongoose.model("User", userSchema);