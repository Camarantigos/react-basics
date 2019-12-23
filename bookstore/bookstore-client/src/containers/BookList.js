import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBooks, removeBook } from "../store/actions/books";
import BookItem from "../components/BookItem";

class BookList extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }
    // state = {
    //     filter: "",
    //     books: ""
    // };
    // handleChange = event => {
    //     this.setState({ filter: event.target.value });
    // };
    render() {
        const { books, removeBook, currentUser } = this.props;
        // const { filter, books } = this.state;
        // const lowercasedFilter = filter.toLowerCase();
        // const filteredData = books.filter(item  => {
        //     return Object.keys(item).some(key =>
        //         item[key].toLowerCase().includes(lowercasedFilter)
        //     );
        // });
        let bookList = books.map(b => (
            <BookItem
                key={b._id}
                date={b.createdAt}
                title={b.title}
                description={b.description}
                category={b.category}
                authorNames={b.authorNames}
                publisher={b.publisher}
                year={b.year}
                numberOfPages={b.numberOfPages}
                isbn10={b.isbn10}
                isbn13={b.isbn13}
                removeBook={removeBook.bind(this, b.user._id, b._id)}
                isCorrectUser={currentUser === b.user._id}
            />
        ));
        return (
            <div className="row col-lg-12 all-center">
                <h2>Search to find your new book</h2>
                <input
                    type="search"
                    id="search"
                    // value={filter}
                    onChange={this.handleChange}
                    class="form-control text-center text-muted"
                    placeholder="Search . . ."
                />
                {/* <div className="col-sm-4">
                    <p>Filters:</p>
                </div> */}
                <div className="col-lg-12">
                    <ul id="books" className="flexcontainer">
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
