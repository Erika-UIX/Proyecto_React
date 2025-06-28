import React, { useState, useEffect } from 'react';
import { HiMail, HiAcademicCap, HiPhone, HiOutlineSearch } from "react-icons/hi";

const todosLosJuegosDisponibles = [
  { id: 1, nombre: 'Mario Bros', link: '/juegos/mario-bros' },
  { id: 2, nombre: 'Snake', link: '/juegos/snake' },
  { id: 3, nombre: 'Buscaminas', link: '/juegos/buscaminas' },
  { id: 4, nombre: 'Pac-Man', link: '/juegos/pacman' },
  { id: 5, nombre: 'Space Invaders', link: '/juegos/space-invaders' },
  { id: 6, nombre: 'Tetris', link: '/juegos/tetris' },
  { id: 7, nombre: 'Donkey Kong', link: '/juegos/donkey-kong' },
  { id: 8, nombre: 'Galaga', link: '/juegos/galaga' },
];

function BarraBusqueda() {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [sugerencias, setSugerencias] = useState([]);
  const [mostrarSugerencias, setMostrarSugerencias] = useState(false);

  useEffect(() => {
    if (terminoBusqueda.length > 1) {
      const resultados = todosLosJuegosDisponibles.filter(juego =>
        juego.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
      );
      setSugerencias(resultados);
      setMostrarSugerencias(true);
    } else {
      setSugerencias([]);
      setMostrarSugerencias(false);
    }
  }, [terminoBusqueda]);

  const manejarCambioInput = (event) => {
    setTerminoBusqueda(event.target.value);
  };

  const manejarEnvioBusqueda = (event) => {
    event.preventDefault();
    console.log('Buscando:', terminoBusqueda);
  };

  const manejarClicSugerencia = (link) => {
    window.location.href = link;
  };

  return (
    <section className="busqueda-sitio">
      <form onSubmit={manejarEnvioBusqueda}>
        <input
          type="search"
          placeholder="Buscar juegos..."
          value={terminoBusqueda}
          onChange={manejarCambioInput}
          onFocus={() => setMostrarSugerencias(true)}
          onBlur={() => setTimeout(() => setMostrarSugerencias(false), 100)}
        />__
        <button type="submit">Buscar</button>
      </form>

      {mostrarSugerencias && sugerencias.length > 0 && (
        <ul className="lista-sugerencias">
          {sugerencias.map((juego) => (
            <li key={juego.id} onClick={() => manejarClicSugerencia(juego.link)}>
              {juego.nombre}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default BarraBusqueda;