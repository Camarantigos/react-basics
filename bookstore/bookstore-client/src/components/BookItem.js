import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultBookImg from "../images/logo.png";

const BookItem = ({
    _id,
    date,
    title,
    description,
    category,
    authorNames,
    publisher,
    year,
    numberOfPages,
    isbn10,
    isbn13,
    removeBook,
    isCorrectUser,
}) => (
    <li className="flex-list-group-item">
        <img
            className="book-image"
            src={DefaultBookImg}
            alt={title}
            height="150"
            width="150"
        />

        <div className="book-area">
            {/* TODO Dynamic */}
            <Link to={`/api/book/1`}>@{title}&nbsp;</Link>
            <span className="text-muted">
                <Moment className="text-muted" format="DD MMM YYYY">
                    {date}
                </Moment>
            </span>
            {/* <div>
                <p>{description}</p>
            </div>
            <div>{category}</div>
            <div>{authorNames}</div>
            <div>{publisher}</div>
            <div>{year}</div>
            <div>{numberOfPages}</div>
            <div>{isbn10}</div>
            <div>{isbn13}</div> */}

            {isCorrectUser && (
                <a onClick={removeBook} className="btn btn-danger">
                    Remove Book
                </a>
            )}
        </div>
    </li>
);

export default BookItem;
