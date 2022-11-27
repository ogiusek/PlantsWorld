import React from "react";
import style from "./Players.module.css";

function PlayerInterface(props) {
    const nameChangeInputHandler = (event) => {
        let array = Array.from(props.players);
        const change = event.target.value;
        change !== '' && (array[props.player].name = change);
        props.setPlayers(array);
    };
    const selectHandler = (event) => {
        console.log(props.players[props.player].code);
        let array = Array.from(props.players);
        array[props.player].code = props.codes[event.target.value];
        props.setPlayers(array);
    };
    return (<div className={style.interface}>
        <select onChange={selectHandler} >
            {props.codes.map((element, index) => {
                return (
                    <option value={index} key={index}>{element.name}</option>
                );
            })}
        </select>
        <input type={'text'} value={props.players[props.player].name} onChange={nameChangeInputHandler} />
    </div>);
}

export default PlayerInterface;