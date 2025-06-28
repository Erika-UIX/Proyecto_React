import React from 'react';

function BannerPrincipal() {
  return (
    <section className="banner-principal">
      <img src="./public/imagenes/banner.webp" alt="Banner salón de videojuegos de juegos arcade." />
      <section class="contenido-banner">
                <h1>Bienvenido a ArcadeVerse</h1>
                <p>¡Hola, amantes de los juegos retro! Esto es Arcade Verse.</p>
                <p>Estamos emocionados de darte la bienvenida a nuestro pequeño rincón de la historia de los videojuegos.</p>
                <p>Explora un universo de clásicos y descubre las últimas novedades del mundo retro gaming.</p>
                <a href="#juegos-destacados" class="boton-cta">Explora Nuestros Juegos</a>
            </section>
    </section>
  );
}

export default BannerPrincipal;