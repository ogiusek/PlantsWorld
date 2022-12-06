import React from "react";
import style from "./Players.module.css";

import AddPlayer from "./PlayerComponents/AddPlayer";
import PlayerIcon from "./PlayerComponents/PlayerIcon";
import defaultAi from "../../additionalFiles/defaultAi";

function PlayersBar(props) {
    const addPlayer = (name) => {
        let array = Array.from(props.players);
        array.push({ name: name, code: props.codes[0] });
        props.setPlayers(array);
    }

    return (<div className={style.bar}>
        {
            props.players.map((element, index) => {
                const setPlayer = () => {
                    props.setPlayer(index);
                }
                return (
                    <PlayerIcon
                        name={element.name}
                        selected={props.player === index}
                        index={index}
                        key={index}
                        setPlayer={setPlayer} />
                );
            })
        }
        <AddPlayer
            addPlayer={addPlayer}
            players={props.players}
            setPlayers={props.setPlayers}
        />
    </div>);
}

export default PlayersBar;