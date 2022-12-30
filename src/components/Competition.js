import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import { memo } from "react";
import { COMPETITIONS_ROUTE } from '../const.js';

const Сompetition = memo(({ competition }) => {
  const { name, slug, images, price } = competition;
  // console.log(name);
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

Сompetition.propTypes = {
  competition: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  })
};
export default Сompetition;