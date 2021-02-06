import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';

import { getPolls, getUserPolls, getCurrentPoll } from "../store/actions";


// Changes HomePage to PollPage
function handleSelect(id, props) {
    // get History obj from ReactRouter
    const {history} = props;
    history.push(`/poll/${id}`);
}

function formatTitle(championsBlue, championsRed) {
    let text = "";
    let i;
    if (championsBlue && championsRed) {
        for (i = 0; i < championsBlue.length - 1; i++) {
            text += championsBlue[i] + ", ";
        }
        text += championsBlue[i] + " || ";
        for (i = 0; i < championsRed.length - 1; i++) {
            text += championsRed[i] + ", ";
        }
        text += championsRed[i];
    }
    return text
}

function Polls(props) {

    const polls = props.polls.map(
        poll => <li onClick={() => handleSelect(poll._id, props)} key={poll._id}>{formatTitle(poll.championsBlue, poll.championsRed)}</li>
    );

    const {auth, getPolls, getUserPolls} = props;

    useEffect(() => {
        const { getPolls } = props;
        getPolls();
    }, []);

    return (
        <Fragment>
            {auth.isAuthenticated && (
                <div className="buttons_center">
                    <button className="button" onClick={getPolls}>All Polls</button>
                    <button className="button" onClick={getUserPolls}>My Polls</button>
                </div>
            )}
            <ul className="polls">{polls}</ul>
        </Fragment>
    )

}

export default connect(store => ({
    auth: store.auth,
    polls: store.polls
}), { getPolls, getUserPolls, getCurrentPoll }
)(Polls);