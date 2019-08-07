import React from 'react';

import { classnames } from '../../../helpers';
import './Pagination.css';

// props has page, size, total_count, total_pages
const Pagination = props => {
    const { page, size, total, className, ...restProps } = props;

    const numberOfPages = Math.ceil(total / size);

    return (
        <div className={classnames(classnames, "Pagination")} {...restProps}>
            <span className="arrow-previous">{'<'}</span>
            {numberOfPages.map((_, index) => (
                <span className="page-number">{index + 1}</span>
            ))}
            <span className="arrow-after">{'>'}</span>
        </div>
    );
};

export default Pagination;