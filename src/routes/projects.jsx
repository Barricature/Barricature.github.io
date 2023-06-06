import React from "react";
import NavBar from "../components/nav";

export default function Projects() {
    return (
        <>
            <NavBar />
            <ol>
                <br></br>
                <li>
                    <a href='https://github.com/Mapic-Team/WebApp'>Mapic</a>
                    <p> 
                        Mapic is a a photo-sharing platform that allows users to upload and geotag their travel photos on a map. 
                        Users can upload their photos and tag them with a location, which is displayed on an interactive map that other users can explore.
                    </p>
                </li>
                <li>
                    <a href='https://github.com/orgs/HackF22/repositories'>Course Planner</a>
                    <p>
                        Course Planner is a project that I initiated in Sophmore year. It provides visual demonstration to the course selection process,
                        and allows students to check for prerequisites before choosing their courses.
                    </p>
                </li>
            </ol>
        </>
    )
}