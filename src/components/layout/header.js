import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticateUser } from '../../store/actions/actions'
import xebia from '../../assets/img/xebia.png';
import user from '../../assets/img/user.png';

class Header extends Component {

    handleLogout = (e) => {
        e.preventDefault();
        this.props.authenticateUser(false);
    };

    render() {
        return (
            <header className="App-header">
                <img src={xebia} className="App-logo" alt="logo" />
                <div className="logoutContainer">
                    <button type="submit" className="btn btn-primary" onClick={e => this.handleLogout(e)}>LOGOUT</button>
                </div>
                <div className="userContainer">
                    <img src={user} className="App-avatar" alt="avatar" />
                    <div>
                        {this.props.user && this.props.user.username}
                    </div>
                </div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.authenticationReducer.user
    };
}

export default connect(mapStateToProps, { authenticateUser })(Header);