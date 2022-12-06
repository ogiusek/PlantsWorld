import React from "react";
import Trash from "../Ai/Interface/Blocks/Trash";
import style from "./Players.module.css";

function PlayerInterface(props) {
    const nameChangeInputHandler = (event) => {
        let array = Array.from(props.players);
        const change = event.target.value;
        change.length < 13 && (array[props.player].name = change);
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
        const option = <option value={index} key={index} className='unselectable'>{element.name}</option>;
        element.name === props.players[props.player].code.name && (optionsIndex = index);
        return option;
    });

    const remove = () => {
        let array = Array.from(props.players);
        if (array.length < 2) {
            return;
        }
        array = array.filter((element, index) => {
            return props.player != index;
        });
        props.setPlayers(array);
        props.setPlayer(0);
    }

    return (<div className={style.interface}>
        <select onChange={selectHandler} value={optionsIndex}>
            {options}
        </select>
        <input type={'text'} value={props.players[props.player].name} onChange={nameChangeInputHandler} />
        <div style={{ height: '5vh' }}>
            <Trash remove={remove} />
        </div>
    </div>);
}

export default PlayerInterface;