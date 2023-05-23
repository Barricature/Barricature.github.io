import React from 'react';
import './nav.css'

const navBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="./index.html">Home</a>
                </li>
                <li>
                    <a href='./About_Me/about.html'>About Me</a>
                </li>
                <li>
                    <a href='./My_Projects/project.html'>My Projects</a>
                </li>
            </ul>
        </nav>
    )
}

export default navBar;