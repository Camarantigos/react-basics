import React from "react";
import DefaultProfileImg from "../images/logo.png";

const UserAside = ({ profileImageUrl, username }) => (
    <aside className="col-sm-2">
        <div className="panel panel-default">
            <div className="panel-body">
                {/* <img
                    height="200"
                    width="200"
                    className="img-thumbnail"
                    src={profileImageUrl || DefaultProfileImg}
                    alt={username}
                /> */}
            </div>
        </div>
    </aside>
);

export default UserAside;
