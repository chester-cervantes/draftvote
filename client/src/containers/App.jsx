import React, {Fragment, useEffect} from 'react';
import decode from 'jwt-decode';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';


import {store} from '../store';
import {setCurrentUser, setToken, addError} from "../store/actions";
import RouteViews from "./RouteViews";
import NavBar from "./NavBar";

if (localStorage.jwtToken) {
    setToken(localStorage.jwtToken);
    try {
        store.dispatch(setCurrentUser(decode(localStorage.jwtToken)))
    } catch (err) {
        store.dispatch(setCurrentUser({}));
        store.dispatch(addError(err));
    }
}

const App = () => (
    <Provider store={store}>
        <Router>
            <Fragment>
                <NavBar/>
                <RouteViews/>
            </Fragment>
        </Router>
    </Provider>
);


export default App;