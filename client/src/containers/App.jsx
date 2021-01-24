import React, {useEffect} from 'react';
import decode from 'jwt-decode';
import {Provider} from 'react-redux';

import { store } from '../store';
import {setCurrentUser, setToken, addError} from "../store/actions";
import Auth from "../components/Auth";
import ErrorMessage from "../components/ErrorMessage";

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
        <Auth authType={'login'}/>
        <ErrorMessage />
    </Provider>
);


export default App;