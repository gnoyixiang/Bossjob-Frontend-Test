import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Header from './shared/components/Header'
import SearchPanel from './shared/components/SearchPanel';
import JobCard from './shared/components/JobCard';
import { searchJobs } from './store/actions/api';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
            jobs: [],
            pagination: {

            }
        };
    }

    updateSearchString = evt => {
        this.setState({ searchString: evt.target.value });
    }

    handleSearch = () => {
        this.props.searchJobs();
    }

    render() {
        const { searchString } = this.state,
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
                            <p>
                                Please show a list of jobs as per design
                            </p>
                            <JobCard />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { jobs } = state,
        { search, data } = jobs,
        searchedJobs = search.jobIds.map(jobId => data[jobId]);
    return {
        searchResults: searchedJobs
    }
}

const mapDispatchToProps = {
    searchJobs
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
