import React from "react";

import './Intro.scss';

const Intro = () => {
    return (
        <div className="intro">
        <div className="intro__content">
            <h1 className="intro__title">Hello, I'm <span className="intro__title--name">John Doe</span></h1>
            <p className="intro__description">I'm a Front-End Developer</p>
        </div>
        </div>
    );
    }

export default Intro;