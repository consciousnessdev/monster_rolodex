import React from 'react';
import './card-list.styles.css';

import Card from '../card/card.component';

// passing props of children, props within tag bracket
const CardList = ({ monsters }) => {
    return (
      <div className="card-list">
        {monsters.map(({ id, name }) => (
            <Card key={id} name={name} id={id} />
        ))}
      </div>
    );
}

export default CardList;
