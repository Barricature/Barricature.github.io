import React from "react";
import NavBar from '../components/nav';
import CourseBlock from '../components/course';

export default function Home() {
    return (
        <>
            <NavBar />
            <CourseBlock />
            <div id="about_me">
                <p>I am a rising senior at UMass Amherst. I major in Computer Science and Music Theory. In my free time I go to the gym, play basketball and sleep.</p>
            </div>
        </>
    )
}