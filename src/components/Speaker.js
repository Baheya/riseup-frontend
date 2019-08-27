import React from 'react';

import './Speaker.scss';

const Speaker = props => {
  return (
    <div className="speaker-container">
      <img src={`http://localhost:8080/${props.image}`} />
      <div className="speaker-info">
        <h4>{props.name}</h4>
        <h5>{props.position}</h5>
        <p>{props.company}</p>
        <p>{props.biography}</p>
      </div>
    </div>
  );
};

export default Speaker;
