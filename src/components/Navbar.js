import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    
return (
    <div className="fixed-top">
        <header className="header navbar-dark bg-dark">
            <div className="container px-0 px-lg-3">
            <nav className="navbar navbar-expand-lg py-3 px-lg-0  ">
                <div className="container">
                    <Link className="navbar-brand" to="index.html">
                    <span className="font-weight-bold text-uppercase text-success gideon">
                        Dusstech  <span className="text-primary"> Brands</span>
                    </span>
                    </Link>
                    <button
                    className="navbar-toggler navbar-toggler-right"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                    >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        <Link className="nav-link active" to="/">
                            Home
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/shop">
                            Shop
                        </Link>
                        </li>

                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <Link className="nav-link" to="#">
                            {" "}
                            <i className="fas fa-dolly-flatbed mr-1 text-gray"></i>Cart
                            <small className="text-gray">(2)</small>
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="#">
                            {" "}
                            <i className="fa fa-heart mr-1"></i>
                            <small className="text-gray"> (0)</small>
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            {" "}
                            <i className="fas fa-user-alt mr-1 text-gray"></i>Login
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            </div>
        </header>
        </div>
    );
};

export default Navbar;
