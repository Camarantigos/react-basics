import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/logo.png";

const MessageItem = ({
    date,
    profileImageUrl,
    text,
    username,
    removeMessage,
    isCorrectUser,
}) => (
    <li className="list-group-item">
        {/* <img
            className="message-image"
            src={profileImageUrl || DefaultProfileImg}
            alt={username}
            height="100"
            width="100"
        /> */}
        <i class="fa fa-user"></i>
        <div className="message-area">
            <Link to="/">@{username} &nbsp;</Link>
            <span className="text-muted">
                <Moment className="text-muted" format="DD MMM YYYY">
                    {date}
                </Moment>
            </span>
            <div>
                <p>{text}</p>
            </div>
            {isCorrectUser && (
                <a onClick={removeMessage} className="btn btn-danger">
                    Delete
                </a>
            )}
        </div>
    </li>
);

export default MessageItem;
