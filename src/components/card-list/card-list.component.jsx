import React from 'react';
import './card-list.styles.css';

// passing props of children, props within tag bracket
const CardList = ({ children }) => {
    return (
        <div className="card-list">
            {children}
        </div>
    )
}

export default CardList;
