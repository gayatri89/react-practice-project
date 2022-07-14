import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
    return(
        <footer className={`App-footer ${props.mode === true ? `dark-mode` : `light-mode`} `}>
            <ul className="menu-nav">
                <li>Developed by <a href="https://www.linkedin.com/in/gayatri-rathva-72394734/" target="_blank"> Gayatri Rathva</a></li>
            </ul>
        </footer>
    );
}
export default Footer;