import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../images/logo.png";

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-md navbar-dark ">
                <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item ">
                            <Link className="nav-link" to="/">
                                Check Books
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/">
                                Create Book
                            </Link>
                        </li>
                    </ul>
                </div>
                <div class="mx-auto order-0">
                    <Link to="/" className="navbar-brand mx-auto">
                        <img src={Logo} alt="Bookstore Home" />
                        BookStore
                        <img src={Logo} alt="Bookstore Home" />
                    </Link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target=".dual-collapse2">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
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

export default connect(mapStateToProps, null)(Navbar);
