import React from "react";
import NavBar from '../components/nav';

export default function Home() {
    return (
        <>
            <NavBar />
            <div class='page-body'>
                <div>
                    <br></br>
                    <p>This page is an evolving product that grows with my coding skills, it will hopefully become fully polished one day.</p>
                    <br></br>
                    <ul>
                        <li>
                            In the summer <a href='https://github.com/Barricature/Barricature.github.io/tree/9e00ef03cf405017857e23f9779c9223f989aff2'>2022</a>, I started learning Web Programming and wrote this page in pure HTML and CSS.
                        </li>
                        <li>
                            I took Web Programming in Spring 2023 and therefore imporved a lot on the matter. (See Projects/Mapic)
                        </li>
                        <li>
                            I decided to learn React after I realize how painful it is to write a large project without code modularity and reusability.
                        </li>
                        <li>
                            This page is now updated with <a href='https://github.com/Barricature/Barricature.github.io'>React</a>. 
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}