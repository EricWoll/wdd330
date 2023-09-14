import React from "react";
import { Link } from "react-router-dom";

import "./navigationStylesFolder/navigation.styles.small.css";

function Navigation( { hamburgerMenu, handleLinkClick } ) {
    const navIsVisible = hamburgerMenu.menueIsVisible;
    return (
        <>
            { navIsVisible &&
                <div className="nav">
                    <Link className="nav-link" to="/" onClick={handleLinkClick}>Home</Link>
                    <Link className="nav-link" to="/projects" onClick={handleLinkClick}>Projects</Link>
                </div>
            }
        </>
    )
}

export default Navigation;