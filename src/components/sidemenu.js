import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/sidebar.css";

function Sidemenu() {
    return (
        <aside className="sidebar text-s">
            <NavLink to="/homepage" activeClassName="active" className="btn">
                Home
            </NavLink>
            <NavLink to="/videos" activeClassName="active" className="btn">
                Explore
            </NavLink>
            <NavLink to="/playlist" activeClassName="active" className="btn">
                Playlist
            </NavLink>
            <NavLink to="/watchlater" activeClassName="active" className="btn">
                Watch Later
            </NavLink>
            <NavLink to="/history" activeClassName="active" className="btn">
                History
            </NavLink>
        </aside>
    );
}

export { Sidemenu };
