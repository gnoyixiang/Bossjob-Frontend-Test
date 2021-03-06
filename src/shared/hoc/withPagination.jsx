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
        const total = pagination.total !== undefined ? pagination.total : this.state.total;
        const size = pagination.size !== undefined ? pagination.size : this.state.size;
        let page = pagination.page !== undefined ? pagination.page : this.state.page;
        if (page < 1) {
            page = 1;
        } else if (total && page > Math.ceil(total / size)) {
            page = Math.ceil(total / size);
        }
        console.log('[setPagination]', pagination, total, size, page);
        this.setState({
            page,
            size,
            total
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