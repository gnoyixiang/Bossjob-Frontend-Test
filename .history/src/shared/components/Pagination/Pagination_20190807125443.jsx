import React from 'react';

import { classnames } from '../../../helpers';
import './Pagination.css';

// props has page, size, total_count, total_pages
const Pagination = props => {
    const { page, size, total, className, ...restProps } = props;

    const numberOfPages = Math.ceil(total / size) || 0;

    const hasPreviousPage = page !== 1;
    const hasNextPage = page !== numberOfPages;

    return (
        <div className={classnames(classnames, "Pagination")} {...restProps}>
            {numberOfPages ? (
                <React.Fragment>
                    <span className={classnames("Pagination-previous", hasPreviousPage ? "Pagination-active" : "")}>{'<'}</span>
                    {Array(numberOfPages).fill().map((_, index) => (
                        <span className={classnames("Pagination-page", hasNextPage ? "Pagination-active" : "")}>{index + 1}</span>
                    ))}
                    <span className={classnames("Pagination-previous", hasPreviousPage ? "Pagination-active" : "")}>{'>'}</span>
                </React.Fragment>
            ) : <span className="Pagination-noresults">No results found</span>}
        </div>
    );
};

export default Pagination;