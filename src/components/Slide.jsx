import React from "react";
import "./slide.css";

const Slide = ({ title, desc, source }) => {
    return (
        <div className="slide">
            <span className="slide__title">{title}</span>
            <img className="slide__img" src={source} alt={title} />
            <p className="slide__desc">{desc}</p>
        </div>
    );
};

export default Slide;
