import React, { Component } from 'react';
import './App.css';

import Header from './shared/components/Header'
import SearchPanel from './shared/components/SearchPanel';
import JobCard from './shared/components/JobCard';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
        };
    }

    updateSearchString = evt => {
        this.setState({ searchString: evt.target.value });
    }

    handleSearch = () => {

    }

    render() {
        return (
            <div className="App">
                <div className="App-Wrapper">
                    <Header />
                    <div>
                        <SearchPanel />
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
