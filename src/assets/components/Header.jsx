import React from 'react';
import BarraBusqueda from '../BarraBusqueda.jsx';

function Header() {
  return (
    <header className="encabezado-sitio">
      <section className="logo-sitio">
        <a href="/" aria-label="Ir a la página principal de arcadeVerse">
          <img src="/logo-arcadeverse.png" alt="Logo de arcadeVerse" /> 
        </a>
      </section>
      <nav className="navegacion-principal">
        <ul>
          <li><a href="#">Videojuegos</a></li>
          <li><a href="#">Noticias</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
      <BarraBusqueda />
    </header>
  );
}

export default Header;