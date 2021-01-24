import React, {useState} from 'react';
import {connect} from 'react-redux';

import {authUser, logout} from "../store/actions";

function Auth(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { authType } = props;

    const handleChange = event => {
        switch (event.target.name) {
            case "username":
                setUsername(event.target.value);
                return;
            case "password":
                setPassword(event.target.value);
                return;
            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.authUser(authType || 'login' , { username, password });
    };

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    value={username}
                    name="username"
                    onChange={e => handleChange(e)}
                />
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    value={password}
                    name="password"
                    onChange={e => handleChange(e)}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

// First param is mapping out store to props
// Second param is mapping our actions to props
export default connect(
    () => ({}),
    {authUser, logout}
)(Auth);