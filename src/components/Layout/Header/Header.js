import React from "react";
import "./Header.css";
import HomePage from "../../../pages/HomePage/HomePage";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import images from "../../../constants/images";

const Header = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <header>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.logo} alt="HOMEHERO" onClick={HomePage} />
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans">
            <a href="#for_sale">Prodaja</a>
          </li>
          <li className="p__opensans">
            <a href="#to_rent">Najam</a>
          </li>
          <li className="p__opensans">
            <a href="#house_prices">Cijene Kuca</a>
          </li>
          <li className="p__opensans">
            <a href="#agent_valuation">Valuacija Agenta</a>
          </li>
          <li className="p__opensans">
            <a href="#instant_valuation">Instantna valuacija</a>
          </li>
        </ul>
        <div className="app__navbar-login">
          <ul className="app__navbar-links">
            <li className="p__opensans">
              <a href="#my_home">My Home</a>
            </li>
            <li className="p__opensans">
              <a href="#saved">Saved</a>
            </li>
            <li className="p__opensans">
              <a href="#sign_in">Sign in</a>
            </li>
          </ul>
        </div>
        <div className="app__navbar-smallscreen">
        <AiOutlineMenu className="overlay__open" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <AiOutlineClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#for_sale" onClick={() => setToggleMenu(false)}>Prodaja</a></li>
              <li><a href="#to_rent" onClick={() => setToggleMenu(false)}>Najam</a></li>
              <li><a href="#house_prices" onClick={() => setToggleMenu(false)}>Cijene Kuca</a></li>
              <li><a href="#agent_valuation" onClick={() => setToggleMenu(false)}>Valuacija Agenta</a></li>
              <li><a href="#instant_valuation" onClick={() => setToggleMenu(false)}>Instantna Valuacija</a></li>
              <li><a href="#my_home" onClick={() => setToggleMenu(false)}>Moj Dom</a></li>
              <li><a href="#saved" onClick={() => setToggleMenu(false)}>Spremljeno</a></li>
              <li><a href="#sign_in" onClick={() => setToggleMenu(false)}>Prijava</a></li>
            </ul>
          </div>
        )}
      </div>
      </nav>
    </header>
  );
};

export default Header;
