import React from 'react';
import { HiMail, HiAcademicCap, HiPhone, HiOutlineSearch } from "react-icons/hi";
import { SlAnchor } from "react-icons/sl";
function Footer() {
  return (
    <footer className="pie-pagina">
      <nav class="navegacion-inferior">
          <ul>
              <li><a href="index.html">Inicio</a></li>
              <li><a href="#">Videojuegos</a></li>
              <li><a href="#">Noticias</a></li>
              <li><a href="#">Contacto</a></li>
          </ul>
      </nav>
      <section className="redes-sociales">
        <p><b>Siguenos en nuestras redes sociales:</b></p>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/icon-facebook.webp" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/icon-instagram.webp" alt="Instagram" /> 
        </a>
        <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer">
          <img src="/icon-discord.webp" alt="Discord" />
        </a>
        <a href="https://wa.me/XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
          <img src="/icon-whatsapp.webp" alt="WhatsApp" />
        </a>
      </section>
      <address class="info-contacto">
          <p>< HiMail class="iconos"/> <a href="mailto:contacto@arcadeVerse.com">contacto@arcadeVerse.com</a></p>
          <p>< HiAcademicCap class="iconos"/> AITEC - Av. José A. Gómez Gault, Km. 8.5 vía a Daule, dentro de las instalaciones de ANAI <SlAnchor class="iconos"/></p>
          <p>< HiPhone class="iconos"/> WhatsApp: <a href="tel:+593991253658">099 123 4567</a></p>
      </address>
      <section className="copyright">
        <p>&copy; 2025 ArcadeVerse. Todos los derechos reservados.</p>
      </section>
    </footer>
  );
}

export default Footer;