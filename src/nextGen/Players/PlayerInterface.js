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
        let array = Array.from(props.players);
        array[props.player].code = props.codes[event.target.value];
        props.setPlayers(array);
    };
    let optionsIndex;
    let options = props.codes;
    options = options.map((element, index) => {
        const option = <option value={index} key={index}>{element.name}</option>;
        element.name === props.players[props.player].code.name && (optionsIndex = index);
        return option;
    });

    return (<div className={style.interface}>
        <select onChange={selectHandler} value={optionsIndex} >
            {options}
        </select>
        <input type={'text'} value={props.players[props.player].name} onChange={nameChangeInputHandler} />
    </div>);
}

export default PlayerInterface;