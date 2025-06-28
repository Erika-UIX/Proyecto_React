import React from 'react';
import JuegoTarjeta from '../JuegoTarjeta.jsx'; 

function JuegosDestacados() {
  const juegos = [
    { id: 1, nombre: 'Mario Bros', imagen: './public/imagenes/MarioBros.jpg', link: '/juegos/mario-bros' }, 
    { id: 2, nombre: 'Pac-Man', imagen: './public/imagenes/pacman.webp', link: '/juegos/pacman' }, 
    { id: 3, nombre: 'Snake', imagen: './public/imagenes/Snake.png', link: '/juegos/snake' }, 
    { id: 4, nombre: 'Buscaminas', imagen: './public/imagenes/buscaminas.webp', link: '/juegos/buscaminas' }, 
  ];

  return (
    <section className="juegos-destacados">
      <h2>Juegos Destacados</h2>
      <div className="galeria-juegos">
        {juegos.map(juego => (
          <JuegoTarjeta key={juego.id} juego={juego} />
        ))}
      </div>
      {/* --pendiente-- */}
    </section>
  );
}

export default JuegosDestacados;