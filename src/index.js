import ReactDOM from "react-dom/client";
import React from "react";

// Might need to use HashRouter instead of BrowserRouter for gh-pages


import App from "./App";

import "./index.styles.css";

/*
UNDO THE COMMENTS AROUND 'BROWSERROUTER' WHEN DEPLOYING TO GITHUB
- BrowserRouter does the routering while HashRouter helps with linking to a "page"
*/

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);