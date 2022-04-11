import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/sidebar.css";

function Sidemenu() {
    return (
        <aside className="sidebar text-s">
            <NavLink to="/homepage" activeclassname="active" className="btn">
                Home
            </NavLink>
            <NavLink to="/videos" activeclassname="active" className="btn">
                Explore
            </NavLink>
            <NavLink to="/playlist" activeclassname="active" className="btn">
                Playlist
            </NavLink>
            <NavLink to="/watchlater" activeclassname="active" className="btn">
                Watch Later
            </NavLink>
            <NavLink to="/history" activeclassname="active" className="btn">
                History
            </NavLink>
        </aside>
    );
}

export { Sidemenu };
