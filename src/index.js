import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './routes/home';
import Projects from './routes/projects';
import Courses from './routes/courses';
import About from './routes/about';
import Playground from './routes/playground';

import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "about",
        element: <About />
    },
    {
        path: "my_projects",
        element: <Projects />
    },
    {
        path: "courses",
        element: <Courses />
    },
    {
        path: "playground",
        element: <Playground />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);