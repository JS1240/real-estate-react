import React from "react";

import { SubHeading } from "../../../components";
import { images } from "../../../constants";
import './Intro.css';

const Intro = () => (
    <div className="app__intro app__wrapper section__padding" id="home">
            <div className="app__wrapper_info">
                <h1 className="app__intro-h1">Mi Znamo Sto Dom<br/>Znaci Za Vas</h1>      
                <SubHeading title="Pronadji svoj budući dom samo jednim klikom"/>
                <div>
                    <button type="button" className="css-button-neumorphic">Prodaja</button>
                    <button type="button" className="css-button-neumorphic">Prodaja</button>
                </div>
                <div class="ui icon input"><input type="text" placeholder="Search..."/>
                    <i aria-hidden="true" class="search circular inverted link icon"></i>
                    <button type="button" className="css-button-neumorphic">Prodaja</button>
                </div>
            </div>
    </div>
);


export default Intro;