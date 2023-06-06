import React from 'react';
import './nav.css'
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={`/`}>Home</Link>
                </li>
                <li>
                    <Link to={`/about`}>About Me</Link>
                </li>
                <li>
                    <Link to={`/courses`}>Courses</Link>
                </li>
                <li>
                    <Link to={`/my_projects`}>My Projects</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;