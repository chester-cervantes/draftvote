import React, {useEffect} from 'react';
import api from '../services/api'

import decode from 'jwt-decode';
import {Provider} from 'react-redux';
import { store } from '../store';
import {setCurrentUser, setToken, addError} from "../store/actions";

if (localStorage.jwtToken) {
    setToken(localStorage.jwtToken);
    try {
        store.dispatch(setCurrentUser(decode(localStorage.jwtToken)))
    }
    catch (err) {
        store.dispatch(setCurrentUser({}));
        store.dispatch(addError(err));
    }
}

const App = () => (
    <Provider store={store}>
        <div>App works</div>
    </Provider>
);


export default App;