import React from 'react';

import './style.css';

import user from '../../assets/user.svg';
import logo from '../../assets/facebook.svg';

function Header() {
  return (
    <div className="header">
      <div className="content">
        <img src={logo} className="logo" alt="logo" title="logo" />
        <div className="profile">
          <h5>Meu perfil</h5>
          <i>
            <img src={user} height="20px" alt="profile" title="profile" />
          </i>
        </div>
      </div>
    </div>
  )
}

export default Header;
