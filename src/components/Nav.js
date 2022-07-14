import React, { useState } from "react";
import { Link } from "react-router-dom";
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Nav = (props) => {

    return(
        <header className={`App-header ${props.mode === true ? `dark-mode` : `light-mode`}`}>
            <ul className="menu-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/news">News</Link></li>
                <li>      
                    <Switch checked={props.mode} onChange={props.event} />
                </li>
            </ul>
        </header>
    );
}
export default Nav;