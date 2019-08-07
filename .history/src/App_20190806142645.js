import React, { Component } from 'react';
import axios from 'axios';

import Header from './shared/components/Header'
import SearchPanel from './shared/components/SearchPanel';
import JobCard from './shared/components/JobCard';
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
        axios.get('search/job_filter?size=10')
            .then(response => {
                
            })
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

export default App;
