import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as api from '../../shared/api';
import * as util from '../../shared/util';
import { authenticateUser, incrementSearchCount } from '../../store/actions/actions';
import Search from './searchBox.js';
import ResultGrid from './resultGrid';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            fullInfoFilter: {},
            planets: [],
            lastSearchTime: 0,
            secondsElapsed: 0,
            error: ''
        }

    }

    componentDidMount() {
        this.interval = setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
    }

    callApi(input, uri, results) {
        api.getPlanetSuggestions(input, uri, (response) => {
            if (response != null && response.data != null) {
                const resultNode = response.data;
                results = [...results].concat(resultNode.results || []);
                this.setState({ planets: results });
                if (resultNode.next) {
                    this.callApi('', resultNode.next, results);
                }
            }
        });
    }

    handleSearch = (event) => {
        const input = event.target.value;
        const { lastSearchTime } = this.state;
        const diff = this.state.secondsElapsed - lastSearchTime;
        let planets = [];
        const error = (this.props.user.username !== 'Luke Skywalker' && this.props.counter > 15 && diff < 60) && util.timeoutMsg;
        if (input !== null && input.trim() !== '' && !error) {
            this.props.incrementSearchCount(this.props.counter + 1); // increment counter
            this.callApi(input, util.planetsUri, []);
            this.setState({ input, lastSearchTime: this.state.secondsElapsed, error: '' });
        } else {
            this.setState({ input, planets, error });
        }
    }

    showPlanetInfo = (name) => {
        // insert planet in map
        const fullInfoFilter = { ...this.state.fullInfoFilter, [name]: !this.state.fullInfoFilter[name] };
        this.setState({ fullInfoFilter });
    }

    render() {
        if (!this.props.isLoggedIn || !this.props.location.state.isLoggedIn) {
            return <Redirect to={{
                pathname: '/login',
                state: { isLoggedIn: this.props.isLoggedIn }
            }} />;
        } else {
            return (
                <div className="container-fluid">
                    <Search
                        searchTxt={this.state.input}
                        handleSearch={this.handleSearch}
                    />
                    <ResultGrid
                        rowdata={this.state.planets}
                        error={this.state.error}
                        fullInfoFilter={this.state.fullInfoFilter}
                        showPlanetInfo={this.showPlanetInfo}
                    />
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        counter: state.dashboardReducer.counter,
        user: state.authenticationReducer.user,
        isLoggedIn: state.authenticationReducer.isLoggedIn
    };
}

export default connect(mapStateToProps, { incrementSearchCount, authenticateUser })(Dashboard);