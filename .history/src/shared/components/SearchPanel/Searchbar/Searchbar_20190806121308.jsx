import React, {useState} from 'react';

import SearchIcon from '../../../assets/images/SearchIcon.svg';
import './Searchbar.css';

const Searchbar = props => {
    const [query, updateQuery] = useState('');

    const handleChange = evt => updateQuery(evt.target.value);

    return (
        <div className="Searchbar">
            <img src={SearchIcon} alt="Search" />
            <input value={query} onChange={handleChange} />
        </div>
    );
};

export default Searchbar;