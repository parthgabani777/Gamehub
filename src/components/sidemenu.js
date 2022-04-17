import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/sidebar.css";

function Sidemenu() {
    return (
        <aside className="sidebar text-s">
            <NavLink to="/homepage" activeclassname="active" className="btn">
                <i className="fas fa-home"></i>
                Home
            </NavLink>
            <NavLink to="/videos" activeclassname="active" className="btn">
                <i className="fas fa-compass"></i>
                Explore
            </NavLink>
            <NavLink to="/playlist" activeclassname="active" className="btn">
                <i className="fas fa-list"></i>
                Playlist
            </NavLink>
            <NavLink to="/likes" activeclassname="active" className="btn">
                <i className="fas fa-thumbs-up"></i>
                Likes
            </NavLink>
            <NavLink to="/watchlater" activeclassname="active" className="btn">
                <i className="fas fa-clock"></i>
                Watch Later
            </NavLink>
            <NavLink to="/history" activeclassname="active" className="btn">
                <i className="fas fa-history"></i>
                History
            </NavLink>
        </aside>
    );
}

export { Sidemenu };
