import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_BOOKS, REMOVE_BOOK } from "../actionTypes";

export const loadBooks = books => ({
    type: LOAD_BOOKS,
    books,
});

export const fetchBooks = () => {
    return dispatch => {
        return apiCall("get", "/api/books")
            .then(res => {
                dispatch(loadBooks(res));
            })
            .catch(err => {
                dispatch(addError(err.book));
            });
    };
};
// more than title?
export const postNewBook = (
    title,
    description,
    category,
    authorNames,
    publisher,
    year,
    numberOfPages,
    isbn13,
    isbn10
) => (dispatch, getState) => {
    let { currentUser } = getState();
    const id = currentUser.user.id;
    return apiCall("post", `/api/users/${id}/books`, {
        title,
        description,
        category,
        authorNames,
        publisher,
        year,
        numberOfPages,
        isbn13,
        isbn10,
    })
        .then(res => {})
        .catch(err => addError(err.book));
};

export const remove = id => ({
    type: REMOVE_BOOK,
    id,
});

export const removeBook = (user_id, book_id) => {
    return dispatch => {
        return apiCall("delete", `/api/users/${user_id}/books/${book_id}`)
            .then(() => dispatch(remove(book_id)))
            .catch(err => addError(err.book));
    };
};
