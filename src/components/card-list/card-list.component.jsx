import React from 'react';
import './card-list.styles.css';

import Card from '../card/card.component';

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
