import React from "react";
import { Link } from "react-router-dom";
import MessageTimeline from "./MessageTimeline";

const Homepage = ({ currentUser }) => {
    if (!currentUser.isAuthenticated) {
        return (
            <div className="home-hero text-light">
                <h1>Welcome to Bookstore</h1>
                <h4>Please Sign Up if you are new here</h4>
                <Link to="/signup" className="btn btn-primary">
                    Sign Up Here
                </Link>
            </div>
        );
    }
    return (
        <div className="text-light">
            <MessageTimeline
                profileImageUrl={currentUser.user.profileImageUrl}
                username={currentUser.user.username}
            />
        </div>
    );
};
export default Homepage;
