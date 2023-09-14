import React from "react";

import "./searchBoxStylesFolder/searchBox.styles.small.css";

function SearchBox({ onChangeHandler, placeHolder }) {
    return (
        <div className="search-box">
            <input 
                className="search-box-input"
                type="search"
                placeholder={placeHolder}
                onChange={onChangeHandler}
            />
        </div>
    );
}

export default SearchBox;