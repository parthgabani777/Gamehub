import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/sidebar.css";
import { NavLinks } from "./nav-link";

function Sidemenu() {
    return (
        <aside className="sidebar text-s">
            <NavLinks />
        </aside>
    );
}

export { Sidemenu };
