import React from 'react';
import './firefly-background.scss';

const FireflyBackground = ({ quantity }) => {
  const fireflies = [];
  for (let i = 1; i <= quantity; i++) {
    fireflies.push(<div key={i} className={`firefly move${i}`} />);
  }

  return <div className="fireflies-container">{fireflies}</div>;
};

export default FireflyBackground;
