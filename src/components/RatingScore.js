import React from 'react';
import '../RatingScore.css';

const RatingScore = ({ rating }) => {
  return (
    <div className="rating-score">
      <div className="star">
        <span className="rating-text">{rating}</span>
      </div>
    </div>
  );
};

export default RatingScore;