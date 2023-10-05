import React, { useState } from "react";
import Slide from "./Slide";
import slides from "../data/slides.json";
import "./gallery.css";

const Slider = () => {
    const [index, setIndex] = useState(0);

    function prev() {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(slides.length - 1);
        }
    }

    function next() {
        if (index < slides.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    console.log(index);

    return (
        <div className="gallery">
            <div className="gallery__wrapper">
                <Slide title={slides[index].title} desc={slides[index].desc} source={slides[index].source} />

                <div className="gallery__buttons">
                    <button className="gallery__button-prev gallery__button" onClick={prev}>
                        назад
                    </button>
                    <button className="gallery__button-next gallery__button" onClick={next}>
                        вперед
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;
