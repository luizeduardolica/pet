import React from 'react';
import logo from '../logo.png'; // Certifique-se de ter o caminho correto para a imagem da logo

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Pet Shop Logo" />
      </div>
      <nav className="menu">
        <ul>
          <li>Home</li>
          <li>Serviços</li>
          <li>Quero ser um passeador</li>
          <li>Contato</li>
        </ul>
      </nav>
      <div className="login-register">
        <button>Login</button>
        <button>Registrar</button>
      </div>
    </header>
  );
}

export default Header;
