import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const HeaderLogin = () => {
    return (
        <Link className="header__login" to="/login">
            <div>Логин</div>
        </Link>
    );
};

export default HeaderLogin;
