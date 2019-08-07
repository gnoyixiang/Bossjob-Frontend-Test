import React from 'react';

import { classnames } from '../../../helpers';
import './Pagination.css';

// props has page, size, total_count, total_pages
const Pagination = props => {
    const { page, size, total, className, ...restProps } = props;

    const numberOfPages = Math.ceil(total / size) || 0;

    const hasPreviousPage = numberOfPages && page !== 1;
    const hasNextPage = numberOfPages && page !== numberOfPages;

    return (
        <div className={classnames(classnames, "Pagination")} {...restProps}>
            <span className={classnames("Pagination-previous", hasPreviousPage ? "Pagination-active" : "")}>{'<'}</span>
            {Array(numberOfPages).fill().map((_, index) => (
                <span className={classnames("Pagination-page", hasNextPage ? "Pagination-active" : "")}>{index + 1}</span>
            ))}
            <span className={classnames("Pagination-previous", hasPreviousPage ? "Pagination-active" : "")}>{'>'}</span>
        </div>
    );
};

export default Pagination;