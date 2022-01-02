import React from 'react';
import './card.styles.css';

const Card = ({ id, name, email }) => {
  /**
   * Break Down Component bertujuan agar tiap komponen memiliki perhatian statenya masing2
   * sehingga fleksibel dapat di-reusable
   */
  return (
    <div className="card-container">
      <img alt="" src={`https://robohash.org/${id}?set=set2&size=180x180`} />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
}

export default Card;
