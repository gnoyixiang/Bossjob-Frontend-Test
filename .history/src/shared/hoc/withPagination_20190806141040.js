import React, { Component } from 'react';

/**
 * Wrap component with pagination props
 * @param {*} WrappedComponent 
 * @param {{size: number}} options
 */
const withPagination = (WrappedComponent, options) => class WithPagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            total: 0,
            size: options.size || 12,
        }
    }

    changePage = page => {
        this.setState({ page });
    }

    render() {
        return (
            <WrappedComponent
                {...this.props}
                pagination={this.state}
            />
        );
    }
}

export default withPagination;