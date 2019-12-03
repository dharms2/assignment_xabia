import React from 'react';
import userLogin from '../../assets/img/user-login.png';

const LoginForm = (props) => {
    return (
        <div>
            <div className="imgcontainer">
                <img src={userLogin} alt="Avatar" className="avatar" />
            </div>
            <div className="container">
                <label><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" value={props.username} onChange={props.handleInputChange} />
                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" value={props.password} onChange={props.handleInputChange} />
            </div>
            <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
                <button type="submit" className="btn btn-primary" onClick={props.handleLogin}>LOGIN</button>
                {props.error && (
                    <div className="errorContainer">
                        {'User not authorized.'}
                    </div>
                )}
            </div>
        </div>
    );
}

export default LoginForm;