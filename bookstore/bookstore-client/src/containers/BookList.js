import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBooks, removeBook } from "../store/actions/books";
import BookItem from "../components/BookItem";

class BookList extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }
    render() {
        const { books, removeBook, currentUser } = this.props;
        let bookList = books.map(b => (
            <BookItem
                key={b._id}
                date={b.createdAt}
                title={b.title}
                description={b.user.description}
                category={b.user.category}
                authorNames={b.user.authorNames}
                publisher={b.user.publisher}
                year={b.user.year}
                numberOfPages={b.user.numberOfPages}
                isbn10={b.user.isbn10}
                isbn13={b.user.isbn13}
                removeBook={removeBook.bind(this, b.user._id, b._id)}
                isCorrectUser={currentUser === b.user._id}
            />
        ));
        return (
            <div className="row col-sm-8">
                <div className="offset-1 col-sm-10">
                    <ul id="books" className="list-group">
                        {bookList}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books,
        currentUser: state.currentUser.user.id,
    };
}

export default connect(mapStateToProps, {
    fetchBooks,
    removeBook,
})(BookList);
