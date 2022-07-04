import { React, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/header.css";
import { useNavigate } from "react-router";
import { useAuth } from "../context/auth-context";
import { Sidemenu } from "./sidemenu";
import { NavLinks } from "./nav-link";
import { useVideos } from "../context/video-context";
import { useClickOutside } from "../hooks/useClickOutside";

function Header() {
    const { auth, signoutHandler, removeAuthTokens } = useAuth();
    const { videos } = useVideos();
    const navigation = useNavigate();

    const [showNavItems, setShowNavItems] = useState(false);

    // For search query
    const [search, setSearch] = useState("");
    const onChangeHandler = (e) => {
        setSearch(e.target.value);
    };
    const debounce = (cb, delay = 300) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => cb(...args), delay);
        };
    };
    const debouncedOnChangeHandler = debounce(onChangeHandler, 300);

    // For filtering the products based on search query
    const filteredVideos = videos.filter((video) => {
        const result = video.title.toLowerCase().search(search.toLowerCase());
        return result === -1 ? false : true;
    });

    // For showing search results
    const [showSearchResults, setShowSearchResults] = useState(false);
    const ref = useRef();
    useClickOutside(ref, () => {
        setShowSearchResults(false);
    });

    const searchRef = useRef();

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

                <div className="nav-search" ref={ref}>
                    <input
                        type="text"
                        className="search-box text-s"
                        placeholder="Search..."
                        onChange={debouncedOnChangeHandler}
                        ref={searchRef}
                        onClick={() => setShowSearchResults(true)}
                    />
                    <button className="btn search-btn">
                        <i className="fa fa-search"></i>
                    </button>
                    {showSearchResults && search !== "" && (
                        <div
                            className="suggestion"
                            onClick={() => {
                                setShowSearchResults(false);
                                setSearch("");
                                searchRef.current.value = "";
                            }}
                        >
                            {filteredVideos.length !== 0 ? (
                                filteredVideos.map((video) => (
                                    <Link
                                        to="/singlevideo"
                                        state={{ video }}
                                        key={video._id}
                                    >
                                        {video.title}
                                    </Link>
                                ))
                            ) : (
                                <div>No results found</div>
                            )}
                        </div>
                    )}
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
