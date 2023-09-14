import React from "react";

import "./headerStylesFolder/header.styles.small.css";

function Header( { hamburgerMenu, handleMenueClick } ) {

    const burgerMenuShown = hamburgerMenu.burgerIconVisible;

    return (
        <div className="header-container">
            <h1 className="header-title">WDD 330</h1>
            {
                burgerMenuShown &&
                <img
                    className="burgerMenu"
                    src="https://placehold.co/600x400/png"
                    onClick={handleMenueClick}
                    />
            }
        </div>
    )
}

export default Header;