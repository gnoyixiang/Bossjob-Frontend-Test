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
        this.state = {
            searchString: '',
            jobs: [],
        };
    }

    componentDidMount() {
        this.handleSearch();
    }

    componentDidUpdate(prevProps) {
        const { search } = this.props,
            { search: prevSearch } = prevProps;
        if(search.page !== prevSearch.page || search.total_num !== prevSearch.total_num || search.size !== prevSearch.size)
        this.props.setPagination({
            page: search.page,
            total: search.total_num,
            size: search.size
        });
    }

    updateSearchString = evt => {
        this.setState({ searchString: evt.target.value });
    }

    handleSearch = () => {
        const { pagination } = this.props,
            { searchString } = this.state;
        this.props.searchJobs({
            size: pagination.size,
            query: searchString,
            page: pagination.page
        });
    }

    render() {
        const { searchString } = this.state,
            { search, data, pagination } = this.props,
            { handleSearch, updateSearchString } = this;
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
                            <Pagination {...pagination}>
                                {search.jobIds.map(id => (
                                    <JobCard
                                        key={id}
                                        job={data[id]}
                                    />
                                ))}
                            </Pagination>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { jobs } = state,
        { search, data } = jobs;
    return {
        search,
        data
    }
}

const mapDispatchToProps = {
    searchJobs
};

export default connect(mapStateToProps, mapDispatchToProps)(withPagination(App));
