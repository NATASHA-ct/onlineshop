import React from 'react';
import { Link } from 'react-router-dom';
import microphone from '../../images/mic.png';
import setting from '../../images/settings-icon.jpg';
import backIcon from '../../images/backIcon.png';

const Header = () => (
  <header>
    <Link className="Header" to="/">
      <img className="goback-btn" src={backIcon} alt="micIcon" />
      <h1 className="logoname">Celestial Store</h1>
      <div className="headerIcons">
        <img className="setting" src={setting} alt="setting" />
        <img className="mic" src={microphone} alt="micIcon" />
      </div>
    </Link>
  </header>
);

export default Header;
