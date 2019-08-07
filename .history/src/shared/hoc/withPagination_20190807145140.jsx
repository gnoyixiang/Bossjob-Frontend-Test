import React, { Component } from 'react';

/**
 * Wrap component with pagination props
 * @param {*} WrappedComponent 
 * @param {{size: number}} options
 */
const withPagination = (WrappedComponent, options = {}) => class WithPagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            total: 0,
            size: options.size || 12,
        }
    }

    /**
     * @param {number} page
     * @param {number} size
     * @param {number} total
     */
    setPagination = (pagination, onPaginationChange) => {
        const { page, size, total } = pagination;
        let actualPage = page;
        if (actualPage < 1) {
            actualPage = 1;
        } else if (actualPage > total) {
            actualPage = total;
        }
        this.setState({
            page: actualPage,
            size, total
        }, () => {
            onPaginationChange && onPaginationChange(this.state);
        });
    }

    render() {
        return (
            <WrappedComponent
                {...this.props}
                pagination={this.state}
                handlePageChange={this.handlePageChange}
                setPagination={this.setPagination}
            />
        );
    }
}

export default withPagination;