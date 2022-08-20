import React from "react";
import "./index.css";
import HeaderLogo from "./headerLogo/headerLogo";
import HeaderRegistration from "./headerRegistration/headerRegistration";
import HeaderLogin from "./headerLogin/headerLogin";

const Header = () => {
    return (
        <>
            <section className="header">
                <HeaderLogo />
                <div className="header__auth">
                    <HeaderRegistration />
                    <HeaderLogin />
                </div>
            </section>
        </>
    );
};

export default Header;
