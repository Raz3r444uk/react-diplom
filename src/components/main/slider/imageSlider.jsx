import React, { useState } from "react";
import PropTypes from "prop-types";
import "./index.css";

const ImageSlider = ({ slides, info }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        backgroundImage: `url(${slides[currentIndex].url})`
    };

    const goToPervious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isFirstSlide = currentIndex === slides.length - 1;
        const newIndex = isFirstSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <>
            <div className="slide" currentindex={currentIndex}>
                <div
                    className="slider__arrow left-arrow"
                    onClick={goToPervious}
                ></div>
                <div className="slider__slide" style={slideStyles}>
                    <h1 className="slider__title">{info[currentIndex].info}</h1>
                </div>
                <div className="dots__container">
                    {slides.map((dot, ind) => (
                        <div
                            className="slider__dot"
                            key={ind}
                            onClick={() => goToSlide(ind)}
                        ></div>
                    ))}
                </div>

                <div
                    className="slider__arrow right-arrow"
                    onClick={goToNext}
                ></div>
            </div>
        </>
    );
};

ImageSlider.propTypes = {
    slides: PropTypes.array.isRequired,
    info: PropTypes.array.isRequired
};

export default ImageSlider;
