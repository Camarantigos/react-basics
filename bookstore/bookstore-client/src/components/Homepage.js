import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => (
    <div className="home-hero text-light">
        <h1>Welcome to bookstore</h1>
        <h4>Please Sign Up if you are new here</h4>
        <Link to="/signup" className="btn btn-primary">
            Sign Up Here
        </Link>
    </div>
);

export default Homepage;
