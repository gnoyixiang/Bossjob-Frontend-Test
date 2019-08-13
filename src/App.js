import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './shared/components/Header'
import SearchPanel from './shared/components/SearchPanel';
import JobCard from './shared/components/JobCard';
import Pagination from './shared/components/Pagination';
import { searchJobs } from './store/actions/api';
import withPagination from './shared/hoc/withPagination';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.lastQuery = '';
        this.state = {
            searchString: this.lastQuery,
            jobs: [],
        };
    }

    componentDidMount() {
        this.retrieveJobs();
    }

    componentDidUpdate(prevProps) {
        const { search } = this.props,
            { search: prevSearch } = prevProps;
        if (search.page !== prevSearch.page || search.total_num !== prevSearch.total_num || search.size !== prevSearch.size) {
            this.props.setPagination({
                page: search.page,
                total: search.total_num,
                size: search.size
            });
        }
    }

    updateSearchString = evt => {
        this.setState({ searchString: evt.target.value });
    }

    retrieveJobs = (options = {}) => {
        const { pagination } = this.props;
        this.props.searchJobs({
            size: options.size || pagination.size,
            query: this.lastQuery,
            page: options.page || pagination.page
        });
        window.scrollTo({ top: 0 });
    }

    handleSearch = () => {
        this.lastQuery = this.state.searchString;
        this.retrieveJobs({ page: 1 });
    }

    onPageChange = page => {
        this.retrieveJobs({ page });
    }

    render() {
        const { searchString } = this.state,
            { search, data, pagination, searchStatus } = this.props,
            { handleSearch, updateSearchString, onPageChange } = this;
        return (
            <div className="App">
                <div className="App-Wrapper">
                    <Header />
                    <div>
                        <SearchPanel
                            searchInput={searchString}
                            onSearchInputChange={updateSearchString}
                            onSearch={handleSearch}
                        />
                        <div style={{ padding: '10px 20px' }}>
                            {searchStatus.searching ? <p>Searching...</p> :
                                searchStatus.error ? <p>Unable to retrieve jobs.</p> :
                                    (
                                        <Pagination {...pagination} onPageChange={onPageChange}>
                                            {search.jobIds.map(id => (
                                                <JobCard
                                                    key={id}
                                                    job={data[id]}
                                                />
                                            ))}
                                        </Pagination>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { jobs } = state,
        { search, data, searchStatus } = jobs;
    return {
        search,
        data,
        searchStatus
    }
}

const mapDispatchToProps = {
    searchJobs
};

export default connect(mapStateToProps, mapDispatchToProps)(withPagination(App));
