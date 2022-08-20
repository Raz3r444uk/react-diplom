import React from "react";
import ImageSlider from "./slider/imageSlider";
import Navbar from "./navigation/navBar";
import slideOne from "../../assets/img/4.jpg";
import slideTwo from "../../assets/img/2.jpg";
import slideThree from "../../assets/img/3.jpg";
import slideFour from "../../assets/img/4.webp";
import slideFive from "../../assets/img/5.jpg";

import "./index.css";

const MainSection = () => {
    const slides = [
        { url: slideOne },
        { url: slideTwo },
        { url: slideThree },
        { url: slideFour },
        { url: slideFive }
    ];

    const info = [
        { info: "Самый хрустящий хлебушек!" },
        { info: "Самый молочный сыр!" },
        { info: "Самые сочные колбаски!" },
        { info: "Самые свежие овощи!" },
        { info: "Самое полезное молоко!" }
    ];

    return (
        <div className="main">
            <Navbar />
            <div className="slide__container">
                <ImageSlider slides={slides} info={info} />
            </div>
        </div>
    );
};

export default MainSection;
