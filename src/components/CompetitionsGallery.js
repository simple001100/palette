import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import { memo } from "react";
import { COMPETITIONS_ROUTE } from '../const.js';

const Competition = memo(({ competition }) => {
  const { name, slug, images, price } = competition;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single competition" />
        <div className="price-top">
          <h6>{price}</h6>
        </div>
        <Link to={`${COMPETITIONS_ROUTE}/${slug}`} className="btn-primary room-link">
          Перейти
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
});


export default Competition;