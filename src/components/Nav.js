import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <>
            <ul className="menu-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/news">News</Link></li>
            </ul>
        </>
    );
}
export default Nav;