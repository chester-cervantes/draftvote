import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import {Pie} from 'react-chartjs-2';

import {vote} from "../store/actions";

// Needs to change if poll has more than two options
const COLORS = ['#6699cc', '#CC4C4C'];

function Poll(props) {
    const {poll, vote, auth} = props;

    const answers = poll.options && poll.options.map(option => (
        <button
            onClick={() => vote(poll._id, {answer: option.option})}
            key={option._id}>
            {option.option}
        </button>
    ));

    const data = poll.options && {
        // changes options from objects to array of strings
        labels: poll.options.map(option => option.option),
        datasets: [
            {
                label: poll.question,
                backgroundColor: COLORS,
                borderColor: '#000000',
                data: poll.options.map(option => option.votes)
            }
        ]
    };

    // Check if user already voted
    const hasVoted = poll.voted.indexOf(auth.user.id) >= 0;

    return (
        <Fragment>
            <h3>{poll.championsBlue}</h3>
            <h3>{poll.championsRed}</h3>
            <div>{answers}</div>
            {poll.options && hasVoted && <Pie data={data}/>}
        </Fragment>
    )

}

export default connect(store => ({
        poll: store.currentPoll,
        auth: store.auth
    }), {vote}
)(Poll);