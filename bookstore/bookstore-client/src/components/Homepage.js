import React from "react";
import { Link } from "react-router-dom";
import MessageTimeline from "./MessageTimeline";
import BookTimeline from "./BookTimeline";

const Homepage = ({ currentUser }) => {
    if (!currentUser.isAuthenticated) {
        return (
            <div className="home-hero">
                <h1>Welcome to Bookstore</h1>
                <h4>Please Sign Up if you are new here</h4>
                <Link to="/signup" className="btn btn-primary">
                    Sign Up Here
                </Link>
            </div>
        );
    }
    return (
        <div>
            {/* TODO Breadcrumbs */}
            <div className="flexcontainer">
                <BookTimeline />
            </div>
            <div className="">
                <MessageTimeline
                    profileImageUrl={currentUser.user.profileImageUrl}
                    username={currentUser.user.username}
                />
            </div>
        </div>
    );
};
export default Homepage;
