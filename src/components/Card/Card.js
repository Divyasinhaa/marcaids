import React from 'react';
import './Card.scss';

const Card = ({ imgSrc, caption }) => {
  return (
    <figure className="figure">
      <img className="image" src={imgSrc} alt={caption} />
      <figcaption className="figcaption">{caption}</figcaption>
    </figure>
  );
};

export default Card;
