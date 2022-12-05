import React, { useState } from 'react';
import PlayerInterface from './PlayerInterface';
import style from "./Players.module.css";

import PlayersBar from './PlayersBar';

function Players(props) {
    const [player, setPlayer] = useState(0);

    return (<div className={style.main}>
        <PlayersBar setPlayers={props.setPlayers} players={props.players} setPlayer={setPlayer} player={player} />
        <PlayerInterface players={props.players} player={player} setPlayers={props.setPlayers} setPlayer={setPlayer} codes={props.codes} />
    </div>);
}

export default Players;