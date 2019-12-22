const express = require("express");
const router = express.Router({
    mergeParams: true,
});

const { createBook, getBook, deleteBook } = require("../handlers/books");

router.route("/").post(createBook);

router
    .route("/:book_id")
    .get(getBook)
    .delete(deleteBook);

module.exports = router;
