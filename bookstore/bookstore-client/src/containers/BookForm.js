import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewBook } from "../store/actions/books";

class BookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            category: "",
            authorNames: "",
            publisher: "",
            numberOfPages: null,
            year: "",
            isbn13: "",
            isbn10: "",
        };
    }
    // bookSubmitHandler = event => {
    //     event.preventDefault();
    // let title = this.state.title;
    // if (title.length > 120) {
    //     alert("Title can't be more than 120 characters long");
    // }
    // };
    handleNewBook = event => {
        event.preventDefault();
        let name = event.target.name;
        let value = event.target.value;
        this.props.postNewBook(this.state.book);
        this.setState({ [name]: value });
        this.props.history.push("/");
    };
    render() {
        return (
            <form onSubmit={this.handleNewBook}>
                {this.props.errors.book && (
                    <div className="alert alert-danger">
                        {this.props.errors.book}
                    </div>
                )}
                <div>
                    <label htmlFor="title">Title: </label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        className="form-control"
                        value={this.state.value}
                        onChange={e => this.handleNewBook}
                    />
                    <label htmlFor="description">Description</label>
                    <input
                        id="description"
                        type="text"
                        className="form-control"
                        name="description"
                        value={this.state.value}
                        onChange={e => this.handleNewBook}
                    />
                    <label htmlFor="category">Categories</label>
                    <input
                        id="category"
                        type="text"
                        multiple
                        className="form-control"
                        name="category"
                        value={this.state.value}
                        onChange={e => this.handleNewBook}
                    />
                    <label htmlFor="authorName">Author Name</label>
                    <input
                        id="authorName"
                        type="text"
                        className="form-control"
                        name="authorName"
                        value={this.state.value}
                        onChange={e => this.handleNewBook}
                    />
                    <label htmlFor="publisher">Publisher</label>
                    <input
                        id="publisher"
                        type="text"
                        className="form-control"
                        name="publisher"
                        value={this.state.value}
                        onChange={e => this.handleNewBook}
                    />
                    <label htmlFor="year">Year</label>
                    <input
                        id="year"
                        type="date"
                        className="form-control"
                        name="year"
                        value={this.state.value}
                        onChange={e => this.handleNewBook}
                    />
                    <label htmlFor="numberOfPages">Page Numbers</label>
                    <input
                        id="numberOfPages"
                        type="number"
                        className="form-control"
                        name="numberOfPages"
                        value={this.state.value}
                        onChange={e => this.handleNewBook}
                    />

                    <label htmlFor="rating">Rating</label>
                    <input
                        id="rating"
                        type="number"
                        max="5"
                        min="1"
                        className="form-control"
                        name="rating"
                        value={this.state.value}
                        onChange={e => this.handleNewBook}
                    />
                    <label htmlFor="isbn10">ISBN-10</label>
                    <input
                        id="isbn10"
                        type="text"
                        className="form-control"
                        name="isbn10"
                        value={this.state.value}
                        onChange={e => this.handleNewBook}
                    />
                    <label htmlFor="isbn13">ISBN-13</label>
                    <input
                        id="isbn13"
                        type="text"
                        className="form-control"
                        name="isbn13"
                        value={this.state.value}
                        onChange={e => this.handleNewBook}
                    />
                    <label htmlFor="image">Image</label>
                    <input
                        id="image"
                        type="text"
                        className="form-control"
                        // value={this.state.image}
                        name="image"
                        onChange={e => this.handleNewBook}
                    />
                    <button
                        type="submit"
                        className="bnt bnt-success pull-right">
                        Save
                    </button>
                    {/* <button
                        type="submit"
                        className="bnt bnt-success pull-right">
                        add another book
                    </button> */}
                </div>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return { errors: state.errors };
}

export default connect(mapStateToProps, { postNewBook })(BookForm);
