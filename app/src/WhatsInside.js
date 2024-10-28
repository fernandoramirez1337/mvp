import React from 'react';
import itemFigure from './images/logo.jpg';
import itemMerch from './images/logo.jpg';
import itemAccessory from './images/logo.jpg';

function WhatsInside() {
  return (
    <section className="whats-inside">
      <h2>¿Qué Hay Dentro?</h2>
      <p>Descubre artículos de edición limitada, figuras de colección y productos exclusivos que no encontrarás en ningún otro lugar.</p>
      <p>&nbsp;</p>
      <div className="items">
        <div className="item">
          <img src={itemFigure} alt="Figura de colección" />
          <h3>Figuras de Colección</h3>
          <p>Iconos de tus personajes favoritos en cada caja.</p>
        </div>
        <div className="item">
          <img src={itemMerch} alt="Mercancía temática" />
          <h3>Mercancía Temática</h3>
          <p>Ropa y accesorios exclusivos para verdaderos fans.</p>
        </div>
        <div className="item">
          <img src={itemAccessory} alt="Accesorios geek" />
          <h3>Accesorios Geek</h3>
          <p>Artículos únicos para completar tu colección.</p>
        </div>
      </div>
    </section>
  );
}

export default WhatsInside;