import React from 'react';

import './style.css';

import logo from '../../assets/facebook.svg';

function Header() {
  return (
    <div className="header">
      <div className="content">
        <img src={logo} className="logo" alt="logo" title="logo" />
        <div className="profile">
          <h5>Meu perfil</h5>
          <img src="https://avatars1.githubusercontent.com/u/13645242?s=60&v=4" height="20px" alt="profile" title="profile" />
        </div>
      </div>
    </div>
  )
}

export default Header;
