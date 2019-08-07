import React from 'react';
import { classnames } from '../../../helpers';
import './SearchPanel.css';

const SearchPanel = props => {
    const { searchInput, onSearchInputChange, onSearch, className, ...restProps } = props;

    return (
        <div className={classnames(className, "SearchPanel")} {...restProps}>
            <div className="Searchbar">
                <span><i className="icofont-search-1"></i></span>
                <input value={searchInput} onChange={onSearchInputChange} placeholder="Search for job title or company name" />
            </div>
            <button className="FilterButton" onClick={onSearch}>
                Filter results
            </button>
        </div>
    );
};

export default SearchPanel;