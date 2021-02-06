import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import {Pie} from 'react-chartjs-2';

import Champions from "./Champions";
import {vote} from "../store/actions";

// Needs to change if poll has more than two options
const COLORS = ['#6699cc', '#CC4C4C'];

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

function Poll(props) {
    const {poll, vote, auth} = props;
    const [showGraph, setShowGraph] = useState(false);
    const answers = poll.options && poll.options.map(option => (
        <button
            className="button"
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
    const hasVoted = () => poll.voted.indexOf(auth.user.id) >= 0;

    return (
        <Fragment>
            <h3 className="poll-title">{formatTitle(poll.championsBlue, poll.championsRed)}</h3>
            <div className="buttons_center">{answers}</div>
            <div className="buttons_center">
                <button className="button" onClick={() => setShowGraph(true)}>Show graph without voting</button>
            </div>
            {poll.options && (showGraph || hasVoted()) && <Pie data={data}/>}
        </Fragment>
    )

}



export default connect(store => ({
        poll: store.currentPoll,
        auth: store.auth
    }), {vote}
)(Poll);