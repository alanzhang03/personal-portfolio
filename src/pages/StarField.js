import React, { useEffect, useState } from 'react';
import'../index.css';


const StarField = ({ numberOfStars = 100 }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 30 + 30}s`, 
        animationDelay: `-${Math.random() * 30}s`, 
      };
      newStars.push(<div className="star" style={style} key={i} />);
    }
    setStars(newStars);
  }, [numberOfStars]);

  return <div className="star-field">{stars}</div>;
};

export default StarField;