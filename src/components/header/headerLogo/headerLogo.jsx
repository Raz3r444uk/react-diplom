import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const HeaderLogo = () => {
    return (
        <>
            <div className="header__logo">
                <Link className="header__link" to="/">
                    <h1 className="header__title">Кухонька</h1>
                    <div className="header__img"></div>
                </Link>
            </div>
        </>
    );
};

export default HeaderLogo;
