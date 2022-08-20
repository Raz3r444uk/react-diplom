import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const HeaderRegistration = () => {
    return (
        <Link className="header__register" to="/register">
            <div>Регистрация</div>
        </Link>
    );
};

export default HeaderRegistration;
