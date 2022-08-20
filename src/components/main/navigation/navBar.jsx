import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
    return (
        <div className="navigation__container">
            <ul className="navigation__list">
                <li className="navigation__list-item">
                    <Link className="navigation__list-link" to="/meatlist">
                        Колбасная продукция
                    </Link>
                </li>
                <li className="navigation__list-item">
                    <Link className="navigation__list-link" to="/cheeselist">
                        Сыры
                    </Link>
                </li>
                <li className="navigation__list-item">
                    <Link className="navigation__list-link" to="/breadlist">
                        Хлеба
                    </Link>
                </li>
                <li className="navigation__list-item">
                    <Link
                        className="navigation__list-link"
                        to="/vegetablesList"
                    >
                        Овощи
                    </Link>
                </li>
                <li className="navigation__list-item">
                    <Link className="navigation__list-link" to="/milkList">
                        Молочная продукция
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
