import React from 'react';
import NavBar from '../components/nav';
import irisChangSha from '../data/IrisChangSha.jpg';

export default function About() {
    return (
        <>
            <NavBar />
            <div class='page-body'>
                <div id="about_me">
                    <br></br>
                    <p>I am a rising senior at UMass Amherst. I major in Computer Science and Music Theory. In my free time I go to the gym, play basketball and sleep.</p>
                </div>
                <br></br>
                <div>
                    <img src={irisChangSha} style={{height: "500px"}} />
                </div>
            </div>
        </>
    )
}