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

    handleNewBook = e => {
        e.preventDefault();
        this.props.postNewBook(this.state.book);
        this.setState({
            title: "",
            description: "",
            category: "",
            authorNames: "",
            publisher: "",
            numberOfPages: "",
            year: "",
            isbn10: "",
            isbn13: "",
        });
        this.props.history.push("/");
    };
    render() {
        return (
            <div>
                <h3 className="form-header">Add new Book</h3>
                <form id="book-form" onSubmit={this.handleNewBook}>
                    {this.props.errors.message && (
                        <div className="alert alert-danger">
                            {this.props.errors.message}
                        </div>
                    )}
                    <div>
                        <div className="row">
                            <div className="column">
                                <p>
                                    <label htmlFor="title">Title: </label>
                                    <input
                                        name="title"
                                        type="text"
                                        className=""
                                        value={this.state.title}
                                        onChange={e =>
                                            this.setState({
                                                title: e.target.value,
                                            })
                                        }
                                    />
                                </p>
                                <p>
                                    <label htmlFor="description">
                                        Description
                                    </label>
                                    <input
                                        id="description"
                                        type="text"
                                        className=""
                                        name="description"
                                        value={this.state.description}
                                        onChange={e =>
                                            this.setState({
                                                description: e.target.value,
                                            })
                                        }
                                    />
                                </p>
                                <p>
                                    <label htmlFor="category">Categories</label>
                                    <input
                                        id="category"
                                        type="text"
                                        multiple
                                        className=""
                                        name="category"
                                        value={this.state.category}
                                        onChange={e =>
                                            this.setState({
                                                category: e.target.value,
                                            })
                                        }
                                    />
                                </p>
                                <p>
                                    <label htmlFor="authorName">
                                        Author Name
                                    </label>
                                    <input
                                        id="authorName"
                                        type="text"
                                        className=""
                                        name="authorName"
                                        value={this.state.authorName}
                                        onChange={e =>
                                            this.setState({
                                                authorName: e.target.value,
                                            })
                                        }
                                    />
                                </p>
                                <p>
                                    <label htmlFor="publisher">Publisher</label>
                                    <input
                                        id="publisher"
                                        type="text"
                                        className=""
                                        name="publisher"
                                        value={this.state.publisher}
                                        onChange={e =>
                                            this.setState({
                                                publisher: e.target.value,
                                            })
                                        }
                                    />
                                </p>
                                <p>
                                    <label htmlFor="year">Year</label>
                                    <input
                                        id="year"
                                        type="date"
                                        className=""
                                        name="year"
                                        value={this.state.year}
                                        onChange={e =>
                                            this.setState({
                                                year: e.target.value,
                                            })
                                        }
                                    />
                                </p>
                                <p>
                                    <label htmlFor="numberOfPages">
                                        Page Numbers
                                    </label>
                                    <input
                                        id="numberOfPages"
                                        type="number"
                                        className=""
                                        name="numberOfPages"
                                        value={this.state.numberOfPages}
                                        onChange={e =>
                                            this.setState({
                                                numberOfPages: e.target.value,
                                            })
                                        }
                                    />
                                </p>
                            </div>

                            <div className="column">
                                <p>
                                    <label htmlFor="image"></label>
                                    <input
                                        id="image"
                                        type="text"
                                        className=""
                                        // value={this.state.image}
                                        name="image"
                                        placeholder="import image .jpg .png .gif"
                                        // onChange={e => this.handleNewBook}
                                    />
                                </p>
                                <p>
                                    <label htmlFor="options">Options</label>
                                    <input
                                        id="options"
                                        type="text"
                                        className=""
                                        // value={this.state.options}
                                        name="options"
                                        // onChange={e => this.handleNewBook}
                                    />
                                </p>
                                <p>
                                    <label htmlFor="rating">Rating</label>
                                    <input
                                        id="rating"
                                        type="number"
                                        max="5"
                                        min="1"
                                        className=""
                                        name="rating"
                                        // value={this.state.rating}
                                        // onChange={e => this.setState({ rating: e.target.value })}
                                    />
                                </p>
                                <p>
                                    <label htmlFor="isbn10">ISBN-10</label>
                                    <input
                                        id="isbn10"
                                        type="text"
                                        className=""
                                        name="isbn10"
                                        value={this.state.isbn10}
                                        onChange={e =>
                                            this.setState({
                                                isbn10: e.target.value,
                                            })
                                        }
                                    />
                                </p>
                                <p>
                                    <label htmlFor="isbn13">ISBN-13</label>
                                    <input
                                        id="isbn13"
                                        type="text"
                                        className=""
                                        name="isbn13"
                                        value={this.state.isbn13}
                                        onChange={e =>
                                            this.setState({
                                                isbn13: e.target.value,
                                            })
                                        }
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
                <button form="book-form" type="submit" className="save-button">
                    Save
                </button>
                <div className="add-another-controller">
                    <button type="submit" className="add-another-book">
                        <i class="fa fa-plus"></i>
                    </button>
                    <p className="add-another-book-text">Add another book</p>
                    <p className="add-another-book-text text-muted">
                        Out Of Order
                    </p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { errors: state.errors };
}

export default connect(mapStateToProps, { postNewBook })(BookForm);
