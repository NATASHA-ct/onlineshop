import React from 'react';
import { Link } from 'react-router-dom';
import setting from '../../images/settingIcon.png';
import microphone from '../../images/mic.png';

const Header = () => (
  <header>
    <Link className="Header" to="/">
      <h1 className="logoname">Celestial Store</h1>
      <div className="headerIcons">
        <img className="setting" src={setting} alt="setting" />
        <img className="mic" src={microphone} alt="micIcon" />
      </div>
    </Link>
  </header>
);

export default Header;
