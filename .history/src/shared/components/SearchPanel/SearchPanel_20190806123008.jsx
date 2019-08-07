import React from 'react';

import SearchIcon from '../../../assets/images/SearchIcon.svg';
import './SearchPanel.css';

const SearchPanel = props => {
    const { , ...restProps } = props;

    return (
        <div className="SearchPanel">
            <div className="Searchbar">
                <img src={SearchIcon} alt="Search" />
                <input value={value} onChange={onChange} />
            </div>
            <button className="FilterButton">
                Filter results
            </button>
        </div>
    );
};

export default SearchPanel;