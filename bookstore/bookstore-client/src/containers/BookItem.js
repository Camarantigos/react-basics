import React, { Component } from "react";
import { connect } from "react-redux";
// import { fetchBooks, removeBook } from "../store/actions/books";
import Moment from "react-moment";
import BookTimeline from "../components/BookTimeline";
import DefaultBookImg from "../images/logo.png";

class BookItem extends Component {
    constructor() {
        super();
    }
    state = {
        title: "Programming JavaScript Applications",
        date: "2014-07-01T00:00:00.000Z",
        authorNames: "Eric Elliott",
        publisher: "O'Reilly Media",
        numberOfPages: 254,
        category: "JavaScript",
        isbn13: "9781491950296",
        description:
            "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
    };
    render() {
        const {
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
        } = this.state;
        return (
            <div className="book-details">
                <div className="row">
                    <div className="column">
                        <img
                            className="book-details-image"
                            src={DefaultBookImg}
                            alt={title}
                            height="550"
                            width="400"
                            placeholder
                        />
                        <div>
                            <br />
                        </div>
                        <div>
                            <br />
                        </div>
                        <div>
                            <i class="fa fa-user"></i>
                            {authorNames}
                        </div>
                        <div>
                            <br />
                        </div>
                        <div>
                            <div class="star-rating">
                                <span
                                    class="fa fa-star-o"
                                    data-rating="1"></span>
                                <span
                                    class="fa fa-star-o"
                                    data-rating="2"></span>
                                <span
                                    class="fa fa-star-o"
                                    data-rating="3"></span>
                                <span
                                    class="fa fa-star-o"
                                    data-rating="4"></span>
                                <span
                                    class="fa fa-star-o"
                                    data-rating="5"></span>
                                <input
                                    type="hidden"
                                    name="todorating"
                                    class="rating-value"
                                    value="0"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="book-details-area">
                            {/* TODO Dynamic */}
                            <h2>{title}&nbsp;</h2>
                            <div>
                                <p>{description}</p>
                            </div>
                            <div>
                                <button type="submit" className="fav-button">
                                    Favorite
                                </button>
                                <button type="submit" className="fav-button">
                                    Share
                                </button>
                            </div>
                            <div>
                                <br />
                            </div>
                            <div>Category: {category}</div>
                            <div>
                                Year:{" "}
                                <span className="text-muted">
                                    <Moment
                                        className="text-muted"
                                        format="YYYY">
                                        {date}
                                    </Moment>
                                </span>
                            </div>{" "}
                            <div>Number of Pages: {numberOfPages}</div>
                            <div>
                                <br />
                            </div>
                            <div>Publisher {publisher}</div>
                            <div>
                                <br />
                            </div>
                            <div>ISBN-10: {isbn10}</div>
                            <div>ISBN-13: {isbn13}</div>
                            <div>
                                <button type="submit" className="buy-button">
                                    BUY
                                </button>
                            </div>
                        </div>
                    </div>
                    {isCorrectUser && (
                        <a onClick={removeBook} className="btn btn-danger">
                            Remove Book
                        </a>
                    )}
                </div>
                <div className="row">
                    {/* TODO 1:after search create Search StandAlone comp  2:Slider style */}
                    <h2>Other Books you may like</h2>
                    <BookTimeline />
                </div>
            </div>
        );
    }
}

export default BookItem;
