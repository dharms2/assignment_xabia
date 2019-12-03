import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { storeUser, authenticateUser } from '../../store/actions/actions';
import LoginForm from './form.js';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: ''
        }

    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleLogin = (e) => {
        e.preventDefault();

        const { username, password } = this.state;

        if (!username || !password) {
            this.setState({ error: 'Please enter Username and Password.' });
            this.props.authenticateUser(false);
        } else {
            this.setState({ error: '' });
            this.props.storeUser({ username, password });
            this.props.authenticateUser(true);
        }
    }

    render() {
        if (this.props.isLoggedIn || (this.props.location.state && this.props.location.state.isLoggedIn)) {
            return <Redirect to={{
                pathname: '/dashboard',
                state: { isLoggedIn: this.props.isLoggedIn }
            }} />;
        } else {
            return (
                <LoginForm
                    username={this.state.username}
                    password={this.state.password}
                    error={this.state.error}
                    handleInputChange={this.handleInputChange}
                    handleLogin={this.handleLogin}
                />
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.authenticationReducer.isLoggedIn
    };
}

export default connect(mapStateToProps, { storeUser, authenticateUser })(Login);