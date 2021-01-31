import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';

import { getPolls, getUserPolls, getCurrentPoll } from "../store/actions";


// Changes HomePage to PollPage
function handleSelect(id, props) {
    // get History obj from ReactRouter
    const {history} = props;
    history.push(`/poll/${id}`);
}

function Polls(props) {
    console.log("Polls!!!!");
    console.log(props);
    console.log(props.polls);

    const polls = props.polls.map(
        poll => <li onClick={() => handleSelect(poll._id, props)} key={poll._id}>{poll.championsBlue}{poll.championsRed}</li>
    );

    const {auth, getPolls, getUserPolls} = props;

    useEffect(() => {
        const { getPolls } = props;
        getPolls();
    }, []);

    return (
        <Fragment>
            {auth.isAuthenticated && (
                <div>
                    <button onClick={getPolls}>All Polls</button>
                    <button onClick={getUserPolls}>My Polls</button>
                </div>
            )}
            <ul>{polls}</ul>
        </Fragment>
    )

}

export default connect(store => ({
    auth: store.auth,
    polls: store.polls
}), { getPolls, getUserPolls, getCurrentPoll }
)(Polls);