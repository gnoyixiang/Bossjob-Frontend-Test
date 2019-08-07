import React from 'react';

import SearchIcon from '../../../assets/images/SearchIcon.svg';
import './Searchbar.css';

const Searchbar = ({ value, onChange }) => (
    <div className="Searchbar">
        <img src={SearchIcon} alt="Search" />
        <input value={value} onChange={onChange} />
    </div>
);

export default Searchbar;