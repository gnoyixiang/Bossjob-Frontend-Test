import React from 'react';

import { classnames } from '../../../helpers';
import './Pagination.css';

const ShowResults = ({ total }) => (
    <p className="Pagination-showResults">{total} jobs found</p>
)

const Paging = ({ page, numberOfPages, hasNextPage, hasPreviousPage }) => numberOfPages ? (
    <div className="Pagination">
        <span className={classnames("Pagination-previous", hasPreviousPage ? "Pagination-active" : "")}>{'<'}</span>
        {Array(numberOfPages).fill().map((_, index) => (
            <span className={classnames("Pagination-page", page === index + 1 ? "Pagination-active" : "")}>{index + 1}</span>
        ))}
        <span className={classnames("Pagination-previous", hasNextPage ? "Pagination-active" : "")}>{'>'}</span>
    </dic>
) : null;

// props has page, size, total_count, total_pages
const Pagination = props => {
    const { page, size, total, children, ...restProps } = props;

    const numberOfPages = Math.ceil(total / size) || 0;

    const hasPreviousPage = page !== 1;
    const hasNextPage = page !== numberOfPages;

    return (
        <div {...restProps}>
            <ShowResults total={total} />
            {children}
            <Paging 
                page={page}
                numberOfPages={numberOfPages}
                hasNextPage={hasPreviousPage}
                hasPreviousPage={hasNextPage}
            />
        </div>
    );
};

export default Pagination;