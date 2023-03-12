import React from "react";

import { SubHeading } from "../../../components";
import { images } from "../../../constants";
import './Intro.css';

const Intro = () => (
    <div className="app__intro app__wrapper section__padding" id="home">
            <div className="app__wrapper_info">
                <h1 className="app__intro-h1">Mi Znamo Sto Dom<br/>Znaci Za Vas</h1>      
                <SubHeading title="Pronadji svoj budući dom samo jednim klikom"/>
                <button type="button" className="custom__button">Explore Menu</button>
            </div>
    </div>
);


export default Intro;