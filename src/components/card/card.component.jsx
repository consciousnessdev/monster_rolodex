import React from 'react';
import './card.styles.css';

const Card = ({ id, name, email }) => {
    console.log(id);
    return (
      <div className="card-container">
        <img alt="" src={`https://robohash.org/${id}?set=set2&size=180x180`} />
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    );
}

export default Card;
