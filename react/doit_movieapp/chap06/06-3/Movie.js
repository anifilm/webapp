import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ id, title, year, summary, poster }) {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
