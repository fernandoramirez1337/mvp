import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
      <div className="h11">
        <h0>Encuentra Sorpresas Únicas Cada Mes</h0>
        </div>
        <div className="bubble">
          <p>Únete a Fan Treasure y recibe una caja misteriosa llena de productos exclusivos de tus franquicias geek y anime favoritas.</p>
        </div>
        <Link to="#" className="cta-button">Suscríbete Ahora</Link>
      </div>
    </section>
  );
}

export default Hero;