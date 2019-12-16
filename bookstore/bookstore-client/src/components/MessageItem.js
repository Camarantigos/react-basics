import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/logo.png";

const MessageItem = ({ date, profileImageUrl, text, username }) => (
    <li className="list-group-item">
        <img
            className="message-image"
            src={profileImageUrl || DefaultProfileImg}
            alt={username}
            height="100"
            width="100"
        />
        <div className="message-area text-white">
            <Link to="/">@{username} &nbsp;</Link>
            <span className="text-muted">
                <Moment className="text-muted" format="DD MM YYYY">
                    {date}
                </Moment>
            </span>
            <p className="text-white">{text}</p>
            <p class="text-primary">.text-primary</p>
            <p class="text-secondary">.text-secondary</p>
            <p class="text-success">.text-success</p>
            <p class="text-danger">.text-danger</p>
            <p class="text-warning">.text-warning</p>
            <p class="text-info">.text-info</p>
            <p class="text-light bg-dark">.text-light</p>
            <p class="text-dark">.text-dark</p>
            <p class="text-muted">.text-muted</p>
            <p class="text-white bg-dark">.text-white</p>
        </div>
    </li>
);

export default MessageItem;
