import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/header.css";
import { useNavigate } from "react-router";
import { useAuth } from "../context/auth-context";
import { Sidemenu } from "./sidemenu";
import { NavLinks } from "./nav-link";

function Header() {
    const { auth, signoutHandler, removeAuthTokens } = useAuth();
    const navigation = useNavigate();

    const [showNavItems, setShowNavItems] = useState(false);

    return (
        <header>
            <nav className="navbar bg-primary">
                <div className="nav-title">
                    <h1 className="text-xl">
                        <Link to="homepage" className="btn">
                            GameHub
                        </Link>
                    </h1>
                </div>

                <div className="nav-search">
                    <input
                        type="text"
                        className="search-box text-s"
                        placeholder="Search..."
                    />
                    <button className="btn search-btn">
                        <i className="fa fa-search"></i>
                    </button>
                </div>

                <div
                    className="humburger text-l"
                    onClick={() => {
                        setShowNavItems(!showNavItems);
                    }}
                >
                    <i className="fas fa-bars btn"></i>
                </div>

                <ul
                    className={`nav-item-group text-s ${
                        showNavItems
                            ? "nav-item-group-show"
                            : "nav-item-group-hide"
                    }`}
                >
                    <span className="nav-links">
                        <NavLinks />
                    </span>

                    <li
                        className={`nav-item ${
                            showNavItems
                                ? "nav-item-group-show"
                                : "nav-item-group-hide"
                        }`}
                    >
                        {auth.isAuthorized ? (
                            <a
                                className="nav-link btn login-btn-large"
                                onClick={() => {
                                    signoutHandler(
                                        removeAuthTokens,
                                        navigation
                                    );
                                }}
                            >
                                Logout
                            </a>
                        ) : (
                            <Link to="login" className="nav-link btn">
                                Login
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export { Header };
