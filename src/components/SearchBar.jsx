import React from 'react';
import './SearchBar.scss';

const SearchBar = () => (
  <form className="search-bar">
    <input type="text" placeholder="Condition, procedure, specialty..." />
    <input type="text" placeholder="City, state, or zipcode" />
    <input type="text" placeholder="Insurance carrier" />
    <button type="submit">Find now</button>
  </form>
);

export default SearchBar; 