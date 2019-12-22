const db = require("../models");

exports.createBook = async function(req, res, next) {
    try {
        let book = await db.Book.create({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            authorNames: req.body.authorNames,
            publisher: req.body.publisher,
            year: req.body.year,
            numberOfPages: req.body.numberOfPages,
            isbn10: req.body.isbn10,
            isbn13: req.body.isbn13,
            user: req.params.id,
        });
        let foundUser = await db.User.findById(req.params.id);
        foundUser.books.push(book.id);
        await foundUser.save();
        let foundBook = await db.Book.findById(book._id).populate("user", {
            username: true,
            profileImageUrl: true,
        });
        return res.status(200).json(foundBook);
    } catch (err) {
        return next(err);
    }
};

exports.getBook = async function(req, res, next) {
    try {
        let book = await db.Book.find(req.params.book_id);
        return res.status(200).json(book);
    } catch (err) {
        return next(err);
    }
};

exports.deleteBook = async function(req, res, next) {
    try {
        let foundBook = await db.Book.findById(req.params.book_id);
        await foundBook.remove();
        return res.status(200).json(foundBook);
    } catch (err) {
        return next(err);
    }
};
