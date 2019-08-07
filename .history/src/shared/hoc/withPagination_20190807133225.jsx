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
    setPagination = (pagination) => {
        const {page, size, total} = pagination;
        this.setState({page, size, total});
    }

    handlePageChange = (page, onPageChange) => {
        this.setState({ page }, () => {
            onPageChange && onPageChange(this.state);
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