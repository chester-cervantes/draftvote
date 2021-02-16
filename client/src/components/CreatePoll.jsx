import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";

import {createPoll} from "../store/actions";

import {withRouter} from 'react-router-dom';

const BLUE = "blue";
const RED = "red";

function CreatePoll(props) {

    const [isFirstSelect, setIsFirstSelect] = useState(true);

    const [currentPick, setCurrentPick] = useState('');
    const [hovered, setHovered] = useState('');
    const [hoveredImg, setHoveredImg] = useState('');

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
        function setChampions() {
            setChampionsBlue([topBlue, jungleBlue, midBlue, botBlue, supportBlue]);
            setChampionsRed([topRed, jungleRed, midRed, botRed, supportRed]);
        }

        setChampions()
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

    useEffect(() => {
        function setChampion() {
            setHovered(hovered);
            if (currentPick && hovered) {
                switch (currentPick) {
                    case "topBlue1":
                        setTopBlue(hovered);
                        break;
                    case "midBlue1":
                        setMidBlue(hovered);
                        break;
                    default:
                        console.log("default!")
                }
                let hoveredEl = document.getElementById(hovered);
                if (hoveredEl.classList.contains("champion-selected")) {
                    hoveredEl.classList.remove("champion-selected");
                }
                let pickEl = document.getElementById(currentPick);
                if (pickEl.classList.contains("pick-selected")) {
                    pickEl.classList.remove("pick-selected");
                }
                setHovered('');
                setCurrentPick('');
            }
        }
        setChampion()
    }, [currentPick, hovered]);

    const handleHover = e => {
        let el = e.target;
        let child = el.firstElementChild;
        if (hovered) {
            let hoveredEl = document.getElementById(hovered);
            if (el === hoveredEl) {
                if (el.classList.contains("champion-selected")) {
                    el.classList.remove("champion-selected");
                }
                setHovered(null);
            } else {
                if (hoveredEl.classList.contains("champion-selected")) {
                    hoveredEl.classList.remove("champion-selected");
                }
                el.classList.add("champion-selected");
                setHovered(el.id)
            }
        } else {
            el.classList.add("champion-selected");
            setHovered(el.id);
        }
    };


    const handleSelect = e => {
        let el = document.getElementById(e.target.id);
        if (currentPick) {
            let currentPickEl = document.getElementById(currentPick);
            if (el === currentPickEl) {
                if (el.classList.contains("pick-selected")) {
                    el.classList.remove("pick-selected");
                }
                setCurrentPick('');
            } else {
                if (currentPickEl.classList.contains("pick-selected")) {
                    currentPickEl.classList.remove("pick-selected");
                }
                el.classList.add("pick-selected");
                setCurrentPick(el.id)
            }
        } else {
            el.classList.add("pick-selected");
            setCurrentPick(el.id);
        }
    };

    const handleRightClick = e => {
        e.preventDefault();
        console.log("right clicked")
    }

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
            <div>
                <div><p>first = {isFirstSelect === true}</p></div>
                <div><p>current pick = {currentPick}</p></div>
                <div><p>hovered = {hovered}</p></div>
                <div><p>top blue = {topBlue}</p></div>
                <button onClick={() => console.log(topBlue)}>Current Pick</button>
                <button onClick={() => setHovered("Ahri")}>Current Pick</button>
                <br/>
                <div className="pick-container" id="topBlue1" onClick={(e) => handleSelect(e)}
                     onContextMenu={e => handleRightClick(e)}>
                    <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Anivia.png" alt="Anivia"/>
                </div>
                <div className="pick-container" id="midBlue1" onClick={(e) => handleSelect(e)}
                     onContextMenu={e => handleRightClick(e)}>
                    <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Aatrox.png" alt="Aatrox"/>
                </div>
            </div>
            <div>
                <div className="champion-container" id="Aatrox" onClick={(e) => handleHover(e)}>
                    <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Aatrox.png" alt="Aatrox"/>
                </div>
                <div className="champion-container" id="Ahri" onClick={(e) => handleHover(e)}>
                    <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Ahri.png" alt="Ahri"/>
                </div>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Akali.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Alistar.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Amumu.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Anivia.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Annie.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Aphelios.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Ashe.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/AurelionSol.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Azir.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Bard.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Blitzcrank.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Brand.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Braum.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Caitlyn.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Camille.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Cassiopeia.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Chogath.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Corki.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Darius.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Diana.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/DrMundo.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Draven.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Ekko.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Elise.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Evelynn.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Ezreal.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Fiddlesticks.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Fiora.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Fizz.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Galio.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Gangplank.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Garen.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Gnar.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Gragas.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Graves.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Hecarim.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Heimerdinger.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Illaoi.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Irelia.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Ivern.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Janna.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/JarvanIV.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Jax.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Jayce.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Jhin.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Jinx.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Kaisa.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Kalista.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Karma.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Karthus.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Kassadin.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Katarina.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Kayle.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Kayn.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Kennen.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Khazix.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Kindred.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Kled.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/KogMaw.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Leblanc.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/LeeSin.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Leona.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Lillia.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Lissandra.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Lucian.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Lulu.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Lux.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Malphite.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Malzahar.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Maokai.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/MasterYi.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/MissFortune.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Mordekaiser.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Morgana.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Nami.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Nasus.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Nautilus.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Neeko.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Nidalee.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Nocturne.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Nunu.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Olaf.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Orianna.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Ornn.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Pantheon.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Poppy.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Pyke.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Qiyana.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Quinn.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Rakan.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Rammus.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/RekSai.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Rell.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Renekton.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Rengar.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Riven.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Rumble.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Ryze.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Samira.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Sejuani.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Senna.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Seraphine.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Sett.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Shaco.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Shen.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Shyvana.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Singed.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Sion.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Sivir.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Skarner.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Sona.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Swain.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Sylas.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Syndra.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/TahmKench.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"/>
                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"/>
            </div>
        </div>
    )
};


// First param takes in the store and returns object of error: store.error
// Maps the store's error to the component's prop
export default withRouter(connect(() => ({}), {createPoll})(CreatePoll))
