import React from 'react';

import SearchIcon from '../../../assets/images/SearchIcon.svg';
import { classnames } from '../../../helpers';
import './SearchPanel.css';

const SearchPanel = props => {
    const { searchInput, onSearchInputChange, onSearch, className, ...restProps } = props;

    return (
        <div className={classnames(className, "SearchPanel")} {...restProps}>
            <div className="Searchbar">
                <img src={SearchIcon} alt="Search" />
                <input value={searchInput} onChange={onSearchInputChange} />
            </div>
            <button className="FilterButton" onClick={onSearch}>
                Filter results
            </button>
        </div>
    );
};

export default SearchPanel;