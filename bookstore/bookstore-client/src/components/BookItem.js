import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultBookImg from "../images/logo.png";

const BookItem = ({
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
    <li className="list-group-item">
        <img
            className="book-image"
            src={DefaultBookImg}
            alt={title}
            height="100"
            width="100"
        />

        <div className="book-area">
            <Link to="/">@{title} &nbsp;</Link>
            <span className="text-muted">
                <Moment className="text-muted" format="DD MMM YYYY">
                    {date}
                </Moment>
            </span>
            <div>a{description}</div>
            <div>s{category}</div>
            <div>d{authorNames}</div>
            <div>{publisher}</div>
            <div>{year}</div>
            <div>{numberOfPages}</div>
            <div>{isbn10}</div>
            <div>{isbn13}</div>
            <div>
                <p>{description}</p>
            </div>
            {isCorrectUser && (
                <a onClick={removeBook} className="btn btn-danger">
                    Remove Book
                </a>
            )}
        </div>
    </li>
);

export default BookItem;
