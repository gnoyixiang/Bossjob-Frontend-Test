import React from 'react';

import SearchIcon from '../../../assets/images/SearchIcon.svg';
import { classnames } from '../../../helpers';
import './SearchPanel.css';

const SearchPanel = props => {
    const { searchInput, onSearchInputChange, onSearch, className, ...restProps } = props;

    return (
        <div className={classnames(className, "SearchPanel")} {...restProps}>
            <div className="Searchbar">
                <span><i class="icofont-search-1"></i></span>
                <input value={searchInput} onChange={onSearchInputChange} placeholder="Search for job title or company name" />
            </div>
            <button className="FilterButton" onClick={onSearch}>
                Filter results
            </button>
        </div>
    );
};

export default SearchPanel;