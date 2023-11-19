import React from 'react';
import logo from '../images/logo.png';
function Navbar() {
  return (
    <nav className="navbar">
        <img src={logo} className="logo" alt=""/>
        <div class="join-box">
            <p class="join-msg">tv shows & movies</p>
            <button class="btn join-btn">join now</button>
            <button class="btn">sign in</button>
        </div>
    </nav>
  )
}

export default Navbar
