import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";

import {createPoll} from "../store/actions";

import {withRouter} from 'react-router-dom';

const BLUE = "blue";
const RED = "red";

function CreatePoll(props) {

    const [topBlue, setTopBlue] = useState('');
    const [jungleBlue, setJungleBlue] = useState('');
    const [midBlue, setMidBlue] = useState('');
    const [botBlue, setBotBlue] = useState('');
    const [supportBlue, setSupportBlue] = useState('');
    const [topRed, setTopRed] = useState('');
    const [jungleRed, setJungleRed] = useState('');
    const [midRed, setMidRed] = useState('');
    const [botRed, setBotRed] = useState('');
    const [supportRed, setSupportRed] = useState('');

    const [championsBlue, setChampionsBlue] = useState([]);
    const [championsRed, setChampionsRed] = useState([]);

    useEffect(() => {
        function test() {
            setChampionsBlue([topBlue, jungleBlue, midBlue, botBlue, supportBlue]);
            setChampionsRed([topRed, jungleRed, midRed, botRed, supportRed]);
        }

        test()
    }, [topBlue, jungleBlue, midBlue, botBlue, supportBlue, topRed, jungleRed, midRed, botRed, supportRed]);

    const handleSubmit = event => {
        event.preventDefault();
        const state = {
            championsBlue: championsBlue,
            championsRed: championsRed,
            options: [BLUE, RED]
        };
        props.createPoll(state);
    };

    return (
        <div className="form">
            <table>
                <tbody>
                <tr>
                    <td>
                        <input
                            className="form-input"
                            required
                            type='text'
                            name='topBlue'
                            id='topBlue'
                            value={topBlue}
                            onChange={e => setTopBlue(e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            className="form-input"
                            required
                            type='text'
                            name='topRed'
                            id='topRed'
                            value={topRed}
                            onChange={e => setTopRed(e.target.value)}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input
                            className="form-input"
                            required
                            type='text'
                            name='jungleBlue'
                            id='jungleBlue'
                            value={jungleBlue}
                            onChange={e => setJungleBlue(e.target.value)}
                        /></td>
                    <td>
                        <input
                            className="form-input"
                            required
                            type='text'
                            name='jungleRed'
                            id='jungleRed'
                            value={jungleRed}
                            onChange={e => setJungleRed(e.target.value)}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input
                            className="form-input"
                            required
                            type='text'
                            name='midBlue'
                            id='midBlue'
                            value={midBlue}
                            onChange={e => setMidBlue(e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            className="form-input"
                            required
                            type='text'
                            name='midRed'
                            id='midRed'
                            value={midRed}
                            onChange={e => setMidRed(e.target.value)}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input
                            className="form-input"
                            required
                            type='text'
                            name='botBlue'
                            id='botBlue'
                            value={botBlue}
                            onChange={e => setBotBlue(e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            className="form-input"
                            required
                            type='text'
                            name='botRed'
                            id='botRed'
                            value={botRed}
                            onChange={e => setBotRed(e.target.value)}
                        />
                    </td>
                </tr>
                <tr>
                    <td>

                        <input
                            className="form-input"
                            required
                            type='text'
                            name='supportBlue'
                            id='supportBlue'
                            value={supportBlue}
                            onChange={e => setSupportBlue(e.target.value)}
                        />
                    </td>
                    <td>

                        <input
                            className="form-input"
                            required
                            type='text'
                            name='supportRed'
                            id='supportRed'
                            value={supportRed}
                            onChange={e => setSupportRed(e.target.value)}
                        />
                    </td>
                </tr>
                </tbody>
            </table>
            <form onSubmit={e => handleSubmit(e)}>
                <input
                    type='hidden'
                    name='championsBlue'
                    value={championsBlue}
                />
                <input
                    type='hidden'
                    name='championsRed'
                    value={championsRed}
                />
                <div className="buttons_center">
                    <button
                        className="button"
                        type='submit'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
};


// First param takes in the store and returns object of error: store.error
// Maps the store's error to the component's prop
export default withRouter(connect(() => ({}), {createPoll})(CreatePoll))
