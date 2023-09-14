import { Route, Routes } from "react-router-dom";
import React from "react";

import Persistent from "./routes/persistent/persistent.component";
import Home from "./routes/home/home.component";
import Projects from "./routes/projects/projects.component";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Persistent />} >
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />} />
            </Route>
        </Routes>
    )
}

export default App;