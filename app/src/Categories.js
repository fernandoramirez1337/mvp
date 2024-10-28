import React from 'react';
import './css/styles.css';
import volumesImg from './images/volumes.jpeg';
import retroImg from './images/retro.jpeg';
import figuImg from './images/figu.jpg';
import aniclothingImg from './images/aniclothing.jpg';
import tcgImg from './images/tcg.jpg';
import comicsImg from './images/comics.jpg';
import cosplayImg from './images/cosplay.jpg';
import terrorImg from './images/terror.jpg';

function Categories() {
  return (
    <main>
      <section className="categories">
        <div className="category">
          <img src={volumesImg} alt="Mangas" />
          <div className="label">Mangas</div>
        </div>
        <div className="category">
          <img src={retroImg} alt="Retro Merch" />
          <div className="label">Retro Merch</div>
        </div>
        <div className="category">
          <img src={figuImg} alt="Figuras de Colección" />
          <div className="label">Figuras de Colección</div>
        </div>
        <div className="category">
          <img src={aniclothingImg} alt="Ropa Geek" />
          <div className="label">Ropa Geek</div>
        </div>
        <div className="category">
          <img src={tcgImg} alt="Trading Card Games" />
          <div className="label">Trading Card Games</div>
        </div>
        <div className="category">
          <img src={comicsImg} alt="Comics" />
          <div className="label">Comics</div>
        </div>
        <div className="category">
          <img src={cosplayImg} alt="Cosplays" />
          <div className="label">Cosplays</div>
        </div>
        <div className="category">
          <img src={terrorImg} alt="Horror" />
          <div className="label">Horror</div>
        </div>
      </section>
    </main>
  );
}

export default Categories;