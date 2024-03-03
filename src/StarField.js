import React, { useEffect, useState } from 'react';
import './index.css';

const StarField = ({ numberOfStars = 200 }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 10 + 40}s`,
        animationDelay: `-${Math.random() * 10}s`,
      };
      newStars.push(<div className="star" style={style} key={i} />);
    }
    setStars(newStars);
  }, [numberOfStars]);

  return <div>{stars}</div>;
};

export default StarField;