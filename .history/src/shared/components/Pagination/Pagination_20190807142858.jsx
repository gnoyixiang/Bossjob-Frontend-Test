import React from 'react';

import { classnames } from '../../../helpers';
import './Pagination.css';

const ShowResults = ({ total }) => (
    <p className="Pagination-showResults">{total} jobs found</p>
)

ShowResults.defaultProps = {
    total: 0
};

const Paging = ({ page, numberOfPages, hasNextPage, hasPreviousPage, pageRangeDisplayed, pageMarginDisplayed }) => {
    if (!numberOfPages) return null;

    const startMarginPages = Array(pageMarginDisplayed).fill().map((_, index) => 1 + index);
    const endMarginPages = Array(pageMarginDisplayed).fill().map((_, index) => numberOfPages - index);
    let rangePages;
    if (page < pageRangeDisplayed) {
        // case 1: where page is < pageRangeDisplayed, show 1 to pageRangeDisplayed
        rangePages = Array(pageRangeDisplayed).fill().map((_, index) => index + 1)
    } else if (page > numberOfPages - pageRangeDisplayed + 1) {
        // case 2: where page is > numberOfPages - pageRangeDisplayed + 1, show numberOfPages - pageRangeDisplayed + 1 to numberOfPages
        rangePages = Array(pageRangeDisplayed).fill().map((_, index) => numberOfPages - pageRangeDisplayed + 1 + index)
    } else {
        rangePages = Array(pageRangeDisplayed).fill().map((_, index) => page - Math.floor(pageRangeDisplayed / 2) + index)
    }

    const displayedPages = startMarginPages.concat(rangePages, endMarginPages)
        .sort((a, b) => a - b)
        .reduce((pages, pageNum) => {
            if (pages[pages.length - 1] !== pageNum) {
                pages.push(pageNum);
            }
            return pages;
        }, []);

    console.log(displayedPages, startMarginPages, rangePages, endMarginPages);

    return (
        <div className="Pagination">
            <span className={classnames("Pagination-previous", hasPreviousPage ? "Pagination-active" : "")}>{'<'}</span>
            {displayedPages.map((pageNum, index) => (
                <React.Fragment>
                    {pageNum > displayedPages[index - 1] + 1 ? (
                        <span key={`${pageNum}_to_${displayedPages[index - 1]}`} className={classnames("Pagination-ellipsis")}>...</span>
                    ) : null}
                    <span key={pageNum} className={classnames("Pagination-page", page === pageNum ? "Pagination-active" : "")}>{pageNum}</span>
                </React.Fragment>
            ))}
            <span className={classnames("Pagination-previous", hasNextPage ? "Pagination-active" : "")}>{'>'}</span>
        </div>
    );
};

Paging.defaultProps = {
    pageRangeDisplayed: 5,
    pageMarginDisplayed: 1,
};

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