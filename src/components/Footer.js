import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Agence de Voyage. Tous droits réservés.</p>
        <ul className="footer-links">
          <li><a href="#about">À propos</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contactez-nous</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
