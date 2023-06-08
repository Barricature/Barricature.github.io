import React from "react";
import NavBar from '../components/nav';

export default function Home() {
    return (
        <>
            <NavBar />
            <div class='page-body'>
                <div>
                    <br></br>
                    <p>This page is an evolving product that grows with my coding skills</p>
                    <p>
                        In 
                        <a href='https://github.com/Barricature/Barricature.github.io/tree/9e00ef03cf405017857e23f9779c9223f989aff2'>2022</a>
                        It was written in pure html and css
                    </p>
                    <p>I have now updated the page to use <a href='https://github.com/Barricature/Barricature.github.io'>React</a></p>
                    <p>It is built with babel, webpack, gh-pages and react-router</p>
                </div>
            </div>
        </>
    )
}