import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import Logo from "../images/logo.png";

class Navbar extends Component {
    logout = e => {
        e.preventDefault();
        this.props.logout();
    };
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark ">
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/">
                                Check Books
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Create Book
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mx-auto order-0">
                    <Link to="/" className="navbar-brand mx-auto">
                        <img src={Logo} alt="Bookstore Home" />
                        BookStore
                        <img src={Logo} alt="Bookstore Home" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target=".dual-collapse2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    {this.props.currentUser.isAuthenticated ? (
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-link">
                                <Link
                                    className="nav-link"
                                    to={`/users/${this.props.currentUser.user.id}/messages/new`}>
                                    New Message
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link
                                    className="nav-link"
                                    onClick={this.logout}>
                                    Log Out
                                </Link>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">
                                    Sign Up
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signin">
                                    Sign In
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
    };
}

export default connect(mapStateToProps, { logout })(Navbar);
