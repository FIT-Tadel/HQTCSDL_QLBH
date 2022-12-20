import React from "react";
import '../css/fonts/fontawesome-free-6.2.0/css/all.min.css'
import '../store/store.css'
import { Outlet, Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="header">
            <nav className="header__navbar">

                <ul className="header__navbar-list">
                    <li className="header__navbar-item header__navbar-item--place" >
                        <span className="header__navbar-title">WATCH US AT</span>
                        <a href="https://www.facebook.com/tranhongminhphuc.vn"  target="blank" className="header__navbar-icon-link">
                            <i className=" header__navbar--icon fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://www.facebook.com/tranhongminhphuc.vn" target="blank" className="header__navbar-icon-link">
                            <i className="header__navbar--icon fa-brands fa-instagram"></i>
                        </a>
                    </li>
                </ul>

                <ul className="header__navbar-list">
                    <button className="header__navbar-item header__navbar-item--strong btn--place">
                        <Link to="/" className="header__navbar-item-link">
                            <i className="header__navbar--icon fa-solid fa-right-from-bracket"></i>
                                Logout
                        </Link >
                    </button>
                </ul>
                
            </nav>

            <div className="header-with-search">
                <div className="header__search-logo">

                </div>

                <div className="header__search">
                    <input className="header__search-input" placeholder="Looking for somethings"></input>
                </div>

                <div className="header__cart">
                </div>
            </div>
            <Outlet />
        </div>
    );
}