import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="" alt="Pet Shop Logo" />
      </div>
      <nav className="menu">
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="login-register">
        <button>Login</button>
        <button>Register</button>
      </div>
    </header>
  );
}

export default Header;
