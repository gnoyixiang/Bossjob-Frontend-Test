import React from 'react';

import './Pagination.css';

const ELLIPSIS = 'ELLIPSIS';

const ShowResults = ({ total }) => (
    <p className="ShowResults">{total} jobs found</p>
)

ShowResults.defaultProps = {
    total: 0
};

const Paging = ({ page, numberOfPages, pageRangeDisplayed, pageMarginDisplayed, onPageChange }) => {
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
    let displayedPages = startMarginPages.concat(rangePages, endMarginPages)
        // remove out of range
        .filter(pageNum => pageNum <= numberOfPages && pageNum > 0)
        // remove duplicates
        .reduce((pages, pageNum) => {
            if (pages.indexOf(pageNum) < 0) {
                pages.push(pageNum);
            }
            return pages;
        }, [])
        .sort((a, b) => a - b)
        // insert ellipsis
        .reduce((pages, pageNum) => {
            const prevPageNum = pages[pages.length - 1];
            if (prevPageNum < pageNum - 1) {
                pages.push(ELLIPSIS);
            }
            pages.push(pageNum);
            return pages;
        }, []);

    console.log(page, numberOfPages, startMarginPages, rangePages, endMarginPages, displayedPages);

    const hasPreviousPage = page > 1;
    const hasNextPage = page < numberOfPages;
    let ellipsisOnClickHandler = index => {
        console.log(index, pageMarginDisplayed, displayedPages);
        if(index === pageMarginDisplayed) {
            // case 1: 1 ... 7 8 9 10 11, clicking on this ellipsis is going to 7 - 1
            return onPageChange(displayedPages[index + 1] - 1);
        }
        if(index === displayedPages.length - pageMarginDisplayed - 1) {
            // case 2: 7 8 9 10 11 ... 200, clicking on this ellipsis is going to 11 + 1
            return onPageChange(displayedPages[index - 1] + 1);
        }
    }

    return (
        <div className="Pagination">
            <span
                className="Navigator"
                disabled={!hasPreviousPage}
                onClick={() => hasPreviousPage && onPageChange(page - 1)}
            >
                {'<'}
            </span>
            {displayedPages.map((pageNum, index) => (
                <React.Fragment key={`${pageNum}_${index}`}>
                    {pageNum === ELLIPSIS ? (
                        <span
                            className="Ellipsis"
                            onClick={() => ellipsisOnClickHandler(index)}
                        >
                            ...
                        </span>
                    ) : (
                            <span
                                className="Page"
                                active={page === pageNum ? "active" : undefined}
                                onClick={() => onPageChange(pageNum)}
                            >
                                {pageNum}
                            </span>
                        )
                    }
                </React.Fragment>
            ))}
            <span
                className="Navigator"
                disabled={!hasNextPage}
                onClick={() => hasNextPage && onPageChange(page + 1)}
            >
                {'>'}
            </span>
        </div>
    );
};

Paging.defaultProps = {
    pageRangeDisplayed: 3,
    pageMarginDisplayed: 3,
};

// props has page, size, total_count, total_pages
const Pagination = props => {
    const { page, size, total, onPageChange, children, ...restProps } = props;

    const numberOfPages = Math.ceil(total / size) || 0;

    return (
        <div {...restProps}>
            <ShowResults total={total} />
            {children}
            <Paging
                page={page}
                numberOfPages={numberOfPages}
                onPageChange={onPageChange}
            />
        </div>
    );
};

export default Pagination;