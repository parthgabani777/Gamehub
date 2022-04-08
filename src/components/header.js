import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import { useNavigate } from "react-router";
import { useAuth } from "../context/auth-context";

function Header() {
    const { auth, signoutHandler, removeAuthTokens } = useAuth();
    const navigation = useNavigate();

    return (
        <header>
            <nav className="navbar bg-primary">
                <div className="nav-title">
                    <h1 className="text-xl">
                        <a to="homepage" className="btn">
                            GameHub
                        </a>
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

                <ul className="nav-item-group text-s">
                    <li className="nav-item">
                        {auth.isAuthorized ? (
                            <a
                                className="nav-link btn"
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

                <div className="humburger text-l">
                    <i className="fas fa-bars btn"></i>
                </div>
            </nav>
        </header>
    );
}

export { Header };
