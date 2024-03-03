import React, { useEffect, useState } from 'react';
import './index.css'; // Make sure to import the CSS

const StarField = ({ numberOfStars = 300 }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 30 + 30}s`, // Random duration between 30s and 60s
        animationDelay: `-${Math.random() * 30}s`, // Random delay to offset the starting point
      };
      newStars.push(<div className="star" style={style} key={i} />);
    }
    setStars(newStars);
  }, [numberOfStars]);

  return <div className="star-field">{stars}</div>;
};

export default StarField;