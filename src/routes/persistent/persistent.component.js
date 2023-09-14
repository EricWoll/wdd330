import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";

import Navigation from "../../components/navigation/navigation.component";
import Header from "../../components/header/Header.component";

import "./persistentStylesFolder/persistent.styles.small.css";

function Persistent() {

    const [hamburgerMenu, sethamburgerMenu] = useState({
        "menueIsVisible": false,
        "burgerIconVisible": true
    });

    const handleMenueVisibility = () => {
        sethamburgerMenu({
            ...hamburgerMenu,
            "menueIsVisible": !hamburgerMenu.menueIsVisible,
        });
    }

    return (
        <>
            <div className="persistent">
                <Header hamburgerMenu={hamburgerMenu} handleMenueClick={handleMenueVisibility}/>
                <Navigation hamburgerMenu={hamburgerMenu} handleLinkClick={handleMenueVisibility}/>
            </div>
            <Outlet />
        </>
    )
}

export default Persistent;