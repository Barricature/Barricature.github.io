import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './routes/home';
import Projects from './routes/projects';

import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "my_projects",
        element: <Projects />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);