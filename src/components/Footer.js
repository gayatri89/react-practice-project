import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <header className="App-footer">
            <ul className="menu-nav">
                <li>Developed by <Link to="/"> Gayatri Rathva</Link></li>
            </ul>
        </header>
    );
}
export default Footer;