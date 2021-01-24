import { ADD_ERROR, REMOVE_ERROR } from '../actionType';

export default (state = { message: null }, action) => {
    switch (action.type) {
        case ADD_ERROR:
            console.log("add");
            console.log(state);
            console.log(action);
            return {...state, message: action.error};
        case REMOVE_ERROR:
            console.log("remove");

            return {...state, message: null};
        default:
            console.log("default");

            return state;
    }
}

