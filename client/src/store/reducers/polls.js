import { SET_POLLS, SET_CURRENT_POLL } from '../actionType'

export const polls = (state = [], action) => {
    switch (action.type) {
        case SET_POLLS:
            console.log("polls")
            return action.polls;
        default:
            return state;
    }
};

export const currentPoll = (state = {}, action) => {
    switch (action.type) {
        case SET_CURRENT_POLL:
            return action.poll;
        default:
            return state;
    }
};