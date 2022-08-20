import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
    const PRODUCTS_URL = "http://localhost:3000/products";
    const productsList = async () => {
        const res = await fetch(PRODUCTS_URL);
        const prod = await res.json();
        return prod;
    };

    const [products, setProducts] = useState(fetch(productsList));

    useEffect(() => {
        productsList().then((data) => {
            setProducts(data);
        });
    }, []);

    console.log(
        Object.values(products).map((el) => {
            return el;
        })
    );

    return (
        <div className="navigation__container">
            <ul className="navigation__list">
                {Object.values(products).map((el) => (
                    <li key={el.id} className="navigation__list-item">
                        <Link
                            key={el.id}
                            className="navigation__list-link"
                            to={el.path}
                        >
                            {el.value}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;

// {Object.keys(products).map((el) =>
//     Object.keys(el).map((product) => (
//         <li key={product.id} className="navigation__list-item">
//             <Link
//                 key={product.id}
//                 className="navigation__list-link"
//                 to="/meatlist"
//             >
//                 {product.value}
//             </Link>
//         </li>
//     ))
// )}
// )
