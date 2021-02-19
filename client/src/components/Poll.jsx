import React, {Fragment, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Pie} from 'react-chartjs-2';

import {vote} from "../store/actions";
import {Col, Container, Row} from "react-grid-system";

// Needs to change if poll has more than two options
const COLORS = ['#6699cc', '#CC4C4C'];


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

    useEffect(() => {
        const replaceImage = (champion, role) => {
            let src = "http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/" + champion + ".png";
            let el = document.getElementById(role);
            console.log(el);
            if (el) {
                let elImg = el.firstElementChild;
                elImg.src = src;
                elImg.alt = role;
            }
        };

        const replaceImages = () => {
            if (poll.topBlue && poll.jungleBlue && poll.midBlue && poll.botBlue && poll.supportBlue && poll.topRed && poll.jungleRed && poll.midRed && poll.botRed && poll.supportRed) {
                replaceImage(poll.topBlue, "topBlue");
                replaceImage(poll.jungleBlue, "jungleBlue");
                replaceImage(poll.midBlue, "midBlue");
                replaceImage(poll.botBlue, "botBlue");
                replaceImage(poll.supportBlue, "supportBlue");
                replaceImage(poll.topRed, "topRed");
                replaceImage(poll.jungleRed, "jungleRed");
                replaceImage(poll.midRed, "midRed");
                replaceImage(poll.botRed, "botRed");
                replaceImage(poll.supportRed, "supportRed");
            }
        };
        console.log("works")

        replaceImages();
    }, []);

    const make = () => {

    }

    return (
        <Fragment>
            {/*<h3 className="poll-title">{formatTitle(poll.topBlue, poll.jungleBlue, poll.midBlue,*/}
            {/*    poll.botBlue, poll.supportBlue, poll.topRed, poll.jungleRed, poll.midRed, poll.botRed, poll.supportRed)}</h3>*/}
            <h3 className="poll-title">Which team composition is better?
            </h3>

            <br/>
            <hr/>
            <br/>

            <div className="buttons_center">{answers}</div>
            <div className="buttons_center">
                <button className="button" onClick={() => setShowGraph(true)}>Show graph without voting</button>
            </div>

            <br/>
            <hr/>
            <br/>

            <Container>
                <Row>
                    <Col sm={6}>
                        <div className="blue-side">
                            <div className="pick-container" id="topBlue">
                                <img
                                    src="http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png"
                                    alt="none"/>
                                <p>&nbsp;{poll.topBlue}</p>
                            </div>
                            <div className="pick-container" id="jungleBlue">
                                <img
                                    src="http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png"
                                    alt="none"/>
                                <p>&nbsp;{poll.jungleBlue}</p>
                            </div>
                            <div className="pick-container" id="midBlue">
                                <img
                                    src="http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png"
                                    alt="none"/>
                                <p>&nbsp;{poll.midBlue}</p>
                            </div>
                            <div className="pick-container" id="botBlue">
                                <img
                                    src="http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png"
                                    alt="none"/>
                                <p>&nbsp;{poll.botBlue}</p>
                            </div>
                            <div className="pick-container" id="supportBlue">
                                <img
                                    src="http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png"
                                    alt="none"/>
                                <p>&nbsp;{poll.supportBlue}</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="red-side">
                            <div className="pick-container" id="topRed">
                                <img
                                    src="http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png"
                                    alt="none"/>
                                <p>&nbsp;{poll.topRed}</p>
                            </div>
                            <div className="pick-container" id="jungleRed">
                                <img
                                    src="http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png"
                                    alt="none"/>
                                <p>&nbsp;{poll.jungleRed}</p>
                            </div>
                            <div className="pick-container" id="midRed">
                                <img
                                    src="http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png"
                                    alt="none"/>
                                <p>&nbsp;{poll.midRed}</p>
                            </div>
                            <div className="pick-container" id="botRed">
                                <img
                                    src="http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png"
                                    alt="none"/>
                                <p>&nbsp;{poll.botRed}</p>
                            </div>
                            <div className="pick-container" id="supportRed">
                                <img
                                    src="http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png"
                                    alt="none"/>
                                <p>&nbsp;{poll.supportRed}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br/>
            <hr/>
            {poll.options && (showGraph || hasVoted()) && <Pie data={data}/>}
            <br/>
        </Fragment>
    )

}


export default connect(store => ({
        poll: store.currentPoll,
        auth: store.auth
    }), {vote}
)(Poll);