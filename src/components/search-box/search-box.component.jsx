import React from 'react';
import './search-box.styles.css';

const SearchBox = ({ placeholder, onSearchChange }) => {
    return (
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={onSearchChange}
      />
    );
}

export default SearchBox;
