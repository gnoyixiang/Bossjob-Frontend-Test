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
            />
        );
    }
}

export default withPagination;