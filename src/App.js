import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import React from "react";

import Persistent from "./routes/persistent/persistent.component";
import Home from "./routes/home/home.component";
import Projects from "./routes/projects/projects.component";


const router = createBrowserRouter([
    {
        element: <Persistent />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/projects",
                element: <Projects />
            },
        ]
    }
])


function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App;